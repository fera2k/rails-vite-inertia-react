/// <reference types="vitest" />

import ViteRails from 'vite-plugin-rails';
import React from '@vitejs/plugin-react';
import UnoCSS from 'unocss/vite';
import linaria from '@linaria/vite';

import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [
    ViteRails(),
    React({
      exclude: /\.(stories|spec|test)\.(t|j)sx?$/,
      include: '**/*.tsx',
    }),
    UnoCSS(),
    linaria(),
  ],
  build: {
    emptyOutDir: true,
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './setupTest.ts',
  }
});

