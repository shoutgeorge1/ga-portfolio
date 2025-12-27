# How to Add Screenshots to Your Portfolio

## Quick Steps

1. **Take screenshots** of your live Vercel sites
2. **Save them** in the `portfolio/images/` folder
3. **Name them** like this:
   - `ocdental-lp.png`
   - `samaritandental.png`
   - `novus-health.png`
   - etc.

4. **Update the HTML** - Replace the placeholder divs with actual images:

```html
<!-- Replace this: -->
<div class="placeholder-image">
    OC Dental Landing Page
</div>

<!-- With this: -->
<img src="images/ocdental-lp.png" alt="OC Dental Landing Page" class="project-image">
```

## Screenshot Tips

- **Use full-page screenshots** (not just viewport)
- **1920px width** is ideal
- **PNG format** for best quality
- **Take on desktop** for consistent sizing

## Tools for Screenshots

- **Chrome DevTools**: F12 → Cmd+Shift+P → "Capture full size screenshot"
- **Firefox**: Right-click → "Take Screenshot" → "Full Page"
- **Online tools**: FullPageScreenCapture.com

## Current Placeholders

The portfolio currently shows gradient placeholders. Once you add screenshots, they'll automatically display.

## File Structure

```
portfolio/
├── index.html
├── images/
│   ├── ocdental-lp.png
│   ├── samaritandental.png
│   ├── novus-health.png
│   └── ... (all your screenshots)
```

## Need Help?

If you want, I can help you:
1. Take screenshots programmatically (if sites are public)
2. Update the HTML with image paths
3. Optimize images for web

Just let me know which projects you want to prioritize!

