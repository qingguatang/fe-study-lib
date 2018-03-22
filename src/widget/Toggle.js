import delegate from 'delegate';

export default function Toggle(el, options = {}) {
  const event = options.event || 'click';
  const className = options.className || 'active';
  const selector = options.selector;
  const toggle = current => {
    const elm = options.target ? document.querySelector(options.target) : current;
    elm.classList.toggle(className);
  };

  if (selector) {
    delegate(el, selector, event, e => toggle(e.delegateTarget));
  } else {
    el.addEventListener(event, () => toggle(el));
  }
}