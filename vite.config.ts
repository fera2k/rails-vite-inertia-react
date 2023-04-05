import { defineConfig } from 'vite';
import RubyPlugin from 'vite-plugin-ruby';
import react from '@vitejs/plugin-react';
import WindiCSS from 'vite-plugin-windicss';
// import ReloadOnChange from 'vite-plugin-full-reload';
import dynamicImport from 'vite-plugin-dynamic-import';

export default defineConfig({
  plugins: [
    dynamicImport(),
    // ReloadOnChange(['config/routes.rb', 'app/views/**/*']),
    RubyPlugin(),
    react({
      // Exclude storybook stories
      exclude: /\.stories\.(t|j)sx?$/,
      // Only .tsx files
      include: '**/*.tsx',
    }),
    WindiCSS(),
  ],
});

