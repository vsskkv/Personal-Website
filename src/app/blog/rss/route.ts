import { NextResponse } from 'next/server';
import { blogPosts } from '../data';

// Required for static export
export const dynamic = 'force-static';

export async function GET() {
  const siteUrl = 'https://YOUR_DOMAIN.com'; // <-- Replace with your domain
  const publishedPosts = blogPosts.filter(post => post.published);

  const items = publishedPosts.map(post => `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>${siteUrl}/blog/${post.slug}</link>
      <description><![CDATA[${post.excerpt}]]></description>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <guid>${siteUrl}/blog/${post.slug}</guid>
    </item>
  `).join('');

  const rss = `<?xml version="1.0" encoding="UTF-8" ?>
    <rss version="2.0">
      <channel>
        <title>Vikram Singh Kainth Blog</title>
        <link>${siteUrl}/blog</link>
        <description>Insights, tutorials, and stories from my journey in tech.</description>
        <language>en</language>
        ${items}
      </channel>
    </rss>
  `;

  return new NextResponse(rss, {
    status: 200,
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
    },
  });
} 