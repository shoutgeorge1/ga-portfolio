#!/usr/bin/env python3
"""Reconvert downloaded PNG images to high-quality WebP"""
from pathlib import Path
from PIL import Image

MAPPING = {
    'temp-Balcony-Design-Permit-Services-California-Dr-Balcony-Engineering-12-27-2025-08-55-AM.png': 'balcony-design-permit-desktop.webp',
    'temp-Brent-Moelleken-Santa-Barbara-Plastic-Surgeon-12-27-2025-08-55-AM.png': 'dr-brent-call-tracking-desktop.webp',
    'temp-City-of-El-Cerrito-Building-Safety-Compliance-Portal-Dr-Balcony-12-27-2025-08-55-AM.png': 'city-direct-mail-el-cerrito-desktop.webp',
    'temp-Emergency-Dentist-in-Encino-Same-Day-Relief-Encino-Family-Dental-12-27-2025-08-55-AM.png': 'encino-dental-emergency-desktop.webp',
    'temp-NLS-Campaign-Monarch-Landscape-Companies-12-27-2025-08-56-AM.png': 'monarch-landscape-desktop.webp',
    'temp-Rhinoplasty-Beverly-Hills-Dr-Karan-Dhir-Double-Board-Certified-Facial-Plastic-Surgeon-12-27-2025-08.png': 'dr-dhir-rhyno-desktop.webp',
    'temp-SEO-Technical-Audit-Report-RND-Builders-12-27-2025-08-55-AM.png': 'rnd-vs-katz-seo-audit-desktop.webp',
    'temp-Top-Rated-Dentist-in-Beverly-Hills-Tru-GLO-Modern-Dental-Same-Day-Appointments-12-27-2025-08-55-AM.png': 'truglow-phone-offers-desktop.webp',
}

def convert_image(input_path, output_path, max_size=(3840, 2160), quality=95):
    try:
        img = Image.open(input_path)
        original_size = img.size
        print(f"  Original: {original_size[0]}x{original_size[1]}")
        
        # Only resize if larger than max_size (preserve original if smaller)
        if img.size[0] > max_size[0] or img.size[1] > max_size[1]:
            img.thumbnail(max_size, Image.Resampling.LANCZOS)
            print(f"  Resized to: {img.size[0]}x{img.size[1]}")
        
        img.save(output_path, 'WEBP', quality=quality, method=6, optimize=True)
        print(f"✓ Converted: {output_path.name} ({img.size[0]}x{img.size[1]}, quality={quality})")
        return True
    except Exception as e:
        print(f"✗ Error: {e}")
        return False

def main():
    portfolio_dir = Path(__file__).parent.parent / "public" / "portfolio"
    
    print("Converting images to high-quality WebP...\n")
    
    for temp_name, final_name in MAPPING.items():
        temp_path = portfolio_dir / temp_name
        final_path = portfolio_dir / final_name
        
        if temp_path.exists():
            print(f"Processing {temp_name}...")
            convert_image(temp_path, final_path)
            # Keep temp file for now
            print()
        else:
            print(f"⚠ Not found: {temp_name}")
    
    print("✓ Conversion complete!")

if __name__ == "__main__":
    main()

