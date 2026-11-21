import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

export const CATEGORIES = ['Poradniki', 'Wnętrza i projekty', 'Historie artystów', 'Trendy'] as const;

export const collections = {
  inspiracje: defineCollection({
    loader: glob({ pattern: '**/*.md', base: './src/content/inspiracje' }),
    schema: ({ image }) => z.object({
      title: z.string(),                 // H1 (one per page)
      seoTitle: z.string().max(60),      // <title>
      description: z.string().max(160),  // meta description
      lead: z.string(),                  // teaser
      author: z.string(),
      date: z.coerce.date(),
      category: z.enum(CATEGORIES),
      cover: image(),
      coverAlt: z.string(),
      featured: z.boolean().default(false),
      artworks: z.array(z.string()).default([]), // artwork slugs → "Zobacz podobne obrazy"
      draft: z.boolean().default(false),
    }),
  }),
};
