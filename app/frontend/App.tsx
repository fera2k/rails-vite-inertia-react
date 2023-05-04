/* eslint-disable react/jsx-props-no-spreading */
import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/react';
import { ChakraProvider } from '@chakra-ui/react';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';

const createApp = () =>
  createInertiaApp({
    resolve: (name) => {
      const pages = import.meta.glob('./pages/**/*.tsx', { eager: true });
      return pages[`./pages/${name}.tsx`];
    },
    setup({ el, App, props }) {
      createRoot(el).render(
        <ChakraProvider>
          <App {...props} />
        </ChakraProvider>
      );
    },
  });

export default createApp;
