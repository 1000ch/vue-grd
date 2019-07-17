<template>
  <div class="Grid" :class="[computedAlign, computedJustify]">
    <slot></slot>
  </div>
</template>

<script>
const alignValues = [
  'top',
  'middle',
  'bottom',
  'stretch',
  'baseline'
];

const justifyValues = [
  'start',
  'center',
  'end',
  'between',
  'around'
];

export default {
  name: 'VueGrid',
  props: {
    align: {
      default: '-stretch',
      type: String,
      validator: value => alignValues.includes(value)
    },
    justify: {
      default: '-start',
      type: String,
      validator: value => justifyValues.includes(value)
    }
  },
  computed: {
    computedAlign() {
      return `-${this.align}`;
    },
    computedJustify() {
      return `-${this.justify}`;
    }
  }
};
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

.Grid.\-start {
  justify-content: flex-start;
}

.Grid.\-center {
  justify-content: center;
}

.Grid.\-end {
  justify-content: flex-end;
}

.Grid.\-between {
  justify-content: space-between;
}

.Grid.\-around {
  justify-content: space-around;
}
</style>
