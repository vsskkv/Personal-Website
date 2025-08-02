// Import all blog posts from individual files
import { blogPost as powerPlatformNavigation } from './posts/power-platform-navigation';
import { blogPost as presentationPrep } from './posts/presentation-prep';
import { blogPost as websiteDevelopment } from './posts/website-development';

// Combine all blog posts into a single array
export const blogPosts = [
  powerPlatformNavigation,
  presentationPrep,
  websiteDevelopment,
].filter(post => post.published); // Only include published posts

// Export individual posts for direct access
export { powerPlatformNavigation, presentationPrep, websiteDevelopment }; 