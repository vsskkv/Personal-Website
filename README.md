# Vikram Singh Kainth - Portfolio Website

A modern, responsive portfolio website showcasing expertise in Power Platform, React, and modern web development. Built with Next.js, TypeScript, and Tailwind CSS.

## 🌟 Live Demo

[View Live Portfolio](https://vikram-portfolio.pages.dev)

## 🚀 Features

### **Professional Presentation**
- **Responsive Design** - Optimised for all devices and screen sizes
- **Smooth Animations** - Powered by Framer Motion for engaging interactions
- **Typewriter Effect** - Dynamic text animations on the hero section
- **Career Timeline** - Visual representation of professional journey
- **Project Showcase** - Detailed project presentations with technology stacks

### **Power Platform Focus**
- **Microsoft Power Platform** expertise showcase
- **Power Apps, Power Automate, Power BI** specialisations
- **Dataverse and SharePoint** integrations
- **Automation solutions** and business process optimisation

### **Modern Web Development**
- **React & Next.js** applications
- **TypeScript** for type safety
- **Tailwind CSS** for modern styling
- **Responsive design** principles

### **Content Management**
- **Blog System** - Built-in blog with RSS feed
- **Project Portfolio** - Detailed project descriptions and case studies
- **Contact Form** - Functional contact form with email integration
- **SEO Optimised** - Meta tags and structured data

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
- **Static Export** - Optimised for CDN delivery

## 📁 Project Structure

```
my-portfolio/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── about/             # About page with timeline
│   │   ├── api/               # API routes (contact form)
│   │   ├── blog/              # Blog system with MDX support
│   │   ├── projects/          # Project showcase
│   │   ├── venture-consultancy # Venture Consultancy section
│   │   ├── globals.css        # Global styles
│   │   ├── layout.tsx         # Root layout
│   │   └── page.tsx           # Home page
│   ├── components/            # Reusable UI components
│   ├── lib/                   # Utility libraries and data
│   ├── types/                 # TypeScript type definitions
│   └── utils/                 # Helper functions
├── public/                    # Static assets (images, icons)
├── scripts/                   # Build and automation scripts
└── ... config files
```

## 🚀 Getting Started

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

## 🎨 Customisation

### **Adding Blog Posts**
1. Create a new file in `src/app/blog/posts/`
2. Export a `blogPost` object with required fields
3. Add to `src/app/blog/data.ts`



### **Updating Projects**
1. Edit `src/app/projects/data.ts`
2. Add project details, technologies, and descriptions
3. Include relevant images in `public/images/`

### **Modifying Skills**
1. Update skill data in `src/app/page.tsx` and `src/app/about/page.tsx`
2. Adjust project counts and categories as needed

### **Styling Changes**
1. Global styles: `src/app/globals.css`
2. Component styles: Tailwind CSS classes
3. Animations: Framer Motion configurations

## 📱 Responsive Design

The portfolio features:
- **Mobile-first** approach
- **Progressive enhancement** for larger screens
- **Touch-friendly** interactions
- **Optimised images** and assets
- **Fast loading** times

## 🔧 Development

### **Code Organisation**
- **Components**: Reusable UI components in `src/components/`
- **Data**: Static data and configurations in `src/lib/`
- **Assets**: Images in `public/images/`, icons in `public/icons/`
- **Scripts**: Build and deployment utilities in `scripts/`

### **Adding Features**
1. Create components in `src/components/`
2. Add TypeScript types in `src/types/` if needed
3. Update data files in appropriate directories
4. Test responsiveness across devices

### **Performance Optimisation**
- Static site generation
- Image optimisation
- Code splitting
- Lazy loading

## 🌐 Deployment

### **Cloudflare Pages**
The site is configured for deployment on Cloudflare Pages:
- Static export with `output: 'export'`
- Optimised build process

---

Made with ❤️ by [Vikram Singh Kainth](https://github.com/vsskkv)

### **Key Features for Venture Consultancy**
- **Industry Pages**: Specific landing pages for Solicitors, Accountants, and Recruiters.
- **Conversion Focused**: High-impact CTAs and "Is this for you?" filtering.
- **Outcome Led**: Services focused on business pain relief rather than just technical features.
- **Health Check**: A free 15-minute audit as a low-friction entry point.
- **SEO Ready**: Semantic HTML, meta tags, and UK-based location signals.
- **Core Web Vitals**: Optimised for user experience and search engine visibility.
