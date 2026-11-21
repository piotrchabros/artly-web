/**
 * data-testid hooks for the ±2 px check (01_Witryna_Astro/tools/compare-web.mjs).
 *
 * The spec ids depend on the viewport and on what is visible: the same footer link is
 * "a.odkrywaj" on mobile with the menu closed and "a.odkrywaj-2" once the menu shows
 * its own "Odkrywaj". Elements therefore carry `data-tid="<desktop id>|<mobile id>"`
 * (one value = both) and this assigns data-testid to the visible ones in document
 * order, numbering repeats "-2", "-3"… exactly like the spec generator.
 */
const mq = matchMedia('(max-width: 1023px)');

function visible(el: Element): boolean {
  return typeof el.checkVisibility === 'function'
    ? el.checkVisibility({ visibilityProperty: true })
    : el.getClientRects().length > 0;
}

export function assignTestIds(): void {
  const mobile = mq.matches;
  const seen: Record<string, number> = {};
  document.querySelectorAll<HTMLElement>('[data-tid]').forEach((el) => {
    el.removeAttribute('data-testid');
    const [d, m = d] = (el.dataset.tid ?? '').split('|');
    const base = mobile ? m : d;
    if (!base || !visible(el)) return;
    const n = (seen[base] = (seen[base] ?? 0) + 1);
    el.dataset.testid = n === 1 ? base : `${base}-${n}`;
  });
}

let raf = 0;
export function scheduleTestIds(): void {
  cancelAnimationFrame(raf);
  raf = requestAnimationFrame(assignTestIds);
}

mq.addEventListener('change', scheduleTestIds);
document.addEventListener('artly:layout', scheduleTestIds);
