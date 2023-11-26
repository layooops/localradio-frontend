import { defineConfig } from 'tsup';

export default defineConfig([
  {
    format: ['cjs', 'esm'],
    entry: ['src/index.ts'],
    outDir: 'dist',
    treeshake: true,
    sourcemap: true,
    minify: false,
    clean: true,
    dts: true,
    name: '@local-radio/icons',
    tsconfig: './tsconfig.json',
    external: ['react'],
  },
]);
