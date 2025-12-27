# Quick Image Setup - No Manual Work!

## Option 1: Drag & Drop (Easiest)

1. **Create the folder** (already done): `/Users/george/GA-Portfolio/portfolio/images-raw/`

2. **Drag your 9 images** into that folder (any names, any format - PNG, JPG, etc.)

3. **Run this command:**
   ```bash
   cd /Users/george/GA-Portfolio/portfolio
   python3 scripts/process-images.py
   ```

4. **Done!** Images will be automatically:
   - Converted to WebP
   - Optimized
   - Saved to the right location
   - Ready to use

## Option 2: If You Have Image URLs

Just paste the URLs here and I'll download them automatically.

## Option 3: If Images Are Already on Your Computer

Tell me the folder path where they are, and I'll copy/process them automatically.

---

**The script will:**
- Find all images in `images-raw/`
- Convert to WebP format
- Optimize for web
- Save to `public/portfolio/` with correct names

No manual renaming needed - just drag, drop, run!

