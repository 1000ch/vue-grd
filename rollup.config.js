const babel = require('rollup-plugin-babel')
const vue = require('rollup-plugin-vue')

module.exports = {
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
