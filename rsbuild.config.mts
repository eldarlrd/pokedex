import { InjectManifest } from '@aaroon/workbox-rspack-plugin';
import { defineConfig } from '@rsbuild/core';

// https://rsbuild.rs/config
export default defineConfig({
  tools: {
    rspack: {
      plugins: [
        new InjectManifest({
          swSrc: '/src/sw.ts',
          swDest: 'sw.js',
          mode: 'production',
          include: ['**/*.{html,css,js,png,webp,woff2,webmanifest}']
        })
      ]
    }
  },
  dev: {
    hmr: false
  },
  server: {
    base: '/pokedex/'
  },
  resolve: {
    alias: {
      '@': '/src'
    }
  },
  source: {
    entry: {
      index: '/src/main.ts'
    }
  },
  html: {
    title: 'Pokédex',
    meta: {
      description: 'A Pokémon search app',
      keywords: 'pokemon, pokedex',
      author: 'Eldar Pashazade',
      'theme-color': '#d30a40',
      'og:title': 'Pokédex',
      'og:description': 'A Pokémon search app',
      'og:url': 'https://eldarlrd.is-a.dev/pokedex',
      'og:image':
        'https://repository-images.githubusercontent.com/1109857247/12ca2eaa-d534-4de9-85d1-d1bef125b644'
    },
    tags: [
      {
        tag: 'link',
        attrs: {
          rel: 'stylesheet',
          type: 'text/css',
          href: 'https://cdn.jsdelivr.net/npm/bulma@1.0.4/css/bulma.min.css'
        }
      },
      {
        tag: 'link',
        attrs: {
          rel: 'stylesheet',
          type: 'text/css',
          href: 'https://fonts.googleapis.com/icon?family=Material+Icons'
        }
      },
      {
        tag: 'link',
        attrs: {
          rel: 'manifest',
          type: 'application/manifest+json',
          href: 'site.webmanifest'
        }
      }
    ]
  }
});
