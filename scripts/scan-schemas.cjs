const fs = require('fs');
const path = require('path');

// Function to scan for JSON Schema files recursively
function scanSchemasRecursively(dir, basePath = '', results = []) {
  try {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      const relativePath = path.join(basePath, entry.name).replace(/\\/g, '/');
      
      if (entry.isDirectory()) {
        // Recursively scan subdirectories
        scanSchemasRecursively(fullPath, relativePath, results);
      } else if (entry.isFile() && entry.name.endsWith('.json')) {
        // Skip the status files
        if (entry.name === 'SchemaStatus.json' || entry.name === 'SchemaToIndexSchema.json') {
          continue;
        }
        
        try {
          // Try to read and parse the JSON file
          const content = fs.readFileSync(fullPath, 'utf8');
          const schema = JSON.parse(content);
          
          // Check if it's a valid JSON Schema
          if (schema && typeof schema["$schema"] === "string" && /json-schema\.org/.test(schema["$schema"])) {
            results.push({
              fileName: entry.name,
              relativePath: relativePath,
              fullPath: fullPath,
              publicPath: `/data/Generated/${relativePath}`,
              title: schema.title || 'Untitled',
              id: schema["$id"] || relativePath,
              version: extractVersion(schema),
              directory: basePath || 'root'
            });
          }
        } catch (e) {
          console.warn(`Failed to parse ${relativePath}:`, e.message);
        }
      }
    }
  } catch (e) {
    console.error(`Failed to scan directory ${dir}:`, e.message);
  }
  
  return results;
}

// Function to extract version from schema
function extractVersion(schema) {
  const id = schema["$id"];
  const src = schema["x-osdu-schema-source"];
  
  if (typeof id === "string") {
    const idMatch = id.match(/:(\d+\.\d+\.\d+)\.json$/);
    if (idMatch) return idMatch[1];
  }
  
  if (typeof src === "string") {
    const srcMatch = src.match(/:(\d+\.\d+\.\d+)$/);
    if (srcMatch) return srcMatch[1];
  }
  
  return undefined;
}

// Main execution
const dataDir = path.join(__dirname, '..', 'public', 'data', 'Generated');

console.log(`Scanning schemas in: ${dataDir}`);
console.log(`Checking if directory exists: ${fs.existsSync(dataDir)}`);

if (!fs.existsSync(dataDir)) {
  console.error('Data directory does not exist!');
  process.exit(1);
}

const schemas = scanSchemasRecursively(dataDir);

console.log(`\nFound ${schemas.length} valid JSON Schema files:`);

// Group by directory
const byDirectory = {};
schemas.forEach(schema => {
  const dir = schema.directory || 'root';
  if (!byDirectory[dir]) byDirectory[dir] = [];
  byDirectory[dir].push(schema);
});

// Print summary by directory
Object.keys(byDirectory).sort().forEach(dir => {
  console.log(`\n${dir}/ (${byDirectory[dir].length} schemas):`);
  byDirectory[dir].slice(0, 5).forEach(schema => {
    console.log(`  - ${schema.fileName} (${schema.title})`);
  });
  if (byDirectory[dir].length > 5) {
    console.log(`  ... and ${byDirectory[dir].length - 5} more`);
  }
});

// Generate a comprehensive list for the React app
const schemaList = schemas.map(s => s.publicPath);

console.log(`\n\nGenerated schema list for React app (${schemaList.length} files):`);
console.log('const allSchemaPaths = [');
schemaList.slice(0, 20).forEach(path => {
  console.log(`  "${path}",`);
});
if (schemaList.length > 20) {
  console.log(`  // ... and ${schemaList.length - 20} more paths`);
}
console.log('];');

// Write to a JSON file that the React app can use
const outputFile = path.join(__dirname, '..', 'public', 'schema-index.json');
fs.writeFileSync(outputFile, JSON.stringify(schemas, null, 2));
console.log(`\nSchema index written to: ${outputFile}`);
