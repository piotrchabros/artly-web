import { getRotator } from './rotator';

const DURATION = 4500;
const PAUSE = 12000;

/** "How it works" stepper (spec §5.5, §7.4, A11). `root` is the `[data-stepper]` section. */
export function initStepper(root: HTMLElement, signal: AbortSignal): void {
  if (root.dataset.ready) return;
  root.dataset.ready = 'true';

  const tabs = [...root.querySelectorAll<HTMLButtonElement>('[role="tab"]')];
  const panels = [...root.querySelectorAll<HTMLElement>('[role="tabpanel"]')];
  if (!tabs.length) return;

  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  let index = Math.max(0, tabs.findIndex((t) => t.getAttribute('aria-selected') === 'true'));
  let playing = false, visible = false, focused = false, pausedUntil = 0;
  let timer: number | undefined, resumeTimer: number | undefined, raf: number | undefined;

  const canPlay = () => !reduce && visible && !document.hidden && !focused && Date.now() >= pausedUntil;

  // Restarts the active bar: runs it (and schedules the next step) while playing, otherwise shows it full.
  const runBar = () => {
    clearTimeout(timer);
    if (raf !== undefined) cancelAnimationFrame(raf);
    tabs.forEach((t) => t.querySelector('.bar')?.classList.remove('run', 'is-full'));
    const bar = tabs[index].querySelector<HTMLElement>('.bar');
    if (!playing) { bar?.classList.add('is-full'); return; }
    raf = requestAnimationFrame(() => { raf = requestAnimationFrame(() => bar?.classList.add('run')); });
    timer = window.setTimeout(() => select(index + 1), DURATION);
  };

  // Recomputes autoplay; restarts the bar only when the state flips (or when forced).
  const sync = (force = false) => {
    const next = canPlay();
    if (next === playing && !force) return;
    playing = next;
    runBar();
  };

  const select = (n: number, { user = false, animate = true } = {}) => {
    index = (n + tabs.length) % tabs.length;
    tabs.forEach((t, k) => {
      t.setAttribute('aria-selected', String(k === index));
      t.tabIndex = k === index ? 0 : -1;
      t.classList.toggle('is-done', k < index);
    });
    panels.forEach((p, k) => {
      p.hidden = k !== index;
      p.classList.remove('panel-in');
      if (k === index && animate) { void p.offsetWidth; p.classList.add('panel-in'); }
    });
    getRotator(root.querySelector('[data-rotator]'))?.set(index);
    if (user) {
      pausedUntil = Date.now() + PAUSE;
      clearTimeout(resumeTimer);
      resumeTimer = window.setTimeout(() => sync(), PAUSE);
    }
    sync(true);
  };

  tabs.forEach((t, k) => t.addEventListener('click', () => select(k, { user: true }), { signal }));

  root.addEventListener('keydown', (e) => {
    if (!(e.target as Element).closest?.('[role="tab"]')) return;
    const last = tabs.length - 1;
    const n = ({ ArrowDown: index + 1, ArrowRight: index + 1, ArrowUp: index - 1, ArrowLeft: index - 1, Home: 0, End: last } as Record<string, number>)[e.key];
    if (n === undefined) return;
    e.preventDefault();
    select(n, { user: true });
    tabs[index].focus();
  }, { signal });

  root.addEventListener('focusin', () => { focused = true; sync(); }, { signal });
  root.addEventListener('focusout', (e) => {
    if (root.contains(e.relatedTarget as Node | null)) return;
    focused = false; sync();
  }, { signal });
  document.addEventListener('visibilitychange', () => sync(), { signal });

  const io = 'IntersectionObserver' in window
    ? new IntersectionObserver(([e]) => { visible = e.isIntersecting; sync(); }, { threshold: 0.25 })
    : undefined;
  io?.observe(root);

  signal.addEventListener('abort', () => {
    io?.disconnect();
    clearTimeout(timer);
    clearTimeout(resumeTimer);
    if (raf !== undefined) cancelAnimationFrame(raf);
  });

  select(index, { animate: false });
}
