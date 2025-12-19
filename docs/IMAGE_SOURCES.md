# Image Sources

This document tracks the sources and licenses for all placeholder images used in this template.

## Placeholder Images

Currently, this template uses no external images. When you add images to your project:

1. Document the source and license here
2. Ensure you have proper rights to use the images
3. Optimize images before committing

## Recommended Sources for Royalty-Free Images

- **[Unsplash](https://unsplash.com)** - Free, high-quality photos
- **[Pexels](https://pexels.com)** - Free stock photos and videos
- **[Pixabay](https://pixabay.com)** - Free images and illustrations
- **[unDraw](https://undraw.co)** - Free SVG illustrations

## Image Optimization

Before adding images to `/public/images/`:

1. **Resize** images to the maximum size they'll be displayed
2. **Compress** using tools like:
   - [Squoosh](https://squoosh.app)
   - [TinyPNG](https://tinypng.com)
   - [ImageOptim](https://imageoptim.com)
3. **Convert** to modern formats (WebP, AVIF) when possible
4. **Name** descriptively (e.g., `hero-homepage.jpg`)

## Next.js Image Optimization

This template uses `next/image` which automatically:

- Serves images in modern formats (WebP, AVIF)
- Resizes images for different screen sizes
- Lazy loads images below the fold
- Prevents Cumulative Layout Shift

Always use `<Image>` from `next/image`, never `<img>` tags.

## Example Entry

When you add an image, document it like this:

```markdown
### hero-homepage.jpg
- **Source**: [Unsplash](https://unsplash.com/photos/abc123)
- **Photographer**: John Doe
- **License**: Unsplash License (Free to use)
- **Date Added**: 2024-01-15
```
