import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    target: 'esnext' // Allows top-level await for WebGPU renderer init
  }
});
