const FOCUSABLE = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

/** Burger + #mobile-menu (spec §7.8) and the "+3" language chips. */
export function initMenu(signal: AbortSignal): void {
  const burger = document.querySelector<HTMLButtonElement>('.burger[aria-controls="mobile-menu"]');
  const menu = document.getElementById('mobile-menu');

  document.querySelectorAll<HTMLButtonElement>('[data-lang-more]:not([data-ready])').forEach((btn) => {
    btn.dataset.ready = '';
    btn.addEventListener('click', () => {
      const list = btn.closest('.mmenu__lang');
      const extras = list?.querySelectorAll<HTMLElement>('[data-extra]') ?? [];
      extras.forEach((el) => { el.hidden = false; });
      (extras[0]?.querySelector<HTMLElement>('a') ?? null)?.focus();
      (btn.closest('li') ?? btn).remove();
    }, { signal });
  });

  if (!burger || !menu || burger.hasAttribute('data-ready')) return;
  burger.dataset.ready = '';

  const root = document.documentElement;
  const header = burger.closest('header');
  let closeTimer: number | undefined;
  let raf = 0;

  const isOpen = () => burger.getAttribute('aria-expanded') === 'true';
  const focusables = () => [burger, ...menu.querySelectorAll<HTMLElement>(FOCUSABLE)].filter((el) => !el.closest('[hidden]'));

  const open = () => {
    clearTimeout(closeTimer);
    // Sit right under the header, even when the language bar pushes it down.
    if (header) menu.style.top = `${Math.max(0, header.getBoundingClientRect().bottom)}px`;
    menu.hidden = false;
    burger.setAttribute('aria-expanded', 'true');
    burger.setAttribute('aria-label', burger.dataset.labelClose ?? '');
    root.style.overflow = 'hidden';
    raf = requestAnimationFrame(() => {
      menu.classList.add('is-open');
      menu.querySelector<HTMLElement>('.mmenu__link')?.focus({ preventScroll: true });
    });
  };

  const close = (returnFocus = false) => {
    if (!isOpen()) return;
    cancelAnimationFrame(raf);
    burger.setAttribute('aria-expanded', 'false');
    burger.setAttribute('aria-label', burger.dataset.labelOpen ?? '');
    root.style.overflow = '';
    menu.classList.remove('is-open');
    if (returnFocus) burger.focus();
    const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) { menu.hidden = true; return; }
    const done = () => { clearTimeout(closeTimer); if (!isOpen()) menu.hidden = true; };
    menu.addEventListener('transitionend', (e) => { if (e.target === menu) done(); }, { once: true, signal });
    closeTimer = window.setTimeout(done, 450);
  };

  burger.addEventListener('click', () => (isOpen() ? close() : open()), { signal });

  menu.addEventListener('click', (e) => {
    if ((e.target as Element).closest('a')) close();
  }, { signal });

  document.addEventListener('keydown', (e) => {
    if (!isOpen()) return;
    if (e.key === 'Escape') { e.preventDefault(); close(true); return; }
    if (e.key !== 'Tab') return;
    const items = focusables();
    if (!items.length) return;
    const first = items[0], last = items[items.length - 1];
    const active = document.activeElement as HTMLElement | null;
    const inside = active ? items.includes(active) : false;
    if (e.shiftKey && (active === first || !inside)) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && (active === last || !inside)) { e.preventDefault(); first.focus(); }
  }, { signal });

  const desktop = matchMedia('(min-width: 768px)');
  desktop.addEventListener('change', (e) => { if (e.matches) close(); }, { signal });

  signal.addEventListener('abort', () => {
    clearTimeout(closeTimer);
    cancelAnimationFrame(raf);
    root.style.overflow = '';
  });
}

/** <details data-lang-popover>: close on outside click, Esc and link click. */
export function initLangPopover(signal: AbortSignal): void {
  document.querySelectorAll<HTMLDetailsElement>('details[data-lang-popover]:not([data-ready])').forEach((details) => {
    details.dataset.ready = '';
    const summary = details.querySelector('summary');

    document.addEventListener('click', (e) => {
      if (details.open && !details.contains(e.target as Node)) details.open = false;
    }, { signal });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && details.open) {
        details.open = false;
        summary?.focus();
      }
    }, { signal });

    details.addEventListener('click', (e) => {
      if ((e.target as Element).closest('a')) details.open = false;
    }, { signal });
  });
}
