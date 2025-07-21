export const blogPosts = [
  // --- Example Blog Post 1 ---
  {
    slug: "power-platform-best-practices",
    title: "Power Platform Best Practices",
    date: "2024-06-01",
    excerpt: "Tips and strategies for building scalable solutions on the Power Platform.",
    image: "/globe.svg",
    published: true,
    content: [
      { type: "paragraph", text: "In this post, we explore best practices for Power Apps, Power Automate, and Dataverse integration." },
      { type: "image", src: "/globe.svg", alt: "Power Platform" },
      { type: "heading", level: 2, text: "Key Strategies" },
      { type: "paragraph", text: "Structure your apps, manage data, and automate processes for maximum efficiency." },
      { type: "code", language: "js", code: "const automate = () => 'Power Automate!';" },
    ],
  },
  // --- Example Blog Post 2 ---
  {
    slug: "react-native-vs-expo",
    title: "React Native vs Expo: Which Should You Choose?",
    date: "2024-05-20",
    excerpt: "A comparison of React Native and Expo for mobile app development.",
    image: "/next.svg",
    published: true,
    content: [
      { type: "paragraph", text: "We break down the pros and cons of using React Native directly versus Expo for rapid prototyping and deployment." },
      { type: "image", src: "/next.svg", alt: "Expo Logo" },
      { type: "heading", level: 2, text: "Pros & Cons" },
      { type: "paragraph", text: "Expo is great for quick starts, but React Native gives you more control." },
      { type: "code", language: "js", code: "import { Expo } from 'expo';" },
    ],
  },
  // --- Example Blog Post 3: Mixed Content ---
  {
    slug: "my-flexible-post",
    title: "A Flexible Blog Post",
    date: "2024-06-10",
    excerpt: "This post shows how to mix text, images, and more.",
    image: "/vercel.svg",
    published: true,
    content: [
      { type: "paragraph", text: "Welcome to my flexible blog post!" },
      { type: "image", src: "/vercel.svg", alt: "Vercel Logo" },
      { type: "paragraph", text: "You can add as many blocks as you want." },
      { type: "heading", level: 2, text: "A Subheading" },
      { type: "code", language: "js", code: "console.log('Hello, world!');" },
    ],
  },
  // --- Example Blog Post 4: Image Only ---
  {
    slug: "just-an-image",
    title: "Just an Image Post",
    date: "2024-06-11",
    excerpt: "A post that is just an image block.",
    image: "/window.svg",
    published: true,
    content: [
      { type: "image", src: "/window.svg", alt: "Just an Image" },
    ],
  },
]; 