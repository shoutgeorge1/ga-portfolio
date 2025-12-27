# How to Generate Screenshots

## Quick Start

Once you have Node.js dependencies installed:

```bash
cd /Users/george/GA-Portfolio/portfolio
npm install
npm run shots
```

This will:
1. Open a headless browser
2. Visit each of your 8 landing page URLs
3. Take full-page screenshots in desktop (1920x1080) and mobile (375x812)
4. Convert to optimized WebP format
5. Save to `/public/portfolio/`

## What Gets Screenshot

The script will capture:
- City Direct Mail Requirements
- Dr. Dhir – Rhyno Clinic
- Truglow Phone Offers
- Balcony Design Permit
- SEO Audit Report
- Dr. Brent – Call Tracking
- Encino Dental Emergency
- Monarch Landscape

**Note:** DJ GUI (GitHub repo) won't be screenshotted - it's a desktop app, not a web page.

## Time Required

- About 2-3 minutes total
- Each page takes ~15-30 seconds (load time + screenshot)

## Output

Screenshots saved as:
- `city-direct-mail-el-cerrito-desktop.webp`
- `city-direct-mail-el-cerrito-mobile.webp`
- `dr-dhir-rhyno-desktop.webp`
- `dr-dhir-rhyno-mobile.webp`
- etc.

## Troubleshooting

If a page fails to load:
- Check if the URL is still live
- Some pages might require authentication (skip those)
- The script will continue with other pages

## Manual Alternative

If the script doesn't work, you can:
1. Take screenshots manually using Chrome DevTools (F12 → Cmd+Shift+P → "Capture full size screenshot")
2. Save them as PNG
3. Convert to WebP using an online tool
4. Name them according to the pattern above
5. Place in `/public/portfolio/`

