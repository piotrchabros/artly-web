/** Mobile sticky CTA (spec §7.9): shown after the hero buttons scroll away, hidden over the final CTA. */
export function initStickyCta(signal: AbortSignal): void {
  const bar = document.querySelector<HTMLElement>('.sticky-cta');
  const heroCtas = document.querySelector('#hero-ctas');
  const finalCta = document.querySelector('#pobierz');
  if (!bar || !heroCtas || !finalCta || bar.hasAttribute('data-ready')) return;
  bar.dataset.ready = '';

  let pastHero = false, atEnd = false;
  const render = () => bar.classList.toggle('is-visible', pastHero && !atEnd);

  const heroIo = new IntersectionObserver(([e]) => {
    pastHero = !e.isIntersecting && e.boundingClientRect.top < 0;
    render();
  });
  const endIo = new IntersectionObserver(([e]) => {
    atEnd = e.isIntersecting;
    render();
  });
  heroIo.observe(heroCtas);
  endIo.observe(finalCta);

  signal.addEventListener('abort', () => {
    heroIo.disconnect();
    endIo.disconnect();
  });
}
