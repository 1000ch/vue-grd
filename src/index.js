import VueGrid from './VueGrid.vue';
import VueCell from './VueCell.vue';

function install(Vue, options) {
  Vue.component('vue-grid', VueGrid);
  Vue.component('vue-cell', VueCell);
}

export default {
  install,
  VueGrid,
  VueCell
};
