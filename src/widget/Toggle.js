import delegate from 'delegate';


export default function(el, options = {}) {
  const event = options.event || 'click';
  const className = options.className || 'active';
  const selector = options.selector;
  const toggle = elm => elm.classList.toggle(className);
  if (selector) {
    delegate(el, selector, event, e => {
      toggle(e.delegateTarget, className);
    });
  } else {
    el.addEventListener(event, () => {
      toggle(el, className);
    });
  }
}