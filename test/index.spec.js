import { mount, createLocalVue } from '@vue/test-utils';
import VueGrd from '../src';

describe('VueGrd', () => {
  test('works with Vue.use()', () => {
    const localVue = createLocalVue();
    localVue.use(VueGrd);

    const grid = mount(
      {
        template: `<vue-grid />`
      },
      { localVue }
    );

    const cell = mount(
      {
        template: `<vue-cell />`
      },
      { localVue }
    );

    expect(grid.html()).toEqual('<div class="VueGrid -stretch -start"></div>');
    expect(cell.html()).toEqual('<div class="VueCell -fill"></div>');
  });

  test('works with Vue.component()', () => {
    const localVue = createLocalVue();
    const { VueGrid, VueCell } = VueGrd;
    localVue.component('vue-grid', VueGrid);
    localVue.component('vue-cell', VueCell);

    const grid = mount(
      {
        template: `<vue-grid />`
      },
      { localVue }
    );

    const cell = mount(
      {
        template: `<vue-cell />`
      },
      { localVue }
    );

    expect(grid.html()).toEqual('<div class="VueGrid -stretch -start"></div>');
    expect(cell.html()).toEqual('<div class="VueCell -fill"></div>');
  });
});

describe('VueGrid', () => {
  test('has classes depending on provided properties', () => {
    const localVue = createLocalVue();
    localVue.use(VueGrd);

    const grid1 = mount(
      {
        template: `<vue-grid tag="p" />`
      },
      { localVue }
    );

    const grid2 = mount(
      {
        template: `<vue-grid align="top" />`
      },
      { localVue }
    );

    const grid3 = mount(
      {
        template: `<vue-grid justify="around" />`
      },
      { localVue }
    );

    expect(grid1.html()).toEqual('<p class="VueGrid -stretch -start"></p>');
    expect(grid2.html()).toEqual('<div class="VueGrid -top -start"></div>');
    expect(grid3.html()).toEqual(
      '<div class="VueGrid -stretch -around"></div>'
    );
  });
});

describe('VueCell', () => {
  test('has classes depending on provided properties', () => {
    const localVue = createLocalVue();
    localVue.use(VueGrd);

    const cell1 = mount(
      {
        template: `<vue-cell tag="p" />`
      },
      { localVue }
    );

    const cell2 = mount(
      {
        template: `<vue-cell width="1of12" />`
      },
      { localVue }
    );

    expect(cell1.html()).toEqual('<p class="VueCell -fill"></p>');
    expect(cell2.html()).toEqual('<div class="VueCell -1of12"></div>');
  });
});
