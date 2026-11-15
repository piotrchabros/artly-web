// Screen rotator (spec §7.3): crossfading `.shot` stack inside a phone, with dot tabs.
// Shared by Hero, Steps and FeatureTabs; Steps/FeatureTabs drive it through getRotator(el).set(i).

export interface RotatorApi {
  set(i: number): void;
  start(): void;
  stop(): void;
  readonly index: number;
  readonly length: number;
}

const registry = new WeakMap<Element, RotatorApi>();

export function getRotator(el: Element | null): RotatorApi | undefined {
  return el ? registry.get(el) : undefined;
}

export function initRotators(signal: AbortSignal): void {
  if (signal.aborted) return;
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

  document.querySelectorAll<HTMLElement>('[data-rotator]:not([data-ready])').forEach((el) => {
    el.dataset.ready = '';
    const shots = [...el.querySelectorAll<HTMLElement>('.shot')];
    const dots = [...el.querySelectorAll<HTMLButtonElement>('[data-go]')];
    const interval = Number(el.dataset.interval) || 3200;
    const autoplay = el.dataset.autoplay === 'on' && !reduce && shots.length > 1;
    let i = Math.max(0, shots.findIndex((s) => s.classList.contains('is-active')));
    let timer: number | undefined;
    let visible = false;
    let focused = false;

    const set = (n: number) => {
      if (!shots.length) return;
      const next = ((n % shots.length) + shots.length) % shots.length;
      const changed = next !== i;
      i = next;
      shots.forEach((s, k) => {
        s.classList.toggle('is-active', k === i);
        if (k === i) s.removeAttribute('aria-hidden'); else s.setAttribute('aria-hidden', 'true');
      });
      dots.forEach((d, k) => {
        d.setAttribute('aria-selected', String(k === i));
        d.tabIndex = k === i ? 0 : -1;
      });
      if (changed) el.dispatchEvent(new CustomEvent('rotator:change', { detail: { index: i } }));
    };
    const stop = () => {
      if (timer !== undefined) clearInterval(timer);
      timer = undefined;
    };
    const start = () => {
      stop();
      if (autoplay && visible && !focused && !document.hidden) timer = window.setInterval(() => set(i + 1), interval);
    };

    dots.forEach((d) => d.addEventListener('click', () => { set(Number(d.dataset.go)); start(); }, { signal }));

    // roving tabindex: arrows/Home/End move focus and selection
    const tablist = dots[0]?.parentElement;
    tablist?.addEventListener('keydown', (e) => {
      const delta = ({ ArrowRight: 1, ArrowLeft: -1 } as Record<string, number>)[e.key];
      let target: number | undefined;
      if (delta) target = i + delta;
      else if (e.key === 'Home') target = 0;
      else if (e.key === 'End') target = dots.length - 1;
      if (target === undefined) return;
      e.preventDefault();
      set(target);
      dots[i]?.focus();
    }, { signal });

    // pause while keyboard focus is inside; a mouse click on a dot is not :focus-visible, so it restarts autoplay
    el.addEventListener('focusin', (e) => {
      if (!(e.target as Element).matches(':focus-visible')) return;
      focused = true;
      stop();
    }, { signal });
    el.addEventListener('focusout', (e) => {
      if (el.contains(e.relatedTarget as Node | null)) return;
      focused = false;
      start();
    }, { signal });

    let io: IntersectionObserver | undefined;
    if (autoplay) {
      if ('IntersectionObserver' in window) {
        io = new IntersectionObserver(([e]) => { visible = e.isIntersecting; if (visible) start(); else stop(); });
        io.observe(el);
      } else {
        visible = true;
        start();
      }
      document.addEventListener('visibilitychange', () => (document.hidden ? stop() : start()), { signal });
    }

    registry.set(el, {
      set,
      start,
      stop,
      get index() { return i; },
      get length() { return shots.length; },
    });

    signal.addEventListener('abort', () => {
      stop();
      io?.disconnect();
      registry.delete(el);
      delete el.dataset.ready;
    }, { once: true });
  });
}
