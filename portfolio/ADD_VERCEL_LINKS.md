# How to Add Your Vercel Links

## Quick Steps

1. Open `index.html` in your editor
2. Find the project sections (they start with `<div class="project-card">`)
3. Replace the placeholder links with your actual Vercel URLs

## Where to Add Links

### Project 1 (OC Dental)
- Already has: `https://ocdental-lp.vercel.app`
- Update if needed

### Project 2 (Tag Checker)
- Currently only has GitHub link
- Add Vercel link if you have one deployed

### Project 3 (Landing Page Portfolio)
- Add your best Vercel landing page links here
- Or create multiple project cards for each one

## Adding a New Project

Copy this template and paste it in the "ADD MORE PROJECTS HERE" section:

```html
<div class="project-card bg-white rounded-lg p-8 md:p-12">
    <div class="flex flex-col md:flex-row gap-8 items-start">
        <div class="flex-1">
            <div class="text-sm text-gray-500 mb-3 uppercase tracking-wide">Landing Page</div>
            <h3 class="text-3xl font-bold mb-4 text-gray-900">Your Project Name</h3>
            <p class="text-lg text-gray-600 mb-6 leading-relaxed">
                Description of what it does and why it matters for marketing outcomes.
            </p>
            <div class="flex flex-wrap gap-3 mb-6">
                <a href="YOUR_VERCEL_LINK_HERE" target="_blank" class="btn-primary text-sm py-2 px-6">View Live Site →</a>
                <a href="GITHUB_LINK" target="_blank" class="text-gray-600 hover:text-gray-900 text-sm font-medium border-b border-gray-300 hover:border-gray-900 transition">View Code</a>
            </div>
        </div>
    </div>
</div>
```

## Finding Your Vercel Links

1. Go to https://vercel.com
2. Log in
3. Click on each project
4. Copy the deployment URL (usually `project-name.vercel.app`)
5. Paste into the HTML

## Tips

- **Prioritize your best work** - Put the most impressive projects first
- **Focus on live demos** - CEOs/marketing directors want to see working sites
- **Keep descriptions business-focused** - Talk about outcomes, not tech stack
- **Test all links** - Make sure every Vercel link actually works before sharing

## Update Email

Don't forget to update the email in the contact section:
- Line ~180: Change `your-email@example.com` to your actual email

