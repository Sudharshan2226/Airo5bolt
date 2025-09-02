# Hacktronix1.0

This project has been cleaned up and optimized. Previously unused components have been removed.

## Project Structure

The project now uses a modern floating navigation dock interface with the following key components:

### Active Components:
- `src/components/PrimaryHero.tsx` - Main hero section
- `src/components/FloatingNav.tsx` - Modern floating navigation dock
- `src/components/Events.tsx` - Events information section
- `src/components/WhyJoinUs.tsx` - Why join section
- `src/components/CollegeMap.tsx` - College location map
- `src/components/OrganizersPage.tsx` - Team/organizers page
- `src/components/Rules.tsx` - Guidelines and rules
- `src/components/Results.tsx` - Results page
- `src/components/Footer.tsx` - Footer component
- `src/components/Preloader.tsx` - Loading animation

### UI Components:
- `src/components/ui/floating-dock.tsx` - Floating dock navigation
- `src/components/ui/button.tsx` - Reusable button component
- `src/components/ui/card-flip.tsx` - Card flip animations
- `src/components/ui/GradientText.tsx` - Gradient text component

## Recent Updates

- ✅ Replaced traditional header with modern floating navigation dock
- ✅ Removed unused legacy components 
- ✅ Fixed TypeScript build errors
- ✅ Resolved merge conflicts
- ✅ Added floating navigation with smooth animations
- ✅ Optimized build performance
- ✅ Configured for GitHub Pages deployment

## GitHub Pages Deployment

This project is configured for automatic deployment to GitHub Pages. 

### Setup Instructions:

1. **Enable GitHub Pages in your repository settings:**
   - Go to your repository on GitHub
   - Navigate to Settings → Pages
   - Under "Source", select "GitHub Actions"

2. **Automatic Deployment:**
   - The site will automatically deploy when you push to the `main` branch
   - The GitHub Actions workflow will build and deploy your site
   - Your site will be available at: `https://sudharshan2226.github.io/Airo5bolt/`

3. **Manual Deployment (alternative):**
   ```bash
   npm run deploy
   ```

### Development Commands:

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Deploy to GitHub Pages
npm run deploy
```