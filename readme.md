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

### `<grid>` modifiers

| Vertical layout | Description |
|---|---|
| `-top` | Pull items to top |
| `-middle` |  Pull items to middle |
| `-bottom` |  Pull items to bottom |
| `-stretch` | Stretch items |
| `-baseline` |  Pull items to baseline |

| Horizontal layout | Description |
|---|---|
| `-left` | Layout items to left |
| `-center` | Layout items To center |
| `-right` | Layout items to right |
| `-between` | Add spaces between items |
| `-around` | Add spaces around items |

### `<cell>` modifiers

| Cell width | Description |
|---|---|
| `-fill` | Set item width to left |
| `-1of12` | Set item width to 8.3% |
| `-2of12` | Set item width to 16.7% |
| `-3of12` | Set item width to 25% |
| `-4of12` | Set item width to 33% |
| `-5of12` | Set item width to 41.7% |
| `-6of12` | Set item width to 50% |
| `-7of12` | Set item width to 58.3% |
| `-8of12` | Set item width to 66.7% |
| `-9of12` | Set item width to 75% |
| `-10of12` | Set item width to 83.3% |
| `-11of12` | Set item width to 91.7% |
| `-12of12` | Set item width to 100% |

## License

[MIT](https://1000ch.mit-license.org) © [Shogo Sensui](https://github.com/1000ch)
