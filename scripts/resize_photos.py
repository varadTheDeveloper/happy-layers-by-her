"""Resize JPG photos into web WebP files and register them in src/data/images.json.

Usage:  python scripts/resize_photos.py path/to/folder-of-jpgs
Each photo.jpg becomes public/img/photo-480.webp and photo-960.webp.
"""
import json
import os
import sys

from PIL import Image, ImageOps

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = os.path.join(ROOT, 'public', 'img')
MANIFEST = os.path.join(ROOT, 'src', 'data', 'images.json')


def main(folder: str) -> None:
    manifest = json.load(open(MANIFEST, encoding='utf-8'))
    for f in sorted(os.listdir(folder)):
        if not f.lower().endswith(('.jpg', '.jpeg', '.png')):
            continue
        name = os.path.splitext(f)[0].lower().replace(' ', '-')
        im = ImageOps.exif_transpose(Image.open(os.path.join(folder, f))).convert('RGB')
        w, h = im.size
        files = {}
        for target in (480, 960):
            tw = min(target, w)
            out = im if w <= tw else im.resize((tw, round(h * tw / w)), Image.LANCZOS)
            fn = f'{name}-{tw}.webp'
            out.save(os.path.join(OUT, fn), 'WEBP', quality=78, method=6)
            files[str(target)] = fn
        manifest[name] = {'w': w, 'h': h, 'files': files}
        print('added', name)
    json.dump(manifest, open(MANIFEST, 'w', encoding='utf-8'), indent=0)


if __name__ == '__main__':
    if len(sys.argv) != 2:
        sys.exit(__doc__)
    main(sys.argv[1])
