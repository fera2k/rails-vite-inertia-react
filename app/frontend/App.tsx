/* eslint-disable react/jsx-props-no-spreading */
import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/react';
import { ChakraProvider } from '@chakra-ui/react';

import theme from './theme';

const createApp = () =>
  createInertiaApp({
    resolve: (name) => {
      const pages = import.meta.glob(['./pages/**/*.tsx', '!./pages/**/*.{test,spec}.tsx'], { eager: true });
      return pages[`./pages/${name}.tsx`];
    },
    setup({ el, App, props }) {
      createRoot(el).render(
        <ChakraProvider theme={theme}>
          <App {...props} />
        </ChakraProvider>,
      );
    },
    progress: {
      delay: 250,
      color: '#29d',
      includeCSS: true,
      showSpinner: false,
    },
  });

export default createApp;
