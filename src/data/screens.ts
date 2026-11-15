import type { ImageMetadata } from 'astro';
import start from '../assets/screens/shot-start.png';
import odkrywaj from '../assets/screens/shot-odkrywaj.png';
import wizualizacja from '../assets/screens/shot-wizualizacja.png';
import dzielo from '../assets/screens/shot-dzielo.png';
import profil from '../assets/screens/shot-profil.png';
import wnetrze from '../assets/screens/shot-wnetrze.png';
import gust from '../assets/screens/shot-gust.png';
import zakup from '../assets/screens/shot-zakup.png';
import zamowienie from '../assets/screens/shot-zamowienie.png';
import dodajPrace from '../assets/screens/shot-dodaj-prace.png';
import opisDziela from '../assets/screens/shot-opis-dziela.png';
import panel from '../assets/screens/shot-panel.png';
import wyplaty from '../assets/screens/shot-wyplaty.png';

/** App screenshots, 780×1688 (390×844 @2x). Alt text lives in `d.screens[key]`. */
export const screens = {
  start, odkrywaj, wizualizacja, dzielo, profil, wnetrze, gust, zakup, zamowienie,
  dodajPrace, opisDziela, panel, wyplaty,
} satisfies Record<string, ImageMetadata>;

export type ScreenKey = keyof typeof screens;

export interface Shot { src: ImageMetadata; alt: string }

export function shot(key: ScreenKey, alt: string): Shot {
  return { src: screens[key], alt };
}
