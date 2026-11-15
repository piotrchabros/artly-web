// Mobile carousel (spec §7.6): native scroll-snap track, `.is-active` on the centred item,
// dots in `[data-dots="<track id>"]` with aria-current. Desktop styles ignore it (dots hidden).

export function initCarousels(signal: AbortSignal): void {
  if (signal.aborted) return;

  document.querySelectorAll<HTMLElement>('[data-carousel]:not([data-ready])').forEach((track) => {
    track.dataset.ready = '';
    const items = [...track.children] as HTMLElement[];
    const dots = track.id
      ? [...document.querySelectorAll<HTMLButtonElement>(`[data-dots="${CSS.escape(track.id)}"] button`)]
      : [];
    const step = () => (items[1] ? items[1].offsetLeft - items[0].offsetLeft : track.clientWidth) || 1;

    const update = () => {
      const i = Math.max(0, Math.min(items.length - 1, Math.round(track.scrollLeft / step())));
      items.forEach((el, k) => el.classList.toggle('is-active', k === i));
      dots.forEach((d, k) => {
        if (k === i) d.setAttribute('aria-current', 'true'); else d.removeAttribute('aria-current');
      });
    };

    let raf = 0;
    const schedule = () => { cancelAnimationFrame(raf); raf = requestAnimationFrame(update); };
    track.addEventListener('scroll', schedule, { passive: true, signal });
    window.addEventListener('resize', schedule, { passive: true, signal });

    dots.forEach((d, k) => d.addEventListener('click', () => {
      const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
      track.scrollTo({ left: k * step(), behavior: reduce ? 'auto' : 'smooth' });
    }, { signal }));

    update();

    signal.addEventListener('abort', () => {
      cancelAnimationFrame(raf);
      delete track.dataset.ready;
    }, { once: true });
  });
}
