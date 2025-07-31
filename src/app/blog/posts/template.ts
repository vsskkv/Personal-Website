// ========================================
// BLOG POST TEMPLATE
// ========================================
// Copy this file and rename it to your post slug
// Example: template.ts → power-apps-tips.ts
// ========================================

export const blogPost = {
  // ========================================
  // POST METADATA
  // ========================================
  slug: "blog-post-template", // URL-friendly, no spaces, lowercase
  title: "Blog Post Template - How to Create New Posts",
  date: "2024-12-19", // YYYY-MM-DD format
  excerpt: "A comprehensive template showing all the different content types you can use in your blog posts - text, images, code, and more!",
  image: "/avatar.png", // Featured image (optional)
  published: true, // Set to false to save as draft
  
  // ========================================
  // POST CONTENT - COMPLETELY FLEXIBLE!
  // ========================================
  // You can mix and match any content types in any order
  // Each post can be completely different from others
  content: [
    // ========================================
    // TEXT-HEAVY POST EXAMPLE
    // ========================================
    { type: "paragraph", text: "This is a regular paragraph. You can write as much text as you want here. This is perfect for text-heavy posts where you want to share detailed explanations, stories, or tutorials." },
    
    { type: "paragraph", text: "You can have multiple paragraphs in a row. Each one will be properly spaced and formatted. This gives you complete control over the flow of your content." },
    
    { type: "heading", level: 2, text: "A Section Heading" },
    
    { type: "paragraph", text: "After a heading, you can continue with more paragraphs. The heading levels (1, 2, 3, etc.) will be styled differently to create a clear hierarchy." },
    
    // ========================================
    // IMAGE-HEAVY POST EXAMPLE
    // ========================================
    { type: "image", src: "/avatar.png", alt: "Description of the image", caption: "Optional caption below the image" },
    
    { type: "paragraph", text: "You can place images anywhere in your content. Perfect for tutorials, showcases, or visual-heavy posts." },
    
    { type: "image", src: "/avatar.png", alt: "Another image" },
    
    // ========================================
    // CODE-HEAVY POST EXAMPLE
    // ========================================
    { type: "heading", level: 2, text: "Code Examples" },
    
    { type: "paragraph", text: "For technical posts, you can include lots of code examples:" },
    
    { type: "code", language: "js", code: "// JavaScript example\nfunction helloWorld() {\n    console.log('Hello, World!');\n    return 'Success';\n}" },
    
    { type: "paragraph", text: "You can have multiple code blocks with different languages:" },
    
    { type: "code", language: "ts", code: "// TypeScript example\ninterface User {\n    name: string;\n    age: number;\n}\n\nconst user: User = {\n    name: 'John',\n    age: 30\n};" },
    
    { type: "code", language: "html", code: "<!-- HTML example -->\n<div class=\"container\">\n    <h1>Hello World</h1>\n    <p>This is HTML content</p>\n</div>" },
    
    { type: "code", language: "css", code: "/* CSS example */\n.container {\n    max-width: 1200px;\n    margin: 0 auto;\n    padding: 20px;\n}" },
    
    // ========================================
    // MIXED CONTENT EXAMPLE
    // ========================================
    { type: "heading", level: 2, text: "Mixed Content" },
    
    { type: "paragraph", text: "You can mix text, images, and code in any combination. This post could be mostly text with a few images, or mostly code with explanations, or any other combination you want." },
    
    { type: "image", src: "/avatar.png", alt: "Mixed content example" },
    
    { type: "paragraph", text: "After an image, you can continue with more text or code. The possibilities are endless!" },
    
    { type: "code", language: "js", code: "// Final code example\nconst mixedContent = {\n    text: 'Lots of text',\n    images: 'Some images',\n    code: 'Code examples'\n};" },
    
    { type: "paragraph", text: "This template shows you all the possibilities. Each blog post can be completely unique!" }
  ]
}; 