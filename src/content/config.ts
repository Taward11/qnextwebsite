import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    seoTitle: z.string().optional(),
    description: z.string().optional(),
    date: z.coerce.date(),
    modified: z.coerce.date().optional(),
    author: z.string().default('FileFlex Team'),
    featuredImage: z.string().optional(),
    featuredImageAlt: z.string().optional(),
    excerpt: z.string().optional(),
    readingTime: z.string().optional(),
    categories: z.array(z.string()).min(1).max(5),
    tags: z.array(z.string()).default([]),
    toc: z.boolean().default(true),
    faq: z
      .array(
        z.object({
          q: z.string(),
          a: z.string(),
        })
      )
      .default([]),
    tables: z
      .array(
        z.object({
          id: z.string(),
          caption: z.string().optional(),
          headers: z.array(z.string()).optional(),
          rows: z.array(z.array(z.string())),
        })
      )
      .default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
