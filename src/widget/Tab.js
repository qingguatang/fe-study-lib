import delegate from 'delegate';
import { $$ } from '../util';

/* eslint no-console: 0 */


export default function Tab(el, options = {}) {
  const event = options.event || 'click';
  const navSelector = options.navSelector || '.nav>li';
  const paneSelector = options.paneSelector || '.pane';
  const index = +options.active || 0;

  const navs = $$(el, navSelector);
  activeNav(navs, index);
  showPane(el, paneSelector, index);

  handleEvent(el, navSelector, paneSelector, event);
}


function handleEvent(el, navSelector, paneSelector, event) {
  delegate(el, navSelector, event, e => {
    const target = e.delegateTarget;
    const navs = $$(el, navSelector);
    const index = navs.indexOf(target);
    if (index === -1) {
      throw new Error('assert fail');
    }
    activeNav(navs, index);
    showPane(el, paneSelector, index);
  });
}


function activeNav(navs, index) {
  navs.forEach((nav, i) => {
    nav.classList[i === index ? 'add' : 'remove']('active');
  });
}


function showPane(el, selector, index) {
  const panes = $$(el, selector);
  panes.forEach(hide);
  const pane = panes[index];
  if (!pane) {
    console.error('tab pane not exist for ', el, index);
    return;
  }
  panes[index] && show(panes[index]);
}


function hide(el) {
  el.style.display = 'none';
}


function show(el) {
  el.style.display = '';
}