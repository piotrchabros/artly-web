/** Marquee tiles. `art` maps to the CSS class `art-${n}` in base.css. */
export interface Artwork { title: string; artist: string; art: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 }

export const artworks: Artwork[] = [
  { title: 'Przypływ',       artist: 'Zofia Lis',    art: 1 },
  { title: 'Ciepły wiatr',   artist: 'Ina Kowal',    art: 2 },
  { title: 'Południe',       artist: 'Marek Wrona',  art: 3 },
  { title: 'Horyzont 04',    artist: 'Tomasz Bród',  art: 4 },
  { title: 'Ogród',          artist: 'Ina Kowal',    art: 5 },
  { title: 'Żar',            artist: 'Zofia Lis',    art: 6 },
  { title: 'Portret w różu', artist: 'Ola Mazur',    art: 7 },
  { title: 'Linie',          artist: 'Tomasz Bród',  art: 8 },
];
