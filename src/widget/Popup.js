/* eslint no-console: 0 */


export default function(el, options = {}) {
  const handle = el.querySelector('.popup-handle');
  if (!handle) {
    console.error('popup handler for exist in', el);
    return;
  }

  const toggleClass = options.toggleClass || 'active';
  const event = options.event || 'click';

  if (event === 'hover') {
    handleHover(el, handle, toggleClass);
  } else {
    handleEvent(el, handle, toggleClass, event);
  }
}


function handleHover(el, handle, toggleClass) {
  let timer = null;
  handle.addEventListener('mouseenter', () => {
    clearTimeout(timer);
    el.classList.add(toggleClass);
  });
  el.addEventListener('mousemove', () => {
    clearTimeout(timer);
  });
  el.addEventListener('mouseleave', () => {
    timer = setTimeout(() => {
      el.classList.remove(toggleClass);
    }, 500);
  });
}


function handleEvent(el, handle, toggleClass, event) {
  handle.addEventListener(event, () => {
    el.classList.toggle(toggleClass);
  });
  handleClickDoc(el, toggleClass);
}


function handleClickDoc(el, toggleClass) {
  document.addEventListener('click', function(e) {
    let p = e.target;
    while (p) {
      if (p === el) {
        return;
      }
      p = p.parentNode;
    }
    el.classList.remove(toggleClass);
  });
}