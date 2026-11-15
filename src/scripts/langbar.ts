// Locales are read from the markup (data-current + data-options) so the dictionaries stay out of the client bundle.
export const LANG_STORAGE_KEY = 'artly-lang'; // value: a Locale code (chosen) or 'dismissed'

interface LangOption { text: string; switch: string; href: string }

function read(): string | null {
  try { return localStorage.getItem(LANG_STORAGE_KEY); } catch { return null; }
}
function store(value: string): void {
  try { localStorage.setItem(LANG_STORAGE_KEY, value); } catch { /* storage blocked */ }
}

/** First-visit language suggestion bar (spec §10); remembers the choice. */
export function initLangBar(signal: AbortSignal): void {
  document.addEventListener('click', (e) => {
    const link = (e.target as Element | null)?.closest<HTMLAnchorElement>('a[data-lang-choice]');
    const choice = link?.dataset.langChoice;
    if (choice) store(choice);
  }, { signal });

  const bar = document.getElementById('langbar');
  if (!bar || bar.hasAttribute('data-ready')) return;
  bar.dataset.ready = '';
  if (read()) return;

  let options: Record<string, LangOption> = {};
  try { options = JSON.parse(bar.dataset.options ?? '{}'); } catch { return; }

  const supported = [bar.dataset.current ?? '', ...Object.keys(options)];
  const preferred = (navigator.languages?.length ? navigator.languages : [navigator.language])
    .map((l) => (l || '').toLowerCase().split('-')[0])
    .find((l) => supported.includes(l));
  if (!preferred || preferred === bar.dataset.current) return;
  const option = options[preferred];
  if (!option) return;

  const text = bar.querySelector<HTMLElement>('.langbar__text');
  const link = bar.querySelector<HTMLAnchorElement>('.langbar__switch');
  const closeBtn = bar.querySelector<HTMLButtonElement>('.langbar__close');
  if (!text || !link) return;

  text.textContent = option.text;
  text.lang = preferred;
  link.textContent = option.switch;
  link.href = option.href;
  link.lang = preferred;
  link.hreflang = preferred;
  link.dataset.langChoice = preferred;
  bar.hidden = false;

  closeBtn?.addEventListener('click', () => {
    store('dismissed');
    bar.hidden = true;
  }, { signal });
}
