import './style.less';
import domready from 'domready';

domready(ready);


function ready() {
  initCodeBlock();
}

function initCodeBlock() {
  const elms = Array.from(document.querySelectorAll('.code'));
  elms.forEach(el => {
    const selector = el.dataset.target;
    if (selector) {
      const target = document.querySelector(selector);
      const html = filterHTML(target.innerHTML);
      el.textContent = html;
    }
    window.hljs.highlightBlock(el);
  });
}


function filterHTML(html) {
  html = html.replace(/^\n+|\s+$/g, '');
  let parts = html.split(/\n/);
  const fs = ((/^\s+/).exec(parts[0] || '') || [])[0];
  if (fs) {
    parts = parts.map(part => part.replace(fs, ''));
    html = parts.join('\n');
  }
  html = html.replace(/xmlns:\w+="[^"]+"\s?/g, '');
  return html;
}