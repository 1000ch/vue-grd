# vue-grd ![test](https://github.com/1000ch/vue-grd/workflows/test/badge.svg?branch=main)

> Simple, Light-weight and Flexible Vue.js component for grid layout. Vue.js port of [grd](https://github.com/1000ch/grd).

## Install

```sh
npm install --save vue-grd
```

## Usage

You can use `<vue-grid>` and `<vue-cell>` components after importing and registering `VueGrid` and `VueCell`.

```html
<template>
  <vue-grid align="stretch" justify="start">
    <vue-cell width="fill">fill</vue-cell>
    <vue-cell width="3of12">3of12</vue-cell>
    <vue-cell width="3of12">3of12</vue-cell>
  </vue-grid>
</template>

<script>
import { VueGrid, VueCell } from 'vue-grd';

export default {
  components: {
    VueGrid,
    VueCell
  }
};
</script>
```

You can also register them as global components.

```javascript
import Vue from 'vue';
import { VueGrid, VueCell } from 'vue-grd';

Vue.component('vue-grid', VueGrid);
Vue.component('vue-cell', VueCell);
```

### `<vue-grid>` modifiers

| `tag` | description |
|---|---|
| [HTMLElement name](https://html.spec.whatwg.org/multipage/#toc-semantics) | Specify grid's tag name |

| `align` | description |
|---|---|
| `top` | Pull items to top |
| `middle` |  Pull items to middle |
| `bottom` |  Pull items to bottom |
| `stretch` | Stretch items |
| `baseline` |  Pull items to baseline |

| `justify` | description |
|---|---|
| `start` | Layout items to start |
| `center` | Layout items to center |
| `end` | Layout items to end |
| `between` | Add spaces between items |
| `around` | Add spaces around items |

### `<vue-cell>` modifiers

| `tag` | description |
|---|---|
| [HTMLElement name](https://html.spec.whatwg.org/multipage/#toc-semantics) | Specify cell's tag name |

| `width` | description |
|---|---|
| `fill` | Set item width to left |
| `1of12` | Set item width to 8.3% |
| `2of12` | Set item width to 16.7% |
| `3of12` | Set item width to 25% |
| `4of12` | Set item width to 33% |
| `5of12` | Set item width to 41.7% |
| `6of12` | Set item width to 50% |
| `7of12` | Set item width to 58.3% |
| `8of12` | Set item width to 66.7% |
| `9of12` | Set item width to 75% |
| `10of12` | Set item width to 83.3% |
| `11of12` | Set item width to 91.7% |
| `12of12` | Set item width to 100% |

## License

[MIT](https://1000ch.mit-license.org) © [Shogo Sensui](https://github.com/1000ch)
