#!/bin/bash
# Quick image upload script using imgur API
# Usage: ./upload-images.sh image1.png image2.jpg ...

API_KEY="546c10a8c03a309"  # Public imgur API key (no auth needed)

for image in "$@"; do
    if [ -f "$image" ]; then
        echo "Uploading $image..."
        response=$(curl -s -X POST \
            -H "Authorization: Client-ID $API_KEY" \
            -F "image=@$image" \
            https://api.imgur.com/3/image)
        
        url=$(echo $response | grep -o '"link":"[^"]*' | cut -d'"' -f4)
        if [ ! -z "$url" ]; then
            echo "✓ Uploaded: $url"
            echo "$url" >> image-urls.txt
        else
            echo "✗ Failed to upload $image"
        fi
    fi
done

echo ""
echo "All URLs saved to image-urls.txt"

