# Vikram Singh Kainth - Portfolio Website

A modern, responsive portfolio website showcasing expertise in Power Platform, React, and modern web development. Built with Next.js, TypeScript, and Tailwind CSS.

## 🌟 Live Demo

[View Live Portfolio](https://vikram-portfolio.pages.dev)

## 🚀 Features

### **Professional Presentation**
- **Responsive Design** - Optimized for all devices and screen sizes
- **Smooth Animations** - Powered by Framer Motion for engaging interactions
- **Typewriter Effect** - Dynamic text animations on the hero section
- **Career Timeline** - Visual representation of professional journey
- **Project Showcase** - Detailed project presentations with technology stacks

### **Power Platform Focus**
- **Microsoft Power Platform** expertise showcase
- **Power Apps, Power Automate, Power BI** specializations
- **Dataverse and SharePoint** integrations
- **Automation solutions** and business process optimization

### **Modern Web Development**
- **React & Next.js** applications
- **TypeScript** for type safety
- **Tailwind CSS** for modern styling
- **Responsive design** principles

### **Content Management**
- **Blog System** - Built-in blog with RSS feed
- **News Feed** - Power Platform news aggregation with web scraping
- **Project Portfolio** - Detailed project descriptions and case studies
- **Contact Form** - Functional contact form with email integration
- **SEO Optimized** - Meta tags and structured data

## 🛠️ Tech Stack

### **Frontend**
- **Next.js 15.4.2** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library

### **Development Tools**
- **ESLint** - Code linting and formatting
- **PostCSS** - CSS processing
- **Git** - Version control

### **Deployment**
- **Cloudflare Pages** - Static site hosting
- **Static Export** - Optimized for CDN delivery

## 📁 Project Structure

```
my-portfolio/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── about/             # About page with timeline
│   │   ├── blog/              # Blog system
│   │   │   ├── [slug]/        # Individual blog posts
│   │   │   ├── data.ts        # Blog post data
│   │   │   ├── posts/         # Blog post content
│   │   │   └── rss/           # RSS feed
│   │   ├── projects/          # Projects showcase
│   │   │   ├── [slug]/        # Individual project pages
│   │   │   └── data.ts        # Project data
│   │   ├── news/              # News page with web scraping
│   │   │   └── page.tsx       # News page component
│   │   ├── api/               # API routes
│   │   │   ├── contact/       # Contact form API
│   │   │   └── news/          # News scraping API
│   │   ├── globals.css        # Global styles
│   │   ├── layout.tsx         # Root layout
│   │   └── page.tsx           # Home page
│   ├── components/            # Reusable components
│   │   └── Typewriter.tsx    # Typewriter animation
│   ├── lib/                   # Library files
│   │   └── power-platform-icons.tsx  # Platform icons
│   ├── types/                 # TypeScript definitions
│   └── utils/                 # Utility functions
├── public/
│   ├── images/               # Image assets
│   │   ├── avatar.png        # Profile image
│   │   ├── powerapps.png     # Power Apps icon
│   │   ├── pa.png           # Power Automate icon
│   │   └── power-bi.png     # Power BI icon
│   ├── favicon.ico         # Site favicon
│   └── icons/              # Icon assets
├── scripts/                 # Build and deployment scripts
└── ...                      # Configuration files
```

## 🚀 Getting Started

### **Prerequisites**
- Node.js 18+ 
- npm or yarn

### **Installation**

1. **Clone the repository**
   ```bash
   git clone https://github.com/vsskkv/Personal-Website.git
   cd Personal-Website
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

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 Customization

### **Adding Blog Posts**
1. Create a new file in `src/app/blog/posts/`
2. Export a `blogPost` object with required fields
3. Add to `src/app/blog/data.ts`

### **News Feed Management**
- **Automatic Scraping**: The news feed automatically scrapes Power Platform related content
- **Manual Updates**: Run `node scripts/update-news.js` to test scraping
- **API Endpoint**: `/api/news` provides the latest news data
- **Sources**: Microsoft Power Platform Blog and Community forums

### **Updating Projects**
1. Edit `src/app/projects/data.ts`
2. Add project details, technologies, and descriptions
3. Include relevant images in `public/images/`

### **Modifying Skills**
1. Update skill data in `src/app/page.tsx` and `src/app/about/page.tsx`
2. Adjust project counts and categories as needed

### **Styling Changes**
- Global styles: `src/app/globals.css`
- Component styles: Tailwind CSS classes
- Animations: Framer Motion configurations

## 📱 Responsive Design

The portfolio features:
- **Mobile-first** approach
- **Progressive enhancement** for larger screens
- **Touch-friendly** interactions
- **Optimized images** and assets
- **Fast loading** times

## 🔧 Development

### **Code Organization**
- **Components**: Reusable UI components in `src/components/`
- **Data**: Static data and configurations in `src/lib/`
- **Assets**: Images in `public/images/`, icons in `public/icons/`
- **Scripts**: Build and deployment utilities in `scripts/`

### **Adding Features**
1. Create components in `src/components/`
2. Add TypeScript types in `src/types/` if needed
3. Update data files in appropriate directories
4. Test responsiveness across devices

### **Performance Optimization**
- Static site generation
- Image optimization
- Code splitting
- Lazy loading

## 🌐 Deployment

### **Cloudflare Pages**
The site is configured for deployment on Cloudflare Pages:
- Static export with `output: 'export'`
- Optimized build process
- CDN delivery for fast loading

### **Build Configuration**
- `next.config.js` - Next.js configuration
- `wrangler.toml` - Cloudflare Pages configuration
- `package.json` - Dependencies and scripts

## 📊 Performance

- **Lighthouse Score**: 95+ across all metrics
- **Core Web Vitals**: Optimized for user experience
- **SEO**: Structured data and meta tags
- **Accessibility**: WCAG compliant

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

- **Portfolio**: [vikram-portfolio.pages.dev](https://vikram-portfolio.pages.dev)
- **Email**: vsskkv@gmail.com
- **LinkedIn**: [Your LinkedIn Profile]

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS
