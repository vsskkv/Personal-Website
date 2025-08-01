# Vikram Singh Kainth - Portfolio

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Responsive Design** - Optimized for all screen sizes
- **Smooth Animations** - Powered by Framer Motion
- **Typewriter Effect** - Dynamic text animations
- **Power Platform Focus** - Showcases Microsoft Power Platform expertise
- **Blog Integration** - Built-in blog system
- **Project Showcase** - Dedicated projects section

## 📁 File Structure

```
my-portfolio/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── about/             # About page
│   │   ├── blog/              # Blog pages and data
│   │   ├── projects/          # Projects pages and data
│   │   ├── globals.css        # Global styles
│   │   ├── layout.tsx         # Root layout
│   │   └── page.tsx           # Home page
│   ├── components/            # Reusable components
│   │   └── Typewriter.tsx    # Typewriter animation component
│   ├── lib/                   # Library files
│   │   └── power-platform-icons.ts  # Power Platform icon data
│   ├── types/                 # TypeScript type definitions
│   └── utils/                 # Utility functions
├── public/
│   ├── images/               # Image assets
│   │   ├── avatar.png        # Profile image
│   │   ├── powerapps.png     # Power Apps icon
│   │   ├── pa.png           # Power Automate icon
│   │   └── power-bi.png     # Power BI icon
│   ├── favicon.ico         # Site favicon
│   └── icons/              # Icon assets
│       ├── next.svg         # Next.js logo
│       └── ...              # Other SVG icons
├── scripts/                 # Build and deployment scripts
│   ├── create-blog-post.js  # Blog post creation script
│   └── postToLinkedIn.js    # LinkedIn posting script
└── ...                      # Configuration files
```

## 🛠️ Tech Stack

- **Framework**: Next.js 15.4.2
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Deployment**: Vercel

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd my-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 Customization

### Adding New Blog Posts
Use the script in `scripts/create-blog-post.js` to create new blog posts.

### Updating Projects
Edit `src/app/projects/data.ts` to add or modify projects.

### Styling
Global styles are in `src/app/globals.css`. Component-specific styles use Tailwind CSS classes.

## 📱 Responsive Design

The portfolio is fully responsive with:
- Mobile-first approach
- Progressive text scaling
- Optimized images
- Touch-friendly interactions

## 🔧 Development

### File Organization
- **Components**: Reusable UI components in `src/components/`
- **Data**: Static data and configurations in `src/lib/`
- **Assets**: Images in `public/images/`, icons in `public/icons/`
- **Scripts**: Build and deployment utilities in `scripts/`

### Adding New Features
1. Create components in `src/components/`
2. Add types in `src/types/` if needed
3. Update data files in `src/lib/`
4. Test responsiveness across devices

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
