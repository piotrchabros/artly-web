import { getRotator } from './rotator';

/** Feature tabs (spec §5.6, §7.5, A12): WAI-ARIA tabs with automatic activation, for every `[data-tabs]`. */
export function initTabs(signal: AbortSignal): void {
  document.querySelectorAll<HTMLElement>('[data-tabs]').forEach((root) => {
    if (root.dataset.ready) return;
    root.dataset.ready = 'true';

    const list = root.querySelector<HTMLElement>('[role="tablist"]');
    if (!list) return;
    const tabs = [...list.querySelectorAll<HTMLButtonElement>('[role="tab"]')];
    if (!tabs.length) return;
    const panels = tabs.map((t) => document.getElementById(t.getAttribute('aria-controls') ?? ''));

    let index = Math.max(0, tabs.findIndex((t) => t.getAttribute('aria-selected') === 'true'));

    // Centers the tab inside a horizontally scrolling tablist (mobile). No scrollIntoView: it would scroll the page too.
    const centerTab = (tab: HTMLElement) => {
      if (list.scrollWidth <= list.clientWidth) return;
      const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
      const lr = list.getBoundingClientRect(), tr = tab.getBoundingClientRect();
      const left = list.scrollLeft + (tr.left - lr.left) - (list.clientWidth - tr.width) / 2;
      list.scrollTo({ left, behavior: reduce ? 'auto' : 'smooth' });
    };

    const select = (n: number, focus = false) => {
      n = (n + tabs.length) % tabs.length;
      const tab = tabs[n];
      if (focus) tab.focus({ preventScroll: true });
      centerTab(tab);
      if (n === index) return;
      index = n;

      tabs.forEach((t, i) => {
        const on = i === n;
        t.setAttribute('aria-selected', String(on));
        t.tabIndex = on ? 0 : -1;
      });
      panels.forEach((p, i) => {
        if (!p) return;
        p.hidden = i !== n;
        if (i === n) {
          p.classList.remove('panel-in');
          void p.offsetWidth; // restart the animation
          p.classList.add('panel-in');
        }
      });
      getRotator(root.querySelector('[data-rotator]'))?.set(n);
    };

    tabs.forEach((t, i) => t.addEventListener('click', () => select(i), { signal }));

    list.addEventListener('keydown', (e) => {
      const keys: Record<string, number> = { ArrowRight: index + 1, ArrowLeft: index - 1, Home: 0, End: tabs.length - 1 };
      if (!(e.key in keys)) return;
      e.preventDefault();
      select(keys[e.key], true);
    }, { signal });
  });
}
