import babel from 'rollup-plugin-babel'
import vue from 'rollup-plugin-vue'

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/index.js',
    format: 'cjs'
  },
  plugins: [
    vue({
      css: true
    }),
    babel({
      exclude: 'node_modules/**'
    })
  ]
}
