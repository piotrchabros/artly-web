import { getCollection, type CollectionEntry } from 'astro:content';
import { CATEGORIES } from '../content.config';
import { slugify } from './site';

export type Article = CollectionEntry<'inspiracje'>;

/** Published articles, newest first. */
export async function getArticles(): Promise<Article[]> {
  const all = await getCollection('inspiracje', ({ data }) => !data.draft);
  return all.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

/** Three newest for the home teaser, the newest featured one first. */
export async function getTeaser(): Promise<Article[]> {
  const list = await getArticles();
  const feat = list.find((a) => a.data.featured) ?? list[0];
  return feat ? [feat, ...list.filter((a) => a !== feat)].slice(0, 3) : [];
}

export const readingMinutes = (a: Article) => Math.max(1, Math.round((a.body ?? '').split(/\s+/).filter(Boolean).length / 200));
export const articlePath = (a: Article) => `/inspiracje/${a.id}/`;
export const categories = CATEGORIES.map((name) => ({ name, slug: slugify(name), path: `/inspiracje/kategoria/${slugify(name)}/` }));
export const categoryPath = (name: string) => `/inspiracje/kategoria/${slugify(name)}/`;

/** Singular label shown on cards ("PORADNIK"); the category name stays plural in navigation. */
const LABELS: Record<string, string> = { 'Poradniki': 'Poradnik', 'Wnętrza i projekty': 'Wnętrza i projekty', 'Historie artystów': 'Historie artystów', 'Trendy': 'Trendy' };
export const categoryLabel = (name: string) => LABELS[name] ?? name;
