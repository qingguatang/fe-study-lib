import domready from 'domready';
import Popup from './widget/Popup';
import Tab from './widget/Tab';
import Toggle from './widget/Toggle';
import { $$ } from './util';

/* global document */
/* eslint no-cosole: 0 */

const doc = document;

const Widgets = {
  Popup,
  Tab,
  Toggle
};

function ready() {
  const elms = $$(doc, '[data-widget]');
  elms.forEach(elm => {
    const opts = elm.dataset;
    const name = opts.widget;
    const klass = Widgets[name];
    if (!klass) {
      console.error(`invalid widget: ${name}`);
      return;
    }
    new klass(elm, opts); // eslint-disable-line
  });
}


domready(ready);