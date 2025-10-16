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

### Using shadcn CLI (Recommended)

This registry provides a shadcn-compatible component registry that can be used with the shadcn CLI.

#### Quick Start with shadcn CLI

1. **Ensure you have a `components.json` file in your project root:**

```json
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "default",
  "rsc": false,
  "tsx": true,
  "tailwind": {
    "config": "",
    "css": "",
    "baseColor": "slate",
    "cssVariables": false
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils"
  }
}
```

2. **Set up path aliases in your project:**

Add to your `tsconfig.json`:
```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

Add to your `webpack.config.js` (or similar bundler config):
```js
{
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
}
```

3. **Install components using shadcn CLI:**

```bash
# Add Button component
npx shadcn@latest add https://raw.githubusercontent.com/yesoreyeram/yet-another-experiment/main/public/r/button.json

# Add SpecialButton component (includes Button as dependency)
npx shadcn@latest add https://raw.githubusercontent.com/yesoreyeram/yet-another-experiment/main/public/r/special-button.json
```

4. **Install required dependencies:**

```bash
npm install @grafana/ui react react-dom
```

#### Available Registry Components

- **button**: `https://raw.githubusercontent.com/yesoreyeram/yet-another-experiment/main/public/r/button.json`
- **special-button**: `https://raw.githubusercontent.com/yesoreyeram/yet-another-experiment/main/public/r/special-button.json`
- **index** (all components): `https://raw.githubusercontent.com/yesoreyeram/yet-another-experiment/main/public/r/index.json`

### Install via npm

```bash
npm install yet-another-experiment @grafana/ui react react-dom
```

### Manual Component Installation

If you prefer not to use the shadcn CLI, you can manually copy components:

#### Important Notes on Path Aliases

**When copying components:**
- Components in this registry use `@/components/...` imports (path aliases)
- If your project doesn't use path aliases, you'll need to update the imports to relative paths
- Example: Change `import { Button } from '@/components/button'` to `import { Button } from '../button'`

**Note for Grafana Plugins:** If you're using `@grafana/create-plugin`, the webpack config is managed by the plugin tools. You may need to use relative imports instead of path aliases, or configure path alias support according to Grafana's plugin development guidelines.

#### Steps

1. **Install required dependencies**

```bash
npm install @grafana/ui react react-dom
```

2. **Copy component files**

For the Button component:
```bash
# Create directory
mkdir -p src/components/button

# Copy files from this registry
curl -o src/components/button/button.tsx https://raw.githubusercontent.com/yesoreyeram/yet-another-experiment/main/src/components/button/button.tsx
curl -o src/components/button/index.ts https://raw.githubusercontent.com/yesoreyeram/yet-another-experiment/main/src/components/button/index.ts
```

For the SpecialButton component (requires Button):
```bash
# Create directory
mkdir -p src/components/special-button

# Copy files from this registry
curl -o src/components/special-button/special-button.tsx https://raw.githubusercontent.com/yesoreyeram/yet-another-experiment/main/src/components/special-button/special-button.tsx
curl -o src/components/special-button/index.ts https://raw.githubusercontent.com/yesoreyeram/yet-another-experiment/main/src/components/special-button/index.ts
```

4. **Use the components**

```tsx
import { Button } from '@/components/button';
import { SpecialButton } from '@/components/special-button';

function App() {
  return (
    <>
      <Button variant="primary">Click me</Button>
      <SpecialButton special={true}>Special Button</SpecialButton>
    </>
  );
}
```

### Install via npm (Alternative)

If you prefer npm package installation instead of copying files:

```bash
npm install yet-another-experiment @grafana/ui react react-dom
```

Then import:
```tsx
import { Button, SpecialButton } from 'yet-another-experiment';
```

### Install specific components from GitHub Pages

You can also download individual component files from the registry:

1. Check the [registry.json](registry.json) file for component details
2. Download the component files from the GitHub Pages deployment at `https://yesoreyeram.github.io/yet-another-experiment/`
3. Copy them to your project following the path alias setup above

## Building from Source

```bash
# Install dependencies
npm install

# Build the components
npm run build

# Build the shadcn registry
npm run build:registry
```

The built component files will be in the `dist/` directory, and the shadcn registry files will be in the `public/r/` directory.

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
├── dist/                          # Built output
├── public/                        # shadcn registry files
│   └── r/                         # Registry JSON files
│       ├── index.json             # Registry index
│       ├── button.json            # Button component registry
│       └── special-button.json    # SpecialButton component registry
├── scripts/
│   └── build-registry.js          # Registry build script
├── test-plugin/                   # Grafana plugin integration test
│   └── test-test-datasource/      # Sample Grafana datasource plugin
├── registry.json                  # Component registry metadata
├── components.json                # shadcn CLI configuration
├── package.json
├── tsconfig.json
└── webpack.config.js
```

### Scripts

- `npm run build` - Build the component library
- `npm run build:registry` - Build the shadcn registry files

### Registry Files

The shadcn registry is automatically generated in the `public/r/` directory:

- `public/r/index.json` - Registry index with all available components
- `public/r/button.json` - Button component registry
- `public/r/special-button.json` - SpecialButton component registry

These files are used by the shadcn CLI to add components to your project.

### Testing with Grafana Plugins

A sample Grafana datasource plugin is included in the `test-plugin/test-test-datasource` directory to demonstrate how to integrate these components into a Grafana plugin.

**To test the integration:**

1. Build the registry components:
   ```bash
   npm run build
   ```

2. Navigate to the test plugin:
   ```bash
   cd test-plugin/test-test-datasource
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. The components are already copied into `src/components/`. Build the plugin:
   ```bash
   npm run build
   ```

5. Verify the build succeeded - you should see `dist/module.js` and `dist/plugin.json`

The test plugin demonstrates that registry components can be successfully integrated into Grafana plugins with proper imports and build configuration.

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
