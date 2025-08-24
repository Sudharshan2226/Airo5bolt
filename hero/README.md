# Hero Section - Standalone Package

This folder contains a complete, self-contained hero section based on the aanstekelijk.nl website.

## Files Included

### Main File
- `index.html` - The main hero section page

### Assets Structure
```
assets/
├── css/                    # All stylesheets
│   ├── normalize.css
│   ├── components-v1.2.css
│   ├── style-v1.2.css
│   ├── styleguide-v1.2.css
│   └── loconative-scroll.min.css
├── js/                     # JavaScript files
│   ├── SplitText.min.js    # GSAP premium plugin
│   ├── loconative-scroll.min.js
│   ├── ScrollTrigger.min.js
│   └── index.js            # Main application logic
├── fonts/                  # Custom fonts
│   ├── bulevar-poster-webfont-transfonter.*
│   ├── bulevar-regular-webfont-transfonter.*
│   ├── GeneralSans-Variable.ttf
│   └── Migra-Regular.otf
└── img/                    # Images and assets
    ├── texture-dark.jpg
    ├── texture-light.jpg
    ├── texture-primary.jpg
    ├── a-shape-pattern.svg
    └── a-shape-pattern-small.svg

media/                      # Video and media files
└── pages/home/807eb94734-1677769967/
    └── header-video-mobile-v9.mp4
```

## External Dependencies (CDN)

The following libraries are loaded from CDN in the HTML file:

- **GSAP 3.12.2** (Animation library)
  - gsap.min.js
  - ScrollTrigger.min.js
  - TextPlugin.min.js
- **Vimeo Player API** (Video background control)
- **Barba.js** (Page transitions)
- **Vanilla LazyLoad** (Image lazy loading)
- **Flickity** (Carousel functionality)
- **jQuery** (DOM manipulation)

## Features

- ✅ **Exact replica** of the original hero section
- ✅ **Vimeo background videos** with iframe embedding
- ✅ **Shape-polygon overlay** system
- ✅ **Split character animations** for headings
- ✅ **Scroll-triggered parallax** effects
- ✅ **Custom cursor** with interactions
- ✅ **Page transition** support
- ✅ **Mobile-responsive** design
- ✅ **Lazy-loaded images** for performance

## Usage

1. Open `index.html` in a web browser
2. All dependencies are self-contained or loaded from CDN
3. The hero section will work independently of any other project

## Notes

- **SplitText.min.js** requires a GSAP license for commercial use
- Video backgrounds use external Vimeo URLs (800912034)
- Mobile video uses local file: `media/pages/home/807eb94734-1677769967/header-video-mobile-v9.mp4`
- All fonts and assets are included for offline use

## Browser Support

- Modern browsers with ES6+ support
- Chrome, Firefox, Safari, Edge
- Mobile browsers with video autoplay support

## Integration

To integrate into another project:
1. Copy the `assets/` folder to your project
2. Copy the hero section HTML structure from `index.html`
3. Include the CSS and JS dependencies
4. Ensure proper font loading and media paths
