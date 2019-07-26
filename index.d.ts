import { PluginFunction } from 'vue';

type AlignValue =
  'top' |
  'middle' |
  'bottom' |
  'stretch' |
  'baseline';

type JustifyValue =
  'start' |
  'center' |
  'end' |
  'between' |
  'around';

type WidthValue =
  'fill' |
  '1of12' |
  '2of12' |
  '3of12' |
  '4of12' |
  '5of12' |
  '6of12' |
  '7of12' |
  '8of12' |
  '9of12' |
  '10of12' |
  '11of12' |
  '12of12';

export interface VueGrdOptions {}

export class VueGrid {
  tag: string;
  align: AlignValue;
  justify: JustifyValue;
  readonly computedAlign: string;
  readonly computedJustify: string;
}

export class VueCell {
  tag: string;
  width: WidthValue;
  readonly computedWidth: string;
}

declare const installer: {
  install: PluginFunction<VueGrdOptions>;
};

export default installer;
