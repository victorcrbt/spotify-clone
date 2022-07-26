/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  base: '/spotify-clone/',
  build: {
    outDir: 'build',
  },
  plugins: [react(), tsconfigPaths()],
});
