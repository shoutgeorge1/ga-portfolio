# George Aguilar - Portfolio

A polished, executive-facing portfolio showcasing conversion-focused landing pages and marketing technology projects.

## Tech Stack

- **Next.js 14** (App Router)
- **React 18**
- **TypeScript**
- **Tailwind CSS**
- **Playwright** (for screenshot generation)
- **Sharp** (for image optimization)

## Getting Started

### Install Dependencies

```bash
npm install
```

### Generate Screenshots

Before running the site, generate screenshots of all portfolio projects:

```bash
npm run shots
```

For development (only captures first 2 projects):

```bash
npm run shots:dev
```

This will:
1. Launch a headless browser
2. Capture full-page screenshots in desktop (1920x1080) and mobile (375x812) viewports
3. Convert to optimized WebP format
4. Save to `/public/portfolio/`

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   ├── work/
│   │   └── page.tsx        # Portfolio page
│   └── globals.css         # Global styles
├── src/
│   └── data/
│       └── portfolio.ts    # Project data
├── scripts/
│   └── capture-portfolio-screenshots.ts  # Screenshot generator
├── public/
│   └── portfolio/          # Generated screenshots
└── package.json
```

## Features

- ✅ Premium, agency-style design
- ✅ Desktop + mobile screenshot previews
- ✅ Category filtering (Medical, Dental, Local Services, etc.)
- ✅ Search functionality
- ✅ Featured projects section
- ✅ Optimized WebP images
- ✅ Fully responsive
- ✅ Executive-facing copy

## Deployment

Deploy to Vercel:

```bash
vercel
```

Or push to GitHub and connect to Vercel for automatic deployments.
