import { defineConfig } from 'vite';
import swc from 'vite-plugin-swc-transform';

export default defineConfig({
  plugins: [
    swc({
      swcOptions: {
        jsc: {
          transform: {
            legacyDecorator: true,
            decoratorMetadata: true,
            useDefineForClassFields: false,
          },
        },
      },
    }),
  ],
});
