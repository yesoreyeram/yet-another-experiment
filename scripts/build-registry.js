#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Read the registry.json file
const registryPath = path.join(__dirname, '../registry.json');
const registry = JSON.parse(fs.readFileSync(registryPath, 'utf8'));

// Create the public/r directory if it doesn't exist
const publicDir = path.join(__dirname, '../public/r');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// Create registry index
const registryIndex = {
  name: registry.name,
  description: registry.description,
  components: registry.components.map(c => ({
    name: c.name,
    description: c.description,
    dependencies: c.dependencies || [],
    registryDependencies: c.registryDependencies || [],
  }))
};

fs.writeFileSync(
  path.join(publicDir, 'index.json'),
  JSON.stringify(registryIndex, null, 2)
);

console.log('✓ Generated registry index');

// Generate individual component registry files
registry.components.forEach(component => {
  const componentRegistry = {
    name: component.name,
    type: 'registry:ui',
    description: component.description,
    dependencies: component.dependencies || [],
    registryDependencies: component.registryDependencies || [],
    files: []
  };

  // Read each file and add its content
  component.files.forEach(filePath => {
    const fullPath = path.join(__dirname, '..', filePath);
    try {
      const content = fs.readFileSync(fullPath, 'utf8');
      const fileName = path.basename(filePath);
      const targetPath = filePath.replace('src/', '');
      
      componentRegistry.files.push({
        path: targetPath,
        content: content,
        type: filePath.endsWith('.tsx') ? 'registry:ui' : 'registry:component'
      });
    } catch (error) {
      console.error(`Error reading file ${filePath}:`, error.message);
    }
  });

  // Write component registry file
  const outputPath = path.join(publicDir, `${component.name}.json`);
  fs.writeFileSync(outputPath, JSON.stringify(componentRegistry, null, 2));
  console.log(`✓ Generated ${component.name}.json`);
});

console.log('\n✓ Registry build complete!');
console.log(`Generated files in: ${publicDir}`);
