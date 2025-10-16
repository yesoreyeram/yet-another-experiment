# Next.js Website with TypeScript, Tailwind CSS, and shadcn/ui

This is a modern web application built with:
- **Next.js 15** - React framework for production
- **TypeScript** - Type-safe development
- **Tailwind CSS v4** - Utility-first CSS framework
- **shadcn/ui** - Beautiful, accessible component library

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Available Scripts

- `npm run dev` - Start the development server with Turbopack
- `npm run build` - Build the production application (static export)
- `npm start` - Start the production server
- `npm run lint` - Run ESLint

## Deployment

This project is configured to deploy automatically to GitHub Pages using GitHub Actions.

### Automatic Deployment

The website automatically deploys to GitHub Pages when changes are pushed to the `main` branch. The workflow:

1. Builds the Next.js application as a static export
2. Uploads the build artifacts
3. Deploys to GitHub Pages

### Manual Deployment

You can also trigger a deployment manually from the Actions tab in GitHub.

### Configuration

To enable GitHub Pages deployment:

1. Go to your repository settings
2. Navigate to **Pages** under "Code and automation"
3. Under "Build and deployment", set:
   - **Source**: GitHub Actions
4. The site will be available at `https://<username>.github.io/<repository-name>/`

The deployment workflow is defined in `.github/workflows/deploy.yml`.

## Project Structure

- `/app` - Next.js app directory containing pages and layouts
- `/components` - React components (including shadcn/ui components in `/components/ui`)
- `/lib` - Utility functions and helpers
- `/public` - Static assets

## Technologies

### Next.js 15
The latest version of Next.js with App Router, Server Components, and Turbopack for faster development.

### TypeScript
Full type safety across the entire application with TypeScript 5.

### Tailwind CSS v4
The latest version of Tailwind CSS with improved performance and new features.

### shadcn/ui
A collection of re-usable components built with Radix UI and Tailwind CSS. Components are copied into your project, giving you full control over the code.

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com)
