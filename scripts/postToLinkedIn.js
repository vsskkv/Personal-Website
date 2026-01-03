const fs = require('fs');
const path = require('path');
const { blogPosts } = require('../src/app/blog/data');
const fetch = require('node-fetch');

const LINKEDIN_ACCESS_TOKEN = process.env.LINKEDIN_ACCESS_TOKEN;
const LINKEDIN_API_URL = 'https://api.linkedin.com/v2/ugcPosts';
const POSTED_FILE = path.join(__dirname, 'postedToLinkedIn.json');

// Load or initialise posted slugs
let posted = [];
if (fs.existsSync(POSTED_FILE)) {
  posted = JSON.parse(fs.readFileSync(POSTED_FILE, 'utf8'));
}

// Find new published posts
const newPosts = blogPosts.filter(post => post.published && !posted.includes(post.slug));

async function postToLinkedIn(post) {
  const body = {
    author: 'urn:li:person:YOUR_LINKEDIN_PERSON_URN', // <-- Replace with your LinkedIn URN
    lifecycleState: 'PUBLISHED',
    specificContent: {
      'com.linkedin.ugc.ShareContent': {
        shareCommentary: {
          text: `${post.title}\n\n${post.excerpt}\n\nRead more: YOUR_BLOG_URL/blog/${post.slug}`,
        },
        shareMediaCategory: 'NONE',
      },
    },
    visibility: {
      'com.linkedin.ugc.MemberNetworkVisibility': 'PUBLIC',
    },
  };

  const res = await fetch(LINKEDIN_API_URL, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${LINKEDIN_ACCESS_TOKEN}`,
      'Content-Type': 'application/json',
      'X-Restli-Protocol-Version': '2.0.0',
    },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    throw new Error(`Failed to post to LinkedIn: ${res.status} ${await res.text()}`);
  }
  return true;
}

(async () => {
  if (!LINKEDIN_ACCESS_TOKEN) {
    console.error('Missing LINKEDIN_ACCESS_TOKEN');
    process.exit(1);
  }
  if (newPosts.length === 0) {
    console.log('No new published posts to send to LinkedIn.');
    return;
  }
  for (const post of newPosts) {
    try {
      await postToLinkedIn(post);
      posted.push(post.slug);
      console.log(`Posted to LinkedIn: ${post.title}`);
    } catch (e) {
      console.error(`Error posting ${post.title}:`, e.message);
    }
  }
  fs.writeFileSync(POSTED_FILE, JSON.stringify(posted, null, 2));
})(); 