/** Greeting word cycler (spec §5.7, A13) for every `[data-cycler]`. Static first word under reduced motion. */
export function initCycler(signal: AbortSignal): void {
  document.querySelectorAll<HTMLElement>('[data-cycler]').forEach((root) => {
    if (root.dataset.ready) return;
    root.dataset.ready = 'true';

    const word = root.querySelector<HTMLElement>('.cycler__word');
    let words: string[] = [];
    try { words = JSON.parse(root.dataset.words ?? '[]'); } catch { /* keep the static word */ }
    if (!word || words.length < 2 || matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const interval = Number(root.dataset.interval) || 1800;
    let index = 0, visible = false;
    let timer: number | undefined;

    const tick = () => {
      index = (index + 1) % words.length;
      word.textContent = words[index];
      word.classList.remove('is-in');
      void word.offsetWidth; // restart the animation
      word.classList.add('is-in');
    };

    const update = () => {
      const run = visible && !document.hidden;
      if (run && timer === undefined) timer = window.setInterval(tick, interval);
      else if (!run && timer !== undefined) { clearInterval(timer); timer = undefined; }
    };

    const io = new IntersectionObserver(([e]) => { visible = e.isIntersecting; update(); });
    io.observe(root);
    document.addEventListener('visibilitychange', update, { signal });
    signal.addEventListener('abort', () => { io.disconnect(); clearInterval(timer); }, { once: true });
  });
}
