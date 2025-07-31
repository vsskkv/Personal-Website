// Import all blog posts from individual files
import { blogPost as templatePost } from './posts/template';
import { blogPost as textHeavyPost } from './posts/text-heavy-post';
import { blogPost as codeHeavyPost } from './posts/code-heavy-post';

// Combine all blog posts into a single array
export const blogPosts = [
  templatePost,
  textHeavyPost,
  codeHeavyPost,
].filter(post => post.published); // Only include published posts

// Export individual posts for direct access
export { templatePost, textHeavyPost, codeHeavyPost }; 