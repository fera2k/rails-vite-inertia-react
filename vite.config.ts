import RubyPlugin from 'vite-plugin-ruby';
import React from '@vitejs/plugin-react';
import UnoCSS from 'unocss/vite';
import FullReload from 'vite-plugin-full-reload';
import dynamicImport from 'vite-plugin-dynamic-import';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [
    dynamicImport(),
    FullReload(['config/routes.rb', 'app/views/**/*']),
    RubyPlugin(),
    React({
      // Exclude storybook stories
      exclude: /\.stories\.(t|j)sx?$/,
      // Only .tsx files
      include: '**/*.tsx',
    }),
    UnoCSS(),
  ],
});

