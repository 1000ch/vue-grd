import pkg from './package.json';
import commonjs from 'rollup-plugin-commonjs';
import nodeResolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import vue from 'rollup-plugin-vue';
import { terser } from 'rollup-plugin-terser';

export default {
  input: 'src/index.js',
  output: [
    {
      file: `dist/${pkg.name}.common.js`,
      format: 'cjs'
    },
    {
      file: `dist/${pkg.name}.esm.js`,
      format: 'esm'
    },
    {
      file: `dist/${pkg.name}.js`,
      format: 'umd',
      name: 'VueGrd'
    }
  ],
  plugins: [
    nodeResolve(),
    commonjs(),
    vue({
      css: true
    }),
    babel({
      extensions: ['.js', '.vue']
    }),
    terser()
  ]
};
