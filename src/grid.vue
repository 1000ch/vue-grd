<template>
  <div
    class="Grid"
    v-bind:class="[fill, justify]">
    <slot></slot>
  </div>
</template>

<script>
const alignValues = ['-top', '-middle', '-bottom', '-stretch', '-baseline']
const justifyValues = ['-left', '-center', '-right', '-between', '-around']

export default {
  props: {
    fill: {
      default: 'stretch',
      type: String,
      validator: value => alignValues.includes(value)
    },
    justify: {
      default: 'left',
      type: String,
      validator: value => justifyValues.includes(value)
    }
  }
}
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
