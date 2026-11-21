import type { ImageMetadata } from 'astro';
import w1 from '../assets/home/w1.jpg';
import w2 from '../assets/home/w2.jpg';
import w3 from '../assets/home/w3.jpg';
import w4 from '../assets/home/w4.jpg';
import w5 from '../assets/home/w5.jpg';

/** Placeholder catalogue from the v2 mock-up. Replace with the shop API (newest first) before launch. */
export interface Artwork { slug: string; title: string; artist: string; price: string; img: ImageMetadata; alt: string }

export const artworks: Artwork[] = [
  { slug: 'bez-tytulu-anna-kruk', title: 'Bez tytułu', artist: 'Anna Kruk', price: '3 900 zł', img: w1, alt: 'Bez tytułu, Anna Kruk' },
  { slug: 'energia-marek-lasek', title: 'Energia', artist: 'Marek Lasek', price: '5 200 zł', img: w2, alt: 'Energia, Marek Lasek' },
  { slug: 'horyzont-julia-nowak', title: 'Horyzont', artist: 'Julia Nowak', price: '4 800 zł', img: w3, alt: 'Horyzont, Julia Nowak' },
  { slug: 'ruch-piotr-wojcik', title: 'Ruch', artist: 'Piotr Wójcik', price: '4 200 zł', img: w4, alt: 'Ruch, Piotr Wójcik' },
  { slug: 'w-ciszy-katarzyna-biel', title: 'W ciszy', artist: 'Katarzyna Biel', price: '3 700 zł', img: w5, alt: 'W ciszy, Katarzyna Biel' },
];

export const artworkBySlug = (slug: string) => artworks.find((a) => a.slug === slug);
