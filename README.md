# Full-Spectrum React + Next.js + TypeScript Workspace

An enterprise-ready Next.js 16 (App Router), React 19, and TypeScript 5 project pre-configured so that **all types of files work seamlessly** with strict type safety, zero bundler errors, and full path alias support.

---

## 🚀 Supported File Types & Resolution Matrix

| File Type | Extensions | Bundler / Loader | Resolution Method |
| :--- | :--- | :--- | :--- |
| **TypeScript / React** | `.tsx`, `.ts`, `.jsx`, `.js`, `.mjs` | Turbopack / SWC | Full React 19 App Router & Server/Client components |
| **SASS & SCSS Modules**| `.scss`, `.module.scss`, `.sass` | Next.js Native Sass Compiler | Scoped modular styles, mixins, variables, nesting |
| **CSS Modules & Global**| `.module.css`, `.css` | Built-in CSS Loader | Isolated module scoping & global tokens |
| **Vector Graphics** | `.svg`, `.svg?react`, `.svg?url` | `@svgr/webpack` & `next/image` | Import as React Component or static image asset |
| **Raster Images** | `.jpg`, `.png`, `.webp`, `.avif`, `.gif` | `next/image` pipeline | Automated WebP/AVIF compression & blur-up |
| **Interactive Content** | `.mdx`, `.md` | `@next/mdx` App Router plugin | Markdown with embedded live React components |
| **Tabular Data** | `.csv`, `.tsv` | Asset Source Loader + `parseCSV` | Raw text stream parsed into typed JS objects |
| **Plain Text Assets** | `.txt`, `.raw` | Asset Source Loader | Raw string imports for configs, manifests, licenses |
| **Structured Data** | `.json`, `.json5`, `.yaml`, `.yml` | ESNext Module Resolver | Native type-inferred import |
| **Web Fonts** | `.woff`, `.woff2`, `.ttf`, `.otf` | Webpack Asset / Next Font | Ambient declarations & next/font optimization |

---

## 📁 Path Aliases

Import any file without fragile relative paths (`../../`):

```typescript
import Component from '@/components/Component';
import styles from '@/styles/theme.module.scss';
import logo from '@/assets/cube-logo.svg';
import data from '@/data/projectData.json';
import { parseCSV } from '@/utils/fileLoaders';
import Article from '@/content/overview.mdx';
```

Configured in [tsconfig.json](file:///d:/portfolio/tsconfig.json):
- `@/*` &rarr; `./src/*`
- `@components/*` &rarr; `./src/components/*`
- `@styles/*` &rarr; `./src/styles/*`
- `@assets/*` &rarr; `./src/assets/*`
- `@data/*` &rarr; `./src/data/*`
- `@types/*` &rarr; `./src/types/*`
- `@utils/*` &rarr; `./src/utils/*`
- `@content/*` &rarr; `./src/content/*`

---

## 🛠️ Global Ambient Declarations

All non-standard file formats are declared in [src/types/declarations.d.ts](file:///d:/portfolio/src/types/declarations.d.ts) so TypeScript will never throw `Cannot find module ... or its corresponding type declarations`.

---

## 🏃 Running the Application

### Development Server
```bash
npm run dev
```
Runs at [http://localhost:3000](http://localhost:3000) using Next.js Turbopack.

### Production Build
```bash
npm run build
```
Type checks and generates the optimized production bundle.

### Start Production Server
```bash
npm run start
```
