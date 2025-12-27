#!/usr/bin/env python3
"""Download images from URLs and convert to WebP"""
import requests
from pathlib import Path
from PIL import Image
import io

# Image mapping: URL -> filename
IMAGES = {
    'https://i.postimg.cc/bsRNsXsf/Balcony-Design-Permit-Services-California-Dr-Balcony-Engineering-12-27-2025-08-55-AM.png': 'balcony-design-permit-desktop.webp',
    'https://i.postimg.cc/Sn78StpH/Brent-Moelleken-Santa-Barbara-Plastic-Surgeon-12-27-2025-08-55-AM.png': 'dr-brent-call-tracking-desktop.webp',
    'https://i.postimg.cc/PCrfD6w3/City-of-El-Cerrito-Building-Safety-Compliance-Portal-Dr-Balcony-12-27-2025-08-55-AM.png': 'city-direct-mail-el-cerrito-desktop.webp',
    'https://i.postimg.cc/vg6ZBc6q/Emergency-Dentist-in-Encino-Same-Day-Relief-Encino-Family-Dental-12-27-2025-08-55-AM.png': 'encino-dental-emergency-desktop.webp',
    'https://i.postimg.cc/4KPz52Ld/NLS-Campaign-Monarch-Landscape-Companies-12-27-2025-08-56-AM.png': 'monarch-landscape-desktop.webp',
    'https://i.postimg.cc/kRKGjBJ1/Rhinoplasty-Beverly-Hills-Dr-Karan-Dhir-Double-Board-Certified-Facial-Plastic-Surgeon-12-27-2025-08.png': 'dr-dhir-rhyno-desktop.webp',
    'https://i.postimg.cc/BjGHGfR0/SEO-Technical-Audit-Report-RND-Builders-12-27-2025-08-55-AM.png': 'rnd-vs-katz-seo-audit-desktop.webp',
    'https://i.postimg.cc/vcyZY8Hm/Top-Rated-Dentist-in-Beverly-Hills-Tru-GLO-Modern-Dental-Same-Day-Appointments-12-27-2025-08-55-AM.png': 'truglow-phone-offers-desktop.webp',
}

def download_and_convert(url, output_path, max_size=(3840, 2160), quality=95):
    """Download image and convert to WebP at high quality"""
    try:
        print(f"Downloading {url}...")
        response = requests.get(url, timeout=30)
        response.raise_for_status()
        
        # Open image
        img = Image.open(io.BytesIO(response.content))
        original_size = img.size
        print(f"  Original size: {original_size[0]}x{original_size[1]}")
        
        # Only resize if image is larger than max_size (preserve original if smaller)
        if img.size[0] > max_size[0] or img.size[1] > max_size[1]:
            img.thumbnail(max_size, Image.Resampling.LANCZOS)
            print(f"  Resized to: {img.size[0]}x{img.size[1]}")
        
        # Convert to WebP with high quality
        output_path.parent.mkdir(parents=True, exist_ok=True)
        img.save(output_path, 'WEBP', quality=quality, method=6, optimize=True)
        print(f"✓ Saved: {output_path.name} ({img.size[0]}x{img.size[1]}, quality={quality})")
        return True
    except Exception as e:
        print(f"✗ Error processing {url}: {e}")
        return False

def main():
    output_dir = Path(__file__).parent.parent / "public" / "portfolio"
    output_dir.mkdir(parents=True, exist_ok=True)
    
    print(f"Downloading {len(IMAGES)} images...\n")
    
    success = 0
    for url, filename in IMAGES.items():
        output_path = output_dir / filename
        if download_and_convert(url, output_path):
            success += 1
        print()
    
    print(f"✓ Successfully processed {success}/{len(IMAGES)} images")
    print(f"Images saved to: {output_dir}")

if __name__ == "__main__":
    main()

