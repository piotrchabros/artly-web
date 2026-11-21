// ARTLY – sprawdzenie implementacji WEB (Expo web / react-native-web / Astro) z referencją ±2 px.
// Użycie:
//   node tools/compare-web.mjs --spec spec/A01_start.json --ref reference_1x/A01_start@1x.png \
//        --url "http://localhost:8081/?screen=start" [--root screen-root] [--out raport/] [--mobile] [--click "Menu"]
// Wymagania w implementacji:
//   * korzeń ekranu ma data-testid="screen-root" (punkt 0,0 pomiaru),
//   * każdy element kluczowy ma data-testid = id ze spec bez prefiksu ekranu
//     (np. "a.odkrywaj-sztuke"), w RN: testID="a.odkrywaj-sztuke" (react-native-web zamienia na data-testid).
// npm i -D playwright pngjs pixelmatch
import fs from 'node:fs';
import path from 'node:path';
import { chromium } from 'playwright';
import { keyElements, testIdOf, compareBoxes, compareFonts, pixelDiff, printReport } from './compare-lib.mjs';

const arg = (k, d) => { const i = process.argv.indexOf('--' + k); return i > 0 ? process.argv[i + 1] : d; };
const spec = JSON.parse(fs.readFileSync(arg('spec'), 'utf8'));
const url = arg('url'), ref = arg('ref'), rootId = arg('root', 'screen-root'), outDir = arg('out', 'raport');
fs.mkdirSync(outDir, { recursive: true });

const browser = await chromium.launch();
const mobile = process.argv.includes('--mobile');
const page = await browser.newPage({
  viewport: { width: spec.viewport.w, height: spec.viewport.h }, deviceScaleFactor: 1, reducedMotion: 'reduce',
  ...(mobile ? { isMobile: true, hasTouch: true, userAgent: 'Mozilla/5.0 (Linux; Android 14; Pixel 8) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0 Mobile Safari/537.36' } : {}),
});
await page.goto(url, { waitUntil: 'networkidle' });
await page.evaluate(() => document.fonts.ready);
await page.waitForTimeout(500);
// --click "<aria-label lub tekst>" (można podać kilka razy) – np. zamknięcie banera, otwarcie menu/arkusza
for (let i = 0; i < process.argv.length; i++) if (process.argv[i] === '--click') {
  const c = process.argv[i + 1];
  await page.locator(`[aria-label="${c}"], button:has-text("${c}")`).first().click();
  await page.waitForTimeout(500);
}

const ids = keyElements(spec).map(e => testIdOf(e.id));
const { boxes, fonts } = await page.evaluate(({ ids, rootId }) => {
  const root = document.querySelector(`[data-testid="${rootId}"]`) || document.body;
  const R = root.getBoundingClientRect();
  const boxes = {}, fonts = {};
  for (const id of ids) {
    const el = document.querySelector(`[data-testid="${CSS.escape(id)}"]`);
    if (!el) continue;
    const r = el.getBoundingClientRect();
    boxes[id] = { x: Math.round((r.left - R.left) * 2) / 2, y: Math.round((r.top - R.top) * 2) / 2, w: Math.round(r.width * 2) / 2, h: Math.round(r.height * 2) / 2 };
    const cs = getComputedStyle(el);
    fonts[id] = { size: cs.fontSize, weight: cs.fontWeight, color: cs.color };
  }
  return { boxes, fonts };
}, { ids, rootId });

const shot = path.join(outDir, spec.screen + '_impl.png');
await page.screenshot({ path: shot, fullPage: spec.viewport.h > 844 });
await browser.close();

const b = compareBoxes(spec, boxes);
const f = compareFonts(spec, fonts);
const px = ref ? pixelDiff(ref, shot, spec, path.join(outDir, spec.screen + '_diff.png')) : null;
const ok = printReport(spec.screen, b, f, px);
fs.writeFileSync(path.join(outDir, spec.screen + '_raport.json'), JSON.stringify({ screen: spec.screen, ok, boxes: b, fonts: f, pixel: px }, null, 2));
process.exit(ok ? 0 : 1);
