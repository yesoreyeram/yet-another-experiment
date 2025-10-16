# Component Registry

A shadcn-style React component registry built with TypeScript and webpack. This registry provides reusable React components that wrap and extend components from the `@grafana/ui` package, without depending on Tailwind CSS.

## Components

### Button
A simple wrapper over the Button element from `@grafana/ui` package.

**Dependencies:**
- `@grafana/ui`
- `react`

**Usage:**
```tsx
import { Button } from 'yet-another-experiment';

function App() {
  return (
    <Button variant="primary" onClick={() => alert('Clicked!')}>
      Click me
    </Button>
  );
}
```

### SpecialButton
A special button component that depends on the Button component and adds custom behavior.

**Dependencies:**
- `@grafana/ui`
- `react`
- Button component (from this registry)

**Usage:**
```tsx
import { SpecialButton } from 'yet-another-experiment';

function App() {
  return (
    <>
      <SpecialButton special={true}>Special Button</SpecialButton>
      <SpecialButton special={false}>Regular Button</SpecialButton>
    </>
  );
}
```

## Installation

### Install via npm

```bash
npm install yet-another-experiment @grafana/ui react react-dom
```

### Install specific components

You can also copy individual component files from the registry:

1. Check the [registry.json](registry.json) file for component details
2. Download the component files from the GitHub Pages deployment
3. Copy them to your project

## Building from Source

```bash
# Install dependencies
npm install

# Build the components
npm run build
```

The built files will be in the `dist/` directory.

## Development

### Project Structure

```
├── src/
│   ├── components/
│   │   ├── button/
│   │   │   ├── button.tsx
│   │   │   └── index.ts
│   │   └── special-button/
│   │       ├── special-button.tsx
│   │       └── index.ts
│   └── index.ts
├── dist/                 # Built output
├── registry.json         # Component registry metadata
├── package.json
├── tsconfig.json
└── webpack.config.js
```

### Scripts

- `npm run build` - Build the component library

## Component Registry Format

The `registry.json` file follows a shadcn-style format:

```json
{
  "name": "yet-another-experiment",
  "description": "shadcn-style React component registry",
  "components": [
    {
      "name": "button",
      "description": "Simple wrapper over Button element from @grafana/ui package",
      "dependencies": ["@grafana/ui"],
      "files": [...]
    }
  ]
}
```

## GitHub Actions

This repository includes a GitHub Actions workflow that:

1. Builds the component registry on every push to main
2. Publishes the registry to GitHub Pages
3. Creates downloadable artifacts for each build

The registry is automatically published to GitHub Pages at:
`https://yesoreyeram.github.io/yet-another-experiment/`

## Contributing

1. Fork the repository
2. Create a feature branch
3. Add or modify components in `src/components/`
4. Update `registry.json` with component metadata
5. Build and test your changes
6. Submit a pull request

## License

ISC
