import vue from 'rollup-plugin-vue'
import uglify from 'rollup-plugin-uglify'

export default {
  input: 'src/index.ts',
  output: {
    file: 'dist/index.js',
    format: 'cjs'
  },
  external: [
    'vue',
    'vue-class-component'
  ],
  plugins: [
    vue({
      css: true
    }),
    uglify()
  ]
}
