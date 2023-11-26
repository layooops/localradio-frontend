import { defineConfig } from 'tsup';
import cssModulesPlugin from 'esbuild-css-modules-plugin';
// @ts-expect-error - bug due to inconsistent esbuild versions

export default defineConfig((options) => ({
  esbuildPlugins: [
    cssModulesPlugin({
      force: true,
      emitDeclarationFile: true,
      localsConvention: 'camelCaseOnly',
      namedExports: true,
      inject: false,
    }),
  ],
  entry: ['index.ts', 'src/style/style.css'],
  dts: {
    entry: ['index.ts'],
  },
  outDir: 'dist',
  format: ['esm', 'cjs'],
  name: '@local-radio/ui',
  splitting: true,
  sourcemap: false,
  clean: true,
  target: ['es2020'],
  minify: !options.watch,
  tsconfig: './tsconfig.json',
  external: ['react'],
  injectStyle: false,
}));
