// Scroll reveal (spec §7.2): `.reveal` gets `.is-in` once it enters the viewport.
// Direct `.reveal` children of a `[data-stagger]` group get `--stagger: i * 80ms`.
// No data-ready marker here: `.is-in` already marks finished elements, and a .reveal
// element may also be a rotator/carousel root that uses data-ready itself.

export function initReveal(signal: AbortSignal, root: ParentNode = document): void {
  if (signal.aborted) return;

  root.querySelectorAll<HTMLElement>('[data-stagger]').forEach((group) =>
    group.querySelectorAll<HTMLElement>(':scope > .reveal').forEach((child, i) =>
      child.style.setProperty('--stagger', `${i * 80}ms`)));

  const els = root.querySelectorAll<HTMLElement>('.reveal:not(.is-in)');
  if (!els.length) return;

  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce || !('IntersectionObserver' in window)) {
    els.forEach((el) => el.classList.add('is-in'));
    return;
  }

  const io = new IntersectionObserver((entries) => {
    for (const e of entries) {
      if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); }
    }
  }, { rootMargin: '0px 0px -10% 0px', threshold: 0.1 });

  els.forEach((el) => io.observe(el));
  signal.addEventListener('abort', () => io.disconnect(), { once: true });
}
