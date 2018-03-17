<template>
  <div class="Grid" v-bind:class="[fill, justify]">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

const alignValues: Array<String> = [
  '-top',
  '-middle',
  '-bottom',
  '-stretch',
  '-baseline'
]

const justifyValues: Array<String> = [
  '-left',
  '-center',
  '-right',
  '-between',
  '-around'
]

@Component({
  props: {
    fill: {
      default: 'stretch',
      type: String,
      validator: (value: String) => alignValues.indexOf(value) !== -1
    },
    justify: {
      default: 'left',
      type: String,
      validator: (value: String) => justifyValues.indexOf(value) !== -1
    }
  }
})
export default class Grid extends Vue {}
</script>

<style scoped>
.Grid {
  display: flex;
  flex-wrap: wrap;
}

.Grid.\-top {
  align-items: flex-start;
}

.Grid.\-middle {
  align-items: center;
}

.Grid.\-bottom {
  align-items: flex-end;
}

.Grid.\-stretch {
  align-items: stretch;
}

.Grid.\-baseline {
  align-items: baseline;
}

.Grid.\-left {
  justify-content: flex-start;
}

.Grid.\-center {
  justify-content: center;
}

.Grid.\-right {
  justify-content: flex-end;
}

.Grid.\-between {
  justify-content: space-between;
}

.Grid.\-around {
  justify-content: space-around;
}
</style>
