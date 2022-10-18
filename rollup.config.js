import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';

// import { createRequire } from 'node:module';
// const require = createRequire(import.meta.url);
// const packageJson = './package.json';

export default [
  {
    input: 'src/index.ts', // entry point
    output: [
      {
        file: 'dist/cjs/index.js',
        format: 'cjs',
        sourcemap: 'inline',
      },
      {
        file: 'dist/esm/index.js',
        format: 'esm',
        sourcemap: 'inline',
      },
    ],
    plugins: [
      resolve(),
      commonjs(),
      typescript({ tsconfig: './tsconfig.json' }),
    ],
  },
  {
    input: 'dist/esm/index.d.ts',
    output: [{ file: 'dist/index.d.ts', format: 'esm' }],
    plugins: [dts()],
  },
];
