# Christopher Hem's Portfolio

A modern, responsive portfolio website built with Next.js 14, Tailwind CSS, and Framer Motion.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Deployment:** GitHub Pages (static export)

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# The static site is exported to the `out/` directory
```

## Project Structure

```
├── app/
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Home page
│   └── globals.css     # Global styles
├── components/
│   ├── Header.tsx      # Navigation
│   ├── Hero.tsx        # Hero section
│   ├── About.tsx       # About section
│   ├── Experience.tsx  # Education & work timeline
│   ├── Projects.tsx    # Portfolio projects
│   ├── Blog.tsx        # Blog section
│   ├── Contact.tsx     # Contact information
│   └── Footer.tsx      # Footer
├── public/
│   ├── images/         # Profile and project images
│   └── resume.pdf      # Resume file
└── ...
```

## Deployment

The site is configured for static export and can be deployed to GitHub Pages. The build output is in the `out/` directory.
