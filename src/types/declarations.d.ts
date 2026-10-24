/**
 * Global TypeScript Declarations for All Supported File Types
 *
 * This file enables TypeScript to seamlessly recognize and type-check
 * imports of stylesheets, images, audio, video, documents, markdown,
 * structured data, and font assets.
 */

// ==========================================
// 1. Stylesheets & Preprocessors
// ==========================================
declare module "*.module.css" {
  const classes: { readonly [key: string]: string };
  export default classes;
}

declare module "*.module.scss" {
  const classes: { readonly [key: string]: string };
  export default classes;
}

declare module "*.module.sass" {
  const classes: { readonly [key: string]: string };
  export default classes;
}

declare module "*.module.less" {
  const classes: { readonly [key: string]: string };
  export default classes;
}

declare module "*.scss" {
  const content: string;
  export default content;
}

declare module "*.sass" {
  const content: string;
  export default content;
}

// ==========================================
// 2. Vector Graphics & SVGs
// ==========================================
declare module "*.svg" {
  import type * as React from "react";
  const content: React.FC<React.SVGProps<SVGSVGElement>> & {
    src?: string;
    height?: number;
    width?: number;
    blurDataURL?: string;
  };
  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  export default content;
}

declare module "*.svg?react" {
  import type * as React from "react";
  const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  export default ReactComponent;
}

declare module "*.svg?url" {
  const src: string;
  export default src;
}

// ==========================================
// 3. Raster Image Assets
// ==========================================
declare module "*.png" {
  const content: import("next/image").StaticImageData;
  export default content;
}

declare module "*.jpg" {
  const content: import("next/image").StaticImageData;
  export default content;
}

declare module "*.jpeg" {
  const content: import("next/image").StaticImageData;
  export default content;
}

declare module "*.webp" {
  const content: import("next/image").StaticImageData;
  export default content;
}

declare module "*.avif" {
  const content: import("next/image").StaticImageData;
  export default content;
}

declare module "*.gif" {
  const content: import("next/image").StaticImageData;
  export default content;
}

declare module "*.ico" {
  const content: string;
  export default content;
}

declare module "*.bmp" {
  const content: import("next/image").StaticImageData;
  export default content;
}

declare module "*.tiff" {
  const content: import("next/image").StaticImageData;
  export default content;
}

// ==========================================
// 4. Video & Audio Media Assets
// ==========================================
declare module "*.mp4" {
  const src: string;
  export default src;
}

declare module "*.webm" {
  const src: string;
  export default src;
}

declare module "*.ogg" {
  const src: string;
  export default src;
}

declare module "*.mov" {
  const src: string;
  export default src;
}

declare module "*.mp3" {
  const src: string;
  export default src;
}

declare module "*.wav" {
  const src: string;
  export default src;
}

declare module "*.flac" {
  const src: string;
  export default src;
}

declare module "*.aac" {
  const src: string;
  export default src;
}

declare module "*.m4a" {
  const src: string;
  export default src;
}

// ==========================================
// 5. Documents & Raw Content
// ==========================================
declare module "*.pdf" {
  const src: string;
  export default src;
}

declare module "*.txt" {
  const content: string;
  export default content;
}

declare module "*.raw" {
  const content: string;
  export default content;
}

declare module "*.csv" {
  const content: string;
  export default content;
}

declare module "*.tsv" {
  const content: string;
  export default content;
}

declare module "*.xml" {
  const content: string;
  export default content;
}

// ==========================================
// 6. Markdown & MDX
// ==========================================
declare module "*.md" {
  import type { ComponentType } from "react";
  const MDXComponent: ComponentType<Record<string, unknown>>;
  export default MDXComponent;
}

declare module "*.mdx" {
  import type { ComponentType } from "react";
  const MDXComponent: ComponentType<Record<string, unknown>>;
  export default MDXComponent;
}

// ==========================================
// 7. Structured Data & Configs
// ==========================================
declare module "*.json5" {
  const value: Record<string, unknown> | unknown[];
  export default value;
}

declare module "*.yaml" {
  const value: Record<string, unknown> | unknown[];
  export default value;
}

declare module "*.yml" {
  const value: Record<string, unknown> | unknown[];
  export default value;
}

// ==========================================
// 8. Web Fonts
// ==========================================
declare module "*.woff" {
  const src: string;
  export default src;
}

declare module "*.woff2" {
  const src: string;
  export default src;
}

declare module "*.ttf" {
  const src: string;
  export default src;
}

declare module "*.otf" {
  const src: string;
  export default src;
}

declare module "*.eot" {
  const src: string;
  export default src;
}
