<template>
  <div
    class="VueCell"
    :class="computedWidth"
  >
    <slot />
  </div>
</template>

<script>
const widthValues = [
  'fill',
  '1of12',
  '2of12',
  '3of12',
  '4of12',
  '5of12',
  '6of12',
  '7of12',
  '8of12',
  '9of12',
  '10of12',
  '11of12',
  '12of12'
];

export default {
  name: 'VueCell',
  props: {
    width: {
      default: 'fill',
      type: String,
      validator: value => widthValues.includes(value)
    }
  },
  computed: {
    computedWidth() {
      return `-${this.width}`;
    }
  }
};
</script>

<style scoped>
.VueCell {
  box-sizing: border-box;
  flex-shrink: 0;
}

.VueCell.\-fill {
  width: 0;
  min-width: 0;
  flex-grow: 1;
}

.VueCell.\-1of12 {
  width: calc(100% * 1 / 12);
}

.VueCell.\-2of12 {
  width: calc(100% * 2 / 12);
}

.VueCell.\-3of12 {
  width: calc(100% * 3 / 12);
}

.VueCell.\-4of12 {
  width: calc(100% * 4 / 12);
}

.VueCell.\-5of12 {
  width: calc(100% * 5 / 12);
}

.VueCell.\-6of12 {
  width: calc(100% * 6 / 12);
}

.VueCell.\-7of12 {
  width: calc(100% * 7 / 12);
}

.VueCell.\-8of12 {
  width: calc(100% * 8 / 12);
}

.VueCell.\-9of12 {
  width: calc(100% * 9 / 12);
}

.VueCell.\-10of12 {
  width: calc(100% * 10 / 12);
}

.VueCell.\-11of12 {
  width: calc(100% * 11 / 12);
}

.VueCell.\-12of12 {
  width: 100%;
}
</style>
