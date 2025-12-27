# Portfolio Page Preview

## Structure

The portfolio page is built with Next.js and includes:

### Layout
- **Navigation Bar** - Sticky header with "George Aguilar" branding
- **Hero Section** - Dark gradient background with title "Conversion-Focused Landing Pages & Audits"
- **Featured Section** - 3 featured projects in a grid
- **All Work Section** - Filterable grid of all projects
- **Footer** - Simple copyright footer

### Features

1. **Featured Projects** (3):
   - City Direct Mail Requirements – El Cerrito
   - Dr. Dhir – Rhyno Clinic Landing Page  
   - SEO Audit Report – RND vs Katz

2. **All Projects** (8 total):
   - Filterable by industry (All, Medical, Dental, Local Services, SEO/Audit, Permits)
   - Searchable by title, tags, or industry
   - Desktop/Mobile view toggle per project

3. **Project Cards Include**:
   - Screenshot preview (desktop/mobile toggle)
   - Industry tags (2 shown)
   - Project title
   - Objective (1 line)
   - Summary (1-2 lines)
   - "View Live →" button

### Design Elements

- **Premium Cards**: White background, subtle shadow, rounded corners
- **Hover Effects**: Cards lift slightly on hover
- **Image Toggle**: Desktop/Mobile button appears on hover
- **Clean Typography**: Inter font, clear hierarchy
- **Responsive Grid**: 3 columns desktop, 2 tablet, 1 mobile

## To View

1. Install dependencies: `npm install`
2. Generate screenshots: `npm run shots` (optional - shows placeholders if not run)
3. Start dev server: `npm run dev`
4. Visit: http://localhost:3000/work

## Screenshot Status

Screenshots will be generated in `/public/portfolio/` as WebP files:
- `{project-id}-desktop.webp`
- `{project-id}-mobile.webp`

If screenshots don't exist, placeholder will show: "📸 Screenshot pending - Run: npm run shots"

