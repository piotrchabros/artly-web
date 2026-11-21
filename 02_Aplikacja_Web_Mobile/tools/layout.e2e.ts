// ARTLY – test Detox: pozycje elementów na iOS zgodne ze spec (±2 pt).
// Uruchamiaj na symulatorze iPhone 13/14 (390×844 pt), Dynamic Type = Large (domyślny), język PL.
// Ramka z getAttributes() na iOS jest w punktach względem okna; odejmujemy górny safe area,
// bo referencja zaczyna się pod status barem (y = 0 = góra safe area).
import { by, device, element } from 'detox';
import spec from '../spec/A01_start.json';

const TOL = 2;
const SAFE_TOP = 47; // iPhone 13/14

const keyEls = (spec as any).elements.filter((e: any) => e.key && !e.offscreen && !e.covered && e.w >= 8 && e.h >= 8);
const tid = (id: string) => id.split('.').slice(1).join('.');

describe(`Layout ${spec.screen}`, () => {
  beforeAll(async () => {
    await device.launchApp({ newInstance: true, launchArgs: { e2eScreen: 'start', reduceMotion: true } });
  });

  for (const e of keyEls) {
    it(`${tid(e.id)} w granicach ±${TOL} pt`, async () => {
      const attrs: any = await element(by.id(tid(e.id))).getAttributes();
      const f = attrs.frame; // { x, y, width, height }
      const got = { x: f.x, y: f.y - SAFE_TOP, w: f.width, h: f.height };
      expect(Math.abs(got.x - e.x)).toBeLessThanOrEqual(TOL);
      expect(Math.abs(got.y - e.y)).toBeLessThanOrEqual(TOL);
      expect(Math.abs(got.w - e.w)).toBeLessThanOrEqual(TOL);
      expect(Math.abs(got.h - e.h)).toBeLessThanOrEqual(TOL);
    });
  }
});
// Android: Detox zwraca visibleBounds w px – podziel przez gęstość (attrs / PixelRatio z build config)
// albo użyj compare-png.mjs na zrzucie z emulatora o szerokości 390 dp.
