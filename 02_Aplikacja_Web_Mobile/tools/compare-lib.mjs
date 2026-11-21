// ARTLY – wspólny silnik porównania z referencją (tolerancja 2 px).
// Używany przez compare-web.mjs (web) i compare-png.mjs (zrzuty z iOS/Android).
// npm i -D pngjs pixelmatch
import fs from 'node:fs';
import { PNG } from 'pngjs';
import pixelmatch from 'pixelmatch';

export const TOL = 2;

/** Elementy, które muszą mieć testID / data-testid i są sprawdzane co do pozycji. */
export function keyElements(spec) {
  return spec.elements.filter(e => e.key && !e.offscreen && !e.covered && e.w >= 8 && e.h >= 8);
}

/** "A03_dzielo.button.kopiuj-link-do-dziela" -> "button.kopiuj-link-do-dziela" (testID bez prefiksu ekranu). */
export function testIdOf(id) {
  return id.split('.').slice(1).join('.');
}

/** Porównanie prostokątów: zwraca listę odchyleń > TOL. */
export function compareBoxes(spec, measured, tol = TOL) {
  const out = [];
  for (const e of keyElements(spec)) {
    const tid = testIdOf(e.id);
    const m = measured[tid];
    if (!m) { out.push({ id: tid, status: 'MISSING' }); continue; }
    const d = { dx: m.x - e.x, dy: m.y - e.y, dw: m.w - e.w, dh: m.h - e.h };
    const bad = Object.entries(d).filter(([, v]) => Math.abs(v) > tol);
    if (bad.length) out.push({ id: tid, status: 'FAIL', expected: { x: e.x, y: e.y, w: e.w, h: e.h }, got: m, ...d });
  }
  return out;
}

/** Porównanie typografii (rozmiar, grubość, kolor) – wymagana zgodność 1:1. */
export function compareFonts(spec, measuredFonts) {
  const out = [];
  for (const e of keyElements(spec)) {
    if (!e.font || !e.text) continue;
    const tid = testIdOf(e.id), m = measuredFonts[tid];
    if (!m) continue;
    for (const k of ['size', 'weight', 'color']) {
      if (m[k] && String(m[k]) !== String(e.font[k])) out.push({ id: tid, status: 'FONT', prop: k, expected: e.font[k], got: m[k] });
    }
  }
  return out;
}

/**
 * Diff pikselowy z tolerancją przesunięcia 2 px:
 * piksel różny od referencji jest akceptowany, jeśli w promieniu 2 px w referencji
 * istnieje piksel o (prawie) tym samym kolorze. Zdjęcia dzieł/wnętrz są maskowane.
 */
export function pixelDiff(refPath, gotPath, spec, diffOut, tol = TOL, opts = {}) {
  const ref = PNG.sync.read(fs.readFileSync(refPath));
  const got = PNG.sync.read(fs.readFileSync(gotPath));
  // Zrzuty natywne (inny silnik renderujący tekst): lekkie rozmycie 1 px obu obrazów niweluje różnice antyaliasingu.
  if (opts.blur) { blur1(ref); blur1(got); }
  const maxPct = opts.maxPct ?? 0.3;
  if (ref.width !== got.width || Math.abs(ref.height - got.height) > tol) {
    return { ok: false, reason: `Rozmiar ${got.width}×${got.height} ≠ referencja ${ref.width}×${ref.height}` };
  }
  const { width: W } = ref, H = Math.min(ref.height, got.height);
  const mask = new Uint8Array(W * H);
  for (const e of spec.elements) if (e.id.includes('.img')) {
    for (let y = Math.max(0, Math.floor(e.y)); y < Math.min(H, Math.ceil(e.y + e.h)); y++)
      for (let x = Math.max(0, Math.floor(e.x)); x < Math.min(W, Math.ceil(e.x + e.w)); x++) mask[y * W + x] = 1;
  }
  const CT = opts.colorTol ?? 36;
  const near = (a, i, b, j) => Math.abs(a[i] - b[j]) + Math.abs(a[i + 1] - b[j + 1]) + Math.abs(a[i + 2] - b[j + 2]) < CT;
  const diff = new PNG({ width: W, height: H });
  let bad = 0, checked = 0;
  for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) {
    const p = y * W + x, i = p * 4;
    diff.data[i + 3] = 255;
    if (mask[p]) { diff.data[i] = diff.data[i + 1] = diff.data[i + 2] = 230; continue; }
    checked++;
    let ok = near(got.data, i, ref.data, i);
    for (let dy = -tol; !ok && dy <= tol; dy++) for (let dx = -tol; !ok && dx <= tol; dx++) {
      const yy = y + dy, xx = x + dx;
      if (yy >= 0 && yy < H && xx >= 0 && xx < W && near(got.data, i, ref.data, (yy * W + xx) * 4)) ok = true;
    }
    if (ok) { const g = 255 - (255 - ref.data[i + 1]) * 0.15; diff.data[i] = diff.data[i + 1] = diff.data[i + 2] = g; }
    else { bad++; diff.data[i] = 255; diff.data[i + 1] = 0; diff.data[i + 2] = 80; }
  }
  if (diffOut) fs.writeFileSync(diffOut, PNG.sync.write(diff));
  const pct = (bad / checked) * 100;
  // Dopuszczalny odsetek pikseli poza tolerancją: web 0,3 %, natywnie 1 % (patrz instrukcja §8).
  return { ok: pct <= maxPct, badPixels: bad, percent: +pct.toFixed(3), limit: maxPct };
}

function blur1(img) {
  const { width: W, height: H, data } = img, src = Buffer.from(data);
  for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) for (let c = 0; c < 3; c++) {
    let sum = 0, n = 0;
    for (let dy = -1; dy <= 1; dy++) for (let dx = -1; dx <= 1; dx++) {
      const yy = y + dy, xx = x + dx; if (yy < 0 || yy >= H || xx < 0 || xx >= W) continue;
      sum += src[(yy * W + xx) * 4 + c]; n++;
    }
    data[(y * W + x) * 4 + c] = sum / n;
  }
}

export function printReport(name, boxes, fonts, px) {
  const fails = [...boxes, ...fonts];
  console.log(`\n=== ${name} ===`);
  for (const f of fails) console.log(JSON.stringify(f));
  if (px) console.log(`pixel diff: ${px.ok ? 'OK' : 'FAIL'} ${px.percent ?? ''}% ${px.reason ?? ''}`);
  const ok = fails.length === 0 && (!px || px.ok);
  console.log(ok ? 'WYNIK: ZALICZONY (±2 px)' : `WYNIK: NIEZALICZONY – ${fails.length} odchyleń`);
  return ok;
}

// Pozostaw import pixelmatch do ewentualnego szybkiego podglądu (np. pixelmatch(ref, got, out, W, H, {threshold:0.1})).
export { pixelmatch };
