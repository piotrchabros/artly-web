import { initReveal } from './reveal';
import { initRotators } from './rotator';
import { initCarousels } from './carousel';
import { initStepper } from './stepper';
import { initTabs } from './tabs';
import { initCycler } from './cycler';
import { initMenu, initLangPopover } from './menu';
import { initStickyCta } from './sticky-cta';
import { initLangBar } from './langbar';

// Runs on the first load and after every ClientRouter navigation; the previous page's listeners are aborted.
let ctrl: AbortController | undefined;

document.addEventListener('astro:page-load', () => {
  ctrl?.abort();
  ctrl = new AbortController();
  const { signal } = ctrl;
  initReveal(signal);
  initRotators(signal); // rotators BEFORE stepper/tabs
  document.querySelectorAll<HTMLElement>('[data-stepper]').forEach((el) => initStepper(el, signal));
  initTabs(signal);
  initCarousels(signal);
  initMenu(signal);
  initLangPopover(signal);
  initCycler(signal);
  initStickyCta(signal);
  initLangBar(signal);
});

document.addEventListener('astro:before-swap', () => ctrl?.abort());
