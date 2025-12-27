# Setup Instructions

## Quick Start

1. **Install dependencies:**
   ```bash
   cd portfolio
   npm install
   ```

2. **Generate screenshots:**
   ```bash
   npm run shots
   ```
   
   This will capture all 8 projects in both desktop and mobile viewports. Takes about 2-3 minutes.

3. **Run development server:**
   ```bash
   npm run dev
   ```

4. **View the portfolio:**
   Open [http://localhost:3000/work](http://localhost:3000/work)

## What's Included

✅ **8 Projects** - All with executive-facing copy
✅ **Screenshot Script** - Automated capture with Playwright
✅ **Image Optimization** - WebP format with Sharp
✅ **Filtering & Search** - By industry and keywords
✅ **Desktop/Mobile Toggle** - View both versions per project
✅ **Featured Section** - 3 highlighted projects
✅ **Premium Design** - Agency-quality UI

## Project URLs

All 8 project URLs are configured in `/src/data/portfolio.ts`. The screenshot script will automatically capture:
- Desktop view (1920x1080)
- Mobile view (375x812)
- Converted to optimized WebP

## Deployment

Ready to deploy to Vercel:

```bash
vercel
```

Or push to GitHub and connect to Vercel for automatic deployments.

