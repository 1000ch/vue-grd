# vue-grd

> Vue port of [grd, a CSS grid framework using flexbox](https://github.com/1000ch/grd).

[![devDependency Status](https://david-dm.org/1000ch/vue-grd/dev-status.svg)](https://david-dm.org/1000ch/vue-grd?type=dev)

## Install

```bash
$ npm install --save vue-grd
```

## Usage

```html
<template>
  <grid>
    <cell width="-fill">fill</cell>
    <cell width="-3of12">3of12</cell>
    <cell width="-3of12">3of12</cell>
  </grid>
</template>

<script>
import { Grid, Cell } from 'vue-grd'

export default {
  components: {
    Grid,
    Cell
  }
}
</script>
```

## License

[MIT](https://1000ch.mit-license.org) © [Shogo Sensui](https://github.com/1000ch)
