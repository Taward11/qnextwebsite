import { getCollection, type CollectionEntry } from 'astro:content';

export type Post = CollectionEntry<'blog'>;

export function slugify(s: string): string {
  return s
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

export async function getAllPosts(): Promise<Post[]> {
  const posts = await getCollection('blog', ({ data }) => !data.draft);
  return posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export async function getRecentPosts(limit = 5): Promise<Post[]> {
  const all = await getAllPosts();
  return all.slice(0, limit);
}

export async function getCategoryCounts(): Promise<{ name: string; slug: string; count: number }[]> {
  const all = await getAllPosts();
  const map = new Map<string, { name: string; count: number }>();
  for (const p of all) {
    for (const cat of p.data.categories) {
      const slug = slugify(cat);
      const existing = map.get(slug);
      if (existing) existing.count += 1;
      else map.set(slug, { name: cat, count: 1 });
    }
  }
  return [...map.entries()]
    .map(([slug, v]) => ({ slug, ...v }))
    .sort((a, b) => a.name.localeCompare(b.name));
}

export async function getTagCounts(): Promise<{ name: string; slug: string; count: number }[]> {
  const all = await getAllPosts();
  const map = new Map<string, { name: string; count: number }>();
  for (const p of all) {
    for (const tag of p.data.tags) {
      const slug = slugify(tag);
      const existing = map.get(slug);
      if (existing) existing.count += 1;
      else map.set(slug, { name: tag, count: 1 });
    }
  }
  return [...map.entries()]
    .map(([slug, v]) => ({ slug, ...v }))
    .sort((a, b) => a.name.localeCompare(b.name));
}

export async function getPostsByCategory(catSlug: string): Promise<Post[]> {
  const all = await getAllPosts();
  return all.filter((p) => p.data.categories.some((c) => slugify(c) === catSlug));
}

export async function getPostsByTag(tagSlug: string): Promise<Post[]> {
  const all = await getAllPosts();
  return all.filter((p) => p.data.tags.some((t) => slugify(t) === tagSlug));
}

export function formatDate(d: Date): string {
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}
