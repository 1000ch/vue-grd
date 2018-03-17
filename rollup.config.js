import vue from 'rollup-plugin-vue'

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
    })
  ]
}
