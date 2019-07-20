<template>
  <div
    class="VueGrid"
    :class="[computedAlign, computedJustify]"
  >
    <slot />
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
      default: 'stretch',
      type: String,
      validator: value => alignValues.includes(value)
    },
    justify: {
      default: 'start',
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
.VueGrid {
  display: flex;
  flex-wrap: wrap;
}

.VueGrid.\-top {
  align-items: flex-start;
}

.VueGrid.\-middle {
  align-items: center;
}

.VueGrid.\-bottom {
  align-items: flex-end;
}

.VueGrid.\-stretch {
  align-items: stretch;
}

.VueGrid.\-baseline {
  align-items: baseline;
}

.VueGrid.\-start {
  justify-content: flex-start;
}

.VueGrid.\-center {
  justify-content: center;
}

.VueGrid.\-end {
  justify-content: flex-end;
}

.VueGrid.\-between {
  justify-content: space-between;
}

.VueGrid.\-around {
  justify-content: space-around;
}
</style>
