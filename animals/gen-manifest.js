#!/usr/bin/env node
import fs from 'fs';

const manifest = JSON.parse(fs.readFileSync('manifest.json', 'utf-8'));

const imports = [];
const animalNames = [];
const namedExports = [];

manifest.forEach(entry => {
    const id = entry['@id'];
    const impl = entry['koio:implementation'].replace('.ts', '').replace('.js', '');
    imports.push(`import ${id} from '${impl}';`);
    animalNames.push(id);
    namedExports.push(id);
});

const output = `// This file is auto-generated from manifest.json\n\n${imports.join('\n')}\n\nconst animals = [${animalNames.join(', ')}];\nexport default animals;\nexport { animals, ${namedExports.join(', ')} };\n`;

fs.writeFileSync('manifest.ts', output);
console.log('manifest.ts generated.');
