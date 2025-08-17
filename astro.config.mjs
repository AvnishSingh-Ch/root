import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import icon from "astro-icon";
import terser from "@rollup/plugin-terser";
import sitemap from "@astrojs/sitemap";
import pagefind from "astro-pagefind";
import tailwind from "@astrojs/tailwind";
import playformCompress from "@playform/compress";

import astroI18next from "astro-i18next";

import swup from "@swup/astro";

const { USER_SITE } = await import('./src/consts.ts');

// https://astro.build/config
export default defineConfig({
  site: USER_SITE,
  output: 'static',
  build: {
    assets: 'assets',
  },
  vite: {
    build: {
      cssMinify: true,
      minify: 'terser',
      rollupOptions: {
        output: {
          manualChunks: {
            'vendor': ['swup'],
            'ui': ['tailwindcss'],
          }
        }
      }
    },
    optimizeDeps: {
      include: ['swup']
    }
  },
  style: {
    scss: {
      includePaths: ["./src/styles"],
    },
  },
  integrations: [
    mdx(),
    icon({
      include: {
        // Only include icons you actually use
        'menu': ['home', 'about', 'blog', 'contact', 'friend', 'heart', 'project', 'cube', 'resume'],
        'social': ['github', 'linkedin', 'x', 'blog', 'support']
      }
    }),
    swup({
      cache: true,
      progress: false,
      accessibility: true,
      smoothScrolling: false,
      preload: {
        hover: false,
        visible: false
      },
      theme: 'fade',
      containers: ["#swup"],
    }),
    terser({
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info', 'console.debug', 'console.warn']
      },
      mangle: true,
    }),
    sitemap(),
    tailwind(),
    pagefind(),
    astroI18next(),
    playformCompress({
      // Enhanced compression settings
      css: true,
      html: true,
      js: true,
      img: true,
      svg: true,
      font: true
    }),
  ],
  markdown: {
    shikiConfig: {
      themes: {
        light: "github-light",
        dark: "github-dark",
      },
      transformers: [
        {
          preprocess(code, { lang }) {
            this.lang = lang;
            return code;
          },
          root(node) {
            if (node.tagName === "pre") {
              node.tagName = "figure";
              node.properties.className = ["highlight", this.lang];
            }
          },
          pre(node) {
            const toolsDiv = {
              type: "element",
              tagName: "div",
              properties: { className: ["highlight-tools"] },
              children: [
                {
                  type: "element",
                  tagName: "div",
                  properties: { className: ["code-lang"] },
                  children: [{ type: "text", value: this.lang.toUpperCase() }],
                },
              ],
            };
            const lineNumberCode = {
              type: "element",
              tagName: "code",
              children: [],
            };
            const lineNumberPre = {
              type: "element",
              tagName: "pre",
              properties: { className: ["frosti-code", "gutter"] },
              children: [lineNumberCode],
            };
            const codeContentPre = {
              type: "element",
              tagName: "pre",
              properties: { className: ["frosti-code", "code"] },
              children: [],
            };
            node.children.forEach((lineNode, index, count) => {
              count = 0;
              lineNode.children.forEach(() => {
                if (count & (1 === 1)) {
                  lineNumberCode.children.push({
                    type: "element",
                    tagName: "div",
                    properties: { className: ["line"] },
                    children: [{ type: "text", value: String(index + 1) }],
                  });
                  index++;
                }
                count++;
              });

              codeContentPre.children.push(lineNode);
            });
            const table = {
              type: "element",
              tagName: "div",
              properties: { className: ["highlight-code"] },
              children: [lineNumberPre, codeContentPre],
            };
            return {
              type: "element",
              tagName: "figure",
              properties: { className: ["highlight", this.lang] },
              children: [toolsDiv, table],
            };
          },
        },
      ],
    },

  },
});
