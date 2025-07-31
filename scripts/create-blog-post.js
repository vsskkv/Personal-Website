#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const slug = process.argv[2];

if (!slug) {
  console.error('❌ Please provide a slug for your blog post');
  console.log('Usage: node scripts/create-blog-post.js your-post-slug');
  console.log('Example: node scripts/create-blog-post.js power-apps-tutorial');
  process.exit(1);
}

// Validate slug format
if (!/^[a-z0-9-]+$/.test(slug)) {
  console.error('❌ Slug must contain only lowercase letters, numbers, and hyphens');
  console.log('Example: power-apps-tutorial, my-first-post, react-tips');
  process.exit(1);
}

const templatePath = path.join(__dirname, '../src/app/blog/posts/template.ts');
const newPostPath = path.join(__dirname, `../src/app/blog/posts/${slug}.ts`);

// Check if post already exists
if (fs.existsSync(newPostPath)) {
  console.error(`❌ Blog post with slug "${slug}" already exists`);
  process.exit(1);
}

// Read template
const templateContent = fs.readFileSync(templatePath, 'utf8');

// Replace placeholders
const newPostContent = templateContent
  .replace(/slug: "your-post-slug"/, `slug: "${slug}"`)
  .replace(/title: "Your Blog Post Title"/, `title: "Your Blog Post Title"`)
  .replace(/excerpt: "A brief description of your post that appears on the blog listing page."/, `excerpt: "A brief description of your post that appears on the blog listing page."`);

// Write new post file
fs.writeFileSync(newPostPath, newPostContent);

// Update data.ts to include the new post
const dataPath = path.join(__dirname, '../src/app/blog/data.ts');
let dataContent = fs.readFileSync(dataPath, 'utf8');

// Add import
const importLine = `import { blogPost as ${slug.replace(/-/g, '')}Post } from './posts/${slug}';`;
const importMatch = dataContent.match(/import.*from.*posts.*;/g);
if (importMatch) {
  const lastImportIndex = dataContent.lastIndexOf(importMatch[importMatch.length - 1]);
  dataContent = dataContent.slice(0, lastImportIndex + importMatch[importMatch.length - 1].length) + '\n' + importLine + dataContent.slice(lastImportIndex + importMatch[importMatch.length - 1].length);
}

// Add to blogPosts array
const blogPostsMatch = dataContent.match(/export const blogPosts = \[([\s\S]*?)\];/);
if (blogPostsMatch) {
  const arrayContent = blogPostsMatch[1];
  const newArrayContent = arrayContent.trim() + `\n  ${slug.replace(/-/g, '')}Post,`;
  dataContent = dataContent.replace(blogPostsMatch[0], `export const blogPosts = [${newArrayContent}\n].filter(post => post.published);`);
}

// Add to exports
const exportsMatch = dataContent.match(/export \{([\s\S]*?)\};/);
if (exportsMatch) {
  const exportsContent = exportsMatch[1];
  const newExportsContent = exportsContent.trim() + `, ${slug.replace(/-/g, '')}Post`;
  dataContent = dataContent.replace(exportsMatch[0], `export {${newExportsContent}};`);
}

fs.writeFileSync(dataPath, dataContent);

console.log('✅ Blog post created successfully!');
console.log(`📝 Edit your post at: src/app/blog/posts/${slug}.ts`);
console.log('🚀 Your post will appear at: /blog/' + slug);
console.log('');
console.log('💡 Tips:');
console.log('  - Set published: true to make it live');
console.log('  - Add your content in the content array');
console.log('  - Use different content types: paragraph, heading, image, code');
console.log('  - Images go in the public/ folder'); 