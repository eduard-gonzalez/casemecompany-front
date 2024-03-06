# Caseme Frontend

This is the frontend of the Caseme project. It is a NextJS application that uses ReactJS as its main library.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Folder Structure

The folder structure is as follows:

```
caseme-frontend/
  components/
    ComponentName/
      index.tsx
      styles.ts
  pages/
    _app.tsx
    _document.tsx
    index.tsx
  public/
    favicon.ico
    vercel.svg
  styles/
    global.ts
  .gitignore
  package.json
  README.md
  tsconfig.json
  yarn.lock
```


## Components

The components folder contains all the components that are used in the application. Each component has its own folder with an `index.tsx` file and a `styles.ts` file. The `index.tsx` file contains the component's logic and the `styles.ts` file contains the component's styles.

## Pages

The pages folder contains all the pages that are used in the application. Each page has its own file. The `_app.tsx` file is the main file that wraps all the pages and the `_document.tsx` file is the main file that wraps all the pages.


## Public

The public folder contains all the public files that are used in the application. The `favicon.ico` file is the icon that is used in the browser tab and the `vercel.svg` file is the icon that is used in the browser tab.

# Requirements

- Node => 18.15 version
- NextJS => "13.5.2", (App Dir)
- React JS => "18.2.0",

# Changelog

- 0.0.1
  - Work in progress
  - Header and Footer components
  - Home page
    - About page
    - Contact page
    - Services page
    - Portfolio page
  - Product page
  - Archive page

