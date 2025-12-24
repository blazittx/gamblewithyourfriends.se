# Gamble With Your Friends

A modern, SEO-optimized website showcasing the game with beautiful visuals and information.

## Features

- 🚀 Built with React and Vite for fast development and production builds
- 🎨 Modern, responsive UI with beautiful gradients and animations
- 🔍 SEO optimized with meta tags, Open Graph, Twitter Cards, and structured data
- 📱 Fully responsive design for all devices
- 🌐 Ready for Netlify deployment

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

## Deployment to Netlify

The project is already configured for Netlify deployment:

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Connect your repository to Netlify
3. Netlify will automatically detect the build settings from `netlify.toml`
4. Your site will be live!

### Manual Deployment

You can also deploy manually using the Netlify CLI:

```bash
npm install -g netlify-cli
netlify deploy --prod
```

## Project Structure

```
├── src/
│   ├── components/     # React components
│   ├── App.jsx         # Main app component
│   ├── App.css         # App styles
│   ├── main.jsx        # Entry point
│   └── index.css       # Global styles
├── index.html          # HTML template
├── vite.config.js      # Vite configuration
├── netlify.toml        # Netlify configuration
└── package.json        # Dependencies
```

## SEO Features

- Comprehensive meta tags
- Open Graph tags for social sharing
- Twitter Card support
- JSON-LD structured data (Schema.org)
- Semantic HTML structure
- Optimized page titles and descriptions

## Customization

Update the following to customize the site:

- **Content**: Edit components in `src/components/`
- **SEO**: Update meta tags in `src/App.jsx`
- **Styling**: Modify CSS files in `src/components/` and `src/`
- **Colors**: Update CSS variables in `src/index.css`

## License

MIT
