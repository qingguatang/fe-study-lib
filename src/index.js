import domready from 'domready';
import Toggle from './widget/Toggle';

/* global document */
/* eslint no-cosole: 0 */

const doc = document;

const Widgets = {
  Toggle
};

function ready() {
  const elms = Array.from(doc.querySelectorAll('[data-widget]'));
  elms.forEach(elm => {
    const opts = elm.dataset;
    const name = opts.widget;
    const klass = Widgets[name];
    if (!klass) {
      console.error(`invalid widget: ${klass}`);
      return;
    }
    new klass(elm, opts); // eslint-disable-line
  });
}


domready(ready);