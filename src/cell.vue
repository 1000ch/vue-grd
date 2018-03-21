<template src="cell.html"></template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

const widthValues: Array<String> = [
  '-fill',
  '-1of12',
  '-2of12',
  '-3of12',
  '-4of12',
  '-5of12',
  '-6of12',
  '-7of12',
  '-8of12',
  '-9of12',
  '-10of12',
  '-11of12',
  '-12of12'
]

@Component({
  props: {
    width: {
      default: 'fill',
      type: String,
      validator: (value: String) => widthValues.indexOf(value) !== -1
    }
  }
})
export default class Cell extends Vue {}
</script>

<style scoped>
.Cell {
  box-sizing: border-box;
  flex-shrink: 0;
}

.Cell.\-fill {
  width: 0;
  min-width: 0;
  flex-grow: 1;
}

.Cell.\-1of12 {
  width: calc(100% * 1 / 12);
}

.Cell.\-2of12 {
  width: calc(100% * 2 / 12);
}

.Cell.\-3of12 {
  width: calc(100% * 3 / 12);
}

.Cell.\-4of12 {
  width: calc(100% * 4 / 12);
}

.Cell.\-5of12 {
  width: calc(100% * 5 / 12);
}

.Cell.\-6of12 {
  width: calc(100% * 6 / 12);
}

.Cell.\-7of12 {
  width: calc(100% * 7 / 12);
}

.Cell.\-8of12 {
  width: calc(100% * 8 / 12);
}

.Cell.\-9of12 {
  width: calc(100% * 9 / 12);
}

.Cell.\-10of12 {
  width: calc(100% * 10 / 12);
}

.Cell.\-11of12 {
  width: calc(100% * 11 / 12);
}

.Cell.\-12of12 {
  width: 100%;
}
</style>
