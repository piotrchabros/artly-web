// ARTLY – porównanie zrzutu z symulatora/emulatora z referencją @1x (tolerancja 2 px).
// 1) Zrób zrzut na urządzeniu 390 pt szerokości (iPhone 12/13/14, 390×844 pt):
//      xcrun simctl io booted screenshot impl.png          (iOS, 1170×2532 px @3x)
//      adb exec-out screencap -p > impl.png                (Android, emulator 390 dp szer., np. 1080 px @2.77 – patrz instrukcja)
// 2) node tools/compare-png.mjs --spec spec/A01_start.json --ref reference_1x/A01_start@1x.png \
//        --img impl.png --scale 3 --top 47 [--bottom 0]
//    --scale  gęstość ekranu (iOS 3), --top  wysokość status bara w pt do odcięcia (iPhone 13/14: 47),
//    --bottom wysokość wskaźnika Home poniżej paska zakładek, jeśli nie jest częścią referencji (0 – patrz instrukcja §6).
// npm i -D pngjs pixelmatch sharp
import fs from 'node:fs';
import sharp from 'sharp';
import { pixelDiff, printReport } from './compare-lib.mjs';

const arg = (k, d) => { const i = process.argv.indexOf('--' + k); return i > 0 ? process.argv[i + 1] : d; };
const spec = JSON.parse(fs.readFileSync(arg('spec'), 'utf8'));
const scale = +arg('scale', 3), top = +arg('top', 0), bottom = +arg('bottom', 0);
const meta = await sharp(arg('img')).metadata();
const W = spec.viewport.w, H = spec.viewport.h;
const tmp = spec.screen + '_impl_1x.png';
await sharp(arg('img'))
  .extract({ left: 0, top: Math.round(top * scale), width: meta.width, height: meta.height - Math.round((top + bottom) * scale) })
  .resize({ width: W, height: H, fit: 'fill', kernel: 'lanczos3' })
  .png().toFile(tmp);
const px = pixelDiff(arg('ref'), tmp, spec, spec.screen + '_diff.png', 2, { blur: true, maxPct: 1, colorTol: 72 });
process.exit(printReport(spec.screen + ' (natywnie)', [], [], px) ? 0 : 1);
