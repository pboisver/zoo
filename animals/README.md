# @zoo/animals

Reusable animal logic for the zoo web app and other projects.

## Usage (as a client)

1. **Install the package** (if using a .tgz):

   ```sh
   npm install ./animals/zoo-animals-1.0.0.tgz
   # or if published:
   npm install @zoo/animals
   ```

2. **Import and use in your project:**

   ```ts
   import animals from '@zoo/animals';
   // animals is an array of animal modules
   animals.forEach(animal => {
     console.log(animal.name, animal.eats(['Beef', 'Fish']), animal.spitsOut(['Lettuce']));
   });
   ```

## Development (for contributors)

1. **Install dependencies:**

   ```sh
   npm install
   ```

2. **Build the package:**

   ```sh
   npm run build
   ```

   Compiled files will be in the `dist/` directory.

3. **Run tests:**

   ```sh
   npm test
   ```

4. **Release a tarball (.tgz) for local use or publishing:**

   ```sh
   npm run pack
   # This will create a file like zoo-animals-1.0.0.tgz
   ```

5. **Publish to npm (optional):**

   ```sh
   npm publish --access public
   ```

## Generating a manifest from JSON metadata

If you have a `manifest.json` file describing your animal modules, you can generate a TypeScript manifest file (`manifest.ts`) automatically:

1. Edit or create `manifest.json` in the animals package root. Example:

   ```json
   [
     { "@id": "Lion", "koio:implementation": "./lion.js" },
     { "@id": "Tiger", "koio:implementation": "./tiger.js" },
     { "@id": "Bear", "koio:implementation": "./bear.js" }
   ]
   ```

2. Run the manifest generator script:

   ```sh
   node gen-manifest.js
   ```

   This will create or overwrite `manifest.ts` with imports and exports for all animals listed in the manifest.

## File structure

- `lion.ts`, `tiger.ts`, `bear.ts`: Animal modules
- `index.ts`: Main entry point, exports the array of animals
- `manifest.json`: Metadata for generating a manifest
- `gen-manifest.js`: Script to generate `manifest.ts` from `manifest.json`
- `tests/`: Vitest unit tests
