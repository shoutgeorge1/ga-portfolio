#!/usr/bin/env python3
"""Convert downloaded PNG images to WebP"""
from pathlib import Path
from PIL import Image

MAPPING = {
    'balcony-temp.png': 'balcony-design-permit-desktop.webp',
    'brent-temp.png': 'dr-brent-call-tracking-desktop.webp',
    'city-temp.png': 'city-direct-mail-el-cerrito-desktop.webp',
    'encino-temp.png': 'encino-dental-emergency-desktop.webp',
    'monarch-temp.png': 'monarch-landscape-desktop.webp',
    'dhir-temp.png': 'dr-dhir-rhyno-desktop.webp',
    'audit-temp.png': 'rnd-vs-katz-seo-audit-desktop.webp',
    'truglow-temp.png': 'truglow-phone-offers-desktop.webp',
}

def convert_image(input_path, output_path, max_size=(1920, 1080), quality=85):
    try:
        img = Image.open(input_path)
        if img.size[0] > max_size[0] or img.size[1] > max_size[1]:
            img.thumbnail(max_size, Image.Resampling.LANCZOS)
        img.save(output_path, 'WEBP', quality=quality, optimize=True)
        print(f"✓ Converted: {output_path.name}")
        return True
    except Exception as e:
        print(f"✗ Error: {e}")
        return False

def main():
    portfolio_dir = Path(__file__).parent.parent / "public" / "portfolio"
    
    for temp_name, final_name in MAPPING.items():
        temp_path = portfolio_dir / temp_name
        final_path = portfolio_dir / final_name
        
        if temp_path.exists():
            convert_image(temp_path, final_path)
            temp_path.unlink()  # Delete temp file
        else:
            print(f"⚠ Not found: {temp_name}")

if __name__ == "__main__":
    main()

