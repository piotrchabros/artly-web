import { assignTestIds } from './testids';

declare global { interface Window { dataLayer?: unknown[]; __artlyAppban?: () => void } }

const layout = () => document.dispatchEvent(new Event('artly:layout'));

function initMenu(signal: AbortSignal) {
  const hdr = document.querySelector<HTMLElement>('.hdr');
  const btn = hdr?.querySelector<HTMLButtonElement>('.hdr__burger');
  if (!hdr || !btn) return;
  const set = (open: boolean) => {
    hdr.classList.toggle('is-open', open);
    btn.setAttribute('aria-expanded', String(open));
    layout();
  };
  btn.addEventListener('click', () => set(!hdr.classList.contains('is-open')), { signal });
  hdr.querySelectorAll('.hdr__nav a').forEach((a) => a.addEventListener('click', () => set(false), { signal }));
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && hdr.classList.contains('is-open')) { set(false); btn.focus(); } }, { signal });
  matchMedia('(min-width: 1024px)').addEventListener('change', (e) => { if (e.matches) set(false); }, { signal });
}

function initAppBanner(signal: AbortSignal) {
  const ban = document.querySelector<HTMLElement>('.appban');
  if (!ban) return;
  const root = document.documentElement;
  const hideFor = (days: number) => {
    try { localStorage.setItem('artly_appban_until', String(Date.now() + days * 864e5)); } catch {}
    root.classList.add('no-appban');
    layout();
  };
  ban.querySelector('.appban__x')?.addEventListener('click', () => { hideFor(30); window.dataLayer?.push({ event: 'app_banner_close' }); }, { signal });
  ban.querySelector('.appban__cta')?.addEventListener('click', () => { hideFor(7); window.dataLayer?.push({ event: 'app_banner_click' }); }, { signal });
  if (!root.classList.contains('no-appban') && getComputedStyle(ban).display !== 'none') window.dataLayer?.push({ event: 'app_banner_view' });
}

const SAVED_KEY = 'artly_saved';
function initSave(signal: AbortSignal) {
  let saved: string[] = [];
  try { saved = JSON.parse(localStorage.getItem(SAVED_KEY) || '[]'); } catch {}
  document.querySelectorAll<HTMLButtonElement>('[data-save]').forEach((b) => {
    const slug = b.dataset.save!;
    b.setAttribute('aria-pressed', String(saved.includes(slug)));
    b.addEventListener('click', () => {
      const on = b.getAttribute('aria-pressed') !== 'true';
      b.setAttribute('aria-pressed', String(on));
      saved = on ? [...new Set([...saved, slug])] : saved.filter((s) => s !== slug);
      try { localStorage.setItem(SAVED_KEY, JSON.stringify(saved)); } catch {}
      if (on) window.dataLayer?.push({ event: 'add_to_wishlist', item_id: slug });
    }, { signal });
  });
}

/** Fallback for browsers without scroll-driven animations. */
function initReveal(signal: AbortSignal) {
  if (CSS.supports('animation-timeline: view()') || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const io = new IntersectionObserver((es) => es.forEach((e) => {
    if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
  }), { rootMargin: '0px 0px -10% 0px' });
  document.querySelectorAll('.rv').forEach((el) => {
    if (el.getBoundingClientRect().top > innerHeight) { el.classList.add('rv--wait'); io.observe(el); }
  });
  signal.addEventListener('abort', () => io.disconnect());
}

let ctrl: AbortController | undefined;
document.addEventListener('astro:page-load', () => {
  ctrl?.abort();
  ctrl = new AbortController();
  const { signal } = ctrl;
  initMenu(signal);
  initAppBanner(signal);
  initSave(signal);
  initReveal(signal);
  assignTestIds();
});
document.addEventListener('astro:after-swap', () => window.__artlyAppban?.());
document.addEventListener('astro:before-swap', () => ctrl?.abort());
