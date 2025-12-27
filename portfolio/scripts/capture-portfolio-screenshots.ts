import { chromium } from 'playwright';
import sharp from 'sharp';
import { promises as fs } from 'fs';
import path from 'path';
import { portfolio } from '../src/data/portfolio';

const isDev = process.argv.includes('--dev');
// Filter out GitHub projects (dj-gui) - can't screenshot GitHub pages
const projectsToCapture = (isDev ? portfolio.slice(0, 2) : portfolio).filter(
  p => !p.url.includes('github.com')
);

const OUTPUT_DIR = path.join(process.cwd(), 'public', 'portfolio');

// Device viewports - using higher resolution for sharp images
const DESKTOP_VIEWPORT = { width: 2560, height: 1440 };
const MOBILE_VIEWPORT = { width: 375, height: 812 };

async function ensureDir(dir: string) {
  try {
    await fs.mkdir(dir, { recursive: true });
  } catch (error) {
    // Directory might already exist
  }
}

async function captureScreenshot(
  browser: any,
  url: string,
  viewport: { width: number; height: number },
  outputPath: string
) {
  const page = await browser.newPage();
  await page.setViewportSize(viewport);
  
  try {
    console.log(`  Capturing ${viewport.width}x${viewport.height}...`);
    await page.goto(url, { 
      waitUntil: 'networkidle',
      timeout: 30000 
    });
    
    // Wait a bit for any animations/loads
    await page.waitForTimeout(2000);
    
    const screenshot = await page.screenshot({
      type: 'png',
      fullPage: false, // Capture viewport only for consistent sizing
    });
    
    // Convert to WebP with high quality for sharp images
    await sharp(screenshot)
      .webp({ quality: 95, effort: 6 })
      .toFile(outputPath);
    
    console.log(`  ✓ Saved: ${path.basename(outputPath)}`);
  } catch (error) {
    console.error(`  ✗ Error capturing ${url}:`, error);
  } finally {
    await page.close();
  }
}

async function main() {
  console.log('📸 Starting portfolio screenshot capture...\n');
  console.log(`Projects to capture: ${projectsToCapture.length}\n`);
  
  await ensureDir(OUTPUT_DIR);
  
  const browser = await chromium.launch({
    headless: true,
  });
  
  for (const project of projectsToCapture) {
    console.log(`\n📦 ${project.title}`);
    console.log(`   URL: ${project.url}`);
    
    const slug = project.id;
    
    // Desktop screenshot
    const desktopPath = path.join(OUTPUT_DIR, `${slug}-desktop.webp`);
    await captureScreenshot(
      browser,
      project.url,
      DESKTOP_VIEWPORT,
      desktopPath
    );
    
    // Mobile screenshot
    const mobilePath = path.join(OUTPUT_DIR, `${slug}-mobile.webp`);
    await captureScreenshot(
      browser,
      project.url,
      MOBILE_VIEWPORT,
      mobilePath
    );
  }
  
  await browser.close();
  
  console.log('\n✅ Screenshot capture complete!');
  console.log(`   Images saved to: ${OUTPUT_DIR}`);
}

main().catch(console.error);

