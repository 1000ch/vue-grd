import Vue from 'https://cdn.jsdelivr.net/npm/vue/dist/vue.esm.browser.js';
import VueGrd from 'https://cdn.jsdelivr.net/npm/vue-grd/dist/vue-grd.esm.js';

Vue.use(VueGrd);
Vue.component('vue-cell-ex', {
  data() {
    return {
      selectedWidth: '3of12',
      widths: ['fill', '1of12', '2of12','3of12', '4of12', '5of12', '6of12', '7of12', '8of12', '9of12', '10of12', '11of12', '12of12']
    };
  },
  mounted() {
    this.$refs.select.selectedIndex = 3;
  },
  methods: {
    onChange(e) {
      this.selectedWidth = e.target.value;
    }
  },
  template: `
    <vue-cell
      :width="selectedWidth"
      style="padding: 16px; border: dashed 1px #999;">
      &lt;vue-cell
      <label>
        width=<select ref="select" @change="onChange">
          <option v-for="width in widths" :value="width">{{ width }}</option>
        </select>
      </label>&gt;
      <p contenteditable>(click to edit)</p>
      &lt;/vue-cell&gt;
    </vue-cell>
  `
});

new Vue({
  el: '#app',
  data() {
    return {
      selectedAlign: 'top',
      selectedJustify: 'start',
      aligns: ['top', 'middle', 'bottom', 'stretch', 'baseline'],
      justifies: ['start', 'center', 'end', 'between', 'around'],
      cells: [null, null]
    };
  },
  methods: {
    onChangeAlign(e) {
      this.selectedAlign = e.target.value;
    },
    onChangeJustify(e) {
      this.selectedJustify = e.target.value;
    },
    onClickAdd() {
      this.cells.push(null);
    },
    onClickRemove() {
      this.cells.pop();
    }
  }
});
