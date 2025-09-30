# Paige Blum - Portfolio Website

A modern, creative portfolio website showcasing AI engineering work and creative projects. Built with Next.js, TypeScript, and Tailwind CSS.

## Features

- ✨ Stunning gradient animations and smooth transitions
- 🎨 Gallery-like minimalist design with bold creative moments
- 🌓 Dark mode support with toggle
- 📱 Fully responsive mobile design
- ⚡ Optimized performance and fast loading
- 🎭 Animated components with Framer Motion
- 🎯 SEO optimized with proper meta tags

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React

## Getting Started

### Development

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Production Build

Build the project:
```bash
npm run build
```

Start the production server:
```bash
npm start
```

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and configure the build
4. Your site will be live in minutes!

Alternatively, use the Vercel CLI:
```bash
npm install -g vercel
vercel
```

### Deploy to Netlify

1. Push your code to GitHub
2. Connect your repository on [Netlify](https://netlify.com)
3. Set build command: `npm run build`
4. Set publish directory: `.next`
5. Deploy!

### Other Platforms

This Next.js site can be deployed to any platform that supports Node.js:
- AWS Amplify
- Cloudflare Pages
- Railway
- Render
- DigitalOcean App Platform

## Project Structure

```
portfolio/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout with navigation
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── Navigation.tsx     # Header navigation with dark mode
│   ├── Hero.tsx          # Landing section
│   ├── About.tsx         # About section
│   ├── Experience.tsx    # Timeline of experience
│   ├── Projects.tsx      # Featured projects
│   ├── Skills.tsx        # Skills and expertise
│   ├── Contact.tsx       # Contact information
│   └── DarkModeToggle.tsx # Dark mode switch
├── public/               # Static assets
└── tailwind.config.js    # Tailwind configuration
```

## Customization

### Update Personal Information

Edit the content in each component:
- **Hero.tsx** - Name and tagline
- **About.tsx** - Bio and background
- **Experience.tsx** - Work history
- **Projects.tsx** - Featured projects
- **Skills.tsx** - Technical skills
- **Contact.tsx** - Contact links

### Update Colors

Modify the gradient colors in `tailwind.config.js` and `globals.css`:
```css
--accent: #f72585;        /* Primary pink */
--accent-light: #ff8fab;  /* Light pink */
--accent-purple: #7209b7; /* Purple */
```

### Update Metadata

Edit SEO information in `app/layout.tsx`:
```typescript
export const metadata: Metadata = {
  title: "Your Name - Title",
  description: "Your description",
  // ... other metadata
};
```

## Performance

- Optimized images with Next.js Image component
- Code splitting for faster page loads
- Static generation for optimal performance
- Minimal bundle size with tree shaking

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available for personal use.

---

Built with ❤️ using Next.js and creativity