# Muneeb Azfar Nafees - Portfolio Website

An F1-themed personal portfolio website built with React, TypeScript, Vite, and Tailwind CSS. Deployed on GitHub Pages.

## 🏎️ Features

- **F1 Racing Theme**: Navigation and UI elements inspired by Formula 1 racing
- **Dark Mode**: Toggle between light and dark themes
- **Responsive Design**: Works on all devices
- **Fast Performance**: Optimized for Lighthouse scores
- **Accessible**: WCAG AA compliant with reduced motion support
- **Content-Driven**: Easy to update via `src/data/content.ts`

## 🚀 Local Development

### Prerequisites

- Node.js 18+ and npm

### Setup

1. Clone the repository:
```bash
git clone https://github.com/Muneeb-ii/Muneeb-ii.github.io.git
cd Muneeb-ii.github.io
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

## 📝 Updating Content

All content is stored in `src/data/content.ts`. To update the site, edit this file.

### Quick Update Checklist (8 Key Fields)

Update these 8 fields and you're done:

1. **`personalInfo.headline`** - Current role/status
2. **`personalInfo.bio`** - Short bio/description
3. **`experience`** array - Add new work experiences
4. **`projects`** array - Add new projects with full details (problem/approach/results/nextSteps)
5. **`skills`** - Update skill categories and items
6. **`achievements`** - Add new awards or honors
7. **`research.modules`** - Update MultiSOCIAL work details
8. **`personalInfo.links`** - Update social media links (email, LinkedIn, GitHub, LeetCode)

### GitHub Pinned Repos

To display GitHub repositories on the homepage, edit `src/data/githubRepos.ts` and add your pinned repos:

```typescript
export const githubRepos: GitHubRepo[] = [
  {
    name: 'project-name',
    description: 'Project description',
    url: 'https://github.com/muneeb-ii/project-name',
    language: 'Python',
    stars: 0,
  },
];
```

### Project Structure

Each project should include:
- `id`: Unique identifier (used in URLs)
- `title`: Project name
- `period`: Time period
- `category`: 'ml' | 'nlp' | 'quant' | 'tools'
- `skills`: Array of technologies used
- `description`: Short description
- `problem`: What problem it solves
- `approach`: How you solved it
- `results`: What you achieved
- `nextSteps`: Optional future improvements
- `links`: Optional GitHub, demo, or article links
- `featured`: Boolean to show on homepage

## 🚢 Deployment

### Automatic Deployment (GitHub Actions)

The site automatically deploys to GitHub Pages when you push to the `main` branch.

#### Initial Setup

1. **Enable GitHub Pages:**
   - Go to your repository Settings → Pages
   - Under "Source", select **GitHub Actions** (not "Deploy from a branch")
   - Save the settings

2. **Push to main branch:**
   ```bash
   git add .
   git commit -m "Deploy to GitHub Pages"
   git push origin main
   ```

3. **Monitor deployment:**
   - Go to the "Actions" tab in your repository
   - Watch the workflow run (it will build and deploy automatically)
   - Once complete, your site will be live at `https://muneeb-ii.github.io`

#### How It Works

The GitHub Actions workflow (`.github/workflows/deploy.yml`):
1. Triggers on push to `main` branch
2. Installs Node.js and dependencies
3. Builds the site using `npm run build`
4. Deploys to GitHub Pages automatically

#### Troubleshooting

- **Workflow fails:** Check the Actions tab for error messages. Common issues:
  - Missing dependencies: Run `npm install` locally and commit `package-lock.json`
  - Build errors: Test locally with `npm run build`
  
- **Site not updating:** 
  - Wait a few minutes for GitHub Pages to update (can take 1-5 minutes)
  - Check if the workflow completed successfully in the Actions tab
  - Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)

- **404 errors on routes:**
  - Ensure `vite.config.ts` has `base: '/'` for custom domain
  - For `username.github.io`, the base should be `/` (already configured)

### Manual Deployment

If you prefer manual deployment:

1. Build the site:
```bash
npm run build
```

2. Deploy using `gh-pages`:
```bash
npm install -g gh-pages
gh-pages -d dist
```

**Note:** Manual deployment is not recommended. Use GitHub Actions for automatic deployments.

## 🎨 F1 Theme Customization

The F1 theme colors are defined in `tailwind.config.js`. To customize:

- **Primary Colors**: `f1-red`, `f1-orange`
- **Telemetry Colors**: `f1-telemetry-green`, `f1-telemetry-yellow`
- **Accent**: `f1-gold`

Fonts are loaded from Google Fonts:
- **Headings**: Orbitron (racing font)
- **Body**: Inter (clean sans-serif)

## 📁 Project Structure

```
/
├── .github/workflows/    # GitHub Actions deployment
├── public/              # Static assets (images, documents)
├── src/
│   ├── components/     # React components
│   │   ├── f1/         # F1-themed components
│   │   ├── layout/     # Header, Footer, etc.
│   │   ├── projects/   # Project-related components
│   │   └── shared/    # Shared components
│   ├── data/           # Content data (content.ts, types.ts)
│   ├── hooks/          # Custom React hooks
│   ├── pages/          # Page components
│   ├── styles/         # Global styles
│   └── utils/          # Utility functions
├── index.html          # HTML entry point
├── vite.config.ts      # Vite configuration
└── tailwind.config.js  # Tailwind configuration
```

## 🛠️ Tech Stack

- **React 18**: UI library
- **TypeScript**: Type safety
- **Vite**: Build tool and dev server
- **Tailwind CSS**: Styling
- **React Router**: Client-side routing
- **Framer Motion**: Animations (with reduced motion support)

## 📄 License

ISC

## 📧 Contact

- Email: [muneeb.nafees@colby.edu](mailto:muneeb.nafees@colby.edu)
- LinkedIn: [muneebazfarnafees](https://www.linkedin.com/in/muneebazfarnafees/)
- GitHub: [muneeb-ii](https://github.com/muneeb-ii)
- LeetCode: [muneeb-ii](https://leetcode.com/u/muneeb-ii/)
