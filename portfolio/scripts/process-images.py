#!/usr/bin/env python3
"""
Quick script to process and optimize images for the portfolio.
Just drag your images into the portfolio/images-raw/ folder and run this.
"""
import os
import sys
from pathlib import Path
from PIL import Image

# Image mapping - update these to match your actual image files
IMAGE_MAPPING = {
    # Map your image filenames to the portfolio filenames
    # Add your actual filenames here when you have them
}

def optimize_image(input_path, output_path, max_size=(1920, 1080), quality=85):
    """Convert and optimize image to WebP"""
    try:
        img = Image.open(input_path)
        img.thumbnail(max_size, Image.Resampling.LANCZOS)
        img.save(output_path, 'WEBP', quality=quality, optimize=True)
        print(f"✓ Processed: {output_path.name}")
        return True
    except Exception as e:
        print(f"✗ Error processing {input_path}: {e}")
        return False

def main():
    raw_dir = Path(__file__).parent.parent / "images-raw"
    output_dir = Path(__file__).parent.parent / "public" / "portfolio"
    
    # Create directories
    raw_dir.mkdir(exist_ok=True)
    output_dir.mkdir(exist_ok=True)
    
    # Find all images in raw directory
    images = list(raw_dir.glob("*.png")) + list(raw_dir.glob("*.jpg")) + list(raw_dir.glob("*.jpeg"))
    
    if not images:
        print(f"No images found in {raw_dir}")
        print(f"Just drag your images into {raw_dir} and run this script again!")
        return
    
    print(f"Found {len(images)} images to process...")
    
    # Process each image
    for img_path in images:
        # You'll need to rename these to match your actual files
        # For now, just process and save with original name
        output_name = img_path.stem + ".webp"
        output_path = output_dir / output_name
        optimize_image(img_path, output_path)
    
    print(f"\n✓ Done! Images saved to {output_dir}")

if __name__ == "__main__":
    main()

