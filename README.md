# Zoo Feeder App

This web app uses the reusable `@zoo/animals` package for animal logic and feeding rules.

## Adding Animals

Animals from the `@zoo/animals` package are included automatically. You can also add custom animals to the web app by placing their modules in `src/animals/`. Any animal module in this folder (e.g., `src/animals/elephant.ts`) will be included in the app alongside the package animals.

## Setup

```bash
npm install
```

## Running the Web App

To start the development server and run the web app locally:

```bash
npm run dev
```

This will launch the app at the local address shown in your terminal (usually <http://localhost:5173/>).

To build the app for production:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```
