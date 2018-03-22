export function $(el, selector) {
  return el.querySelector(selector);
}


export function $$(el, selector) {
  return Array.from(el.querySelectorAll(selector));
}