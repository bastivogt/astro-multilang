// 1. Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content';
// 2. Define your collection(s)
const newsCollection = defineCollection({
    type: "content",
    schema: z.object({
        title: z.string(),
        excerpt: z.string(),
        date: z.date(),
        featured: z.boolean().default(false),
        published: z.boolean().default(true)
    })
});

const downloadCollection = defineCollection({
    type: "content",
    schema: z.object({
        title: z.string(),
        lang: z.string(),
        published: z.boolean().default(true)
    })
});
export const collections = {
  "news": newsCollection,
  "downloads": downloadCollection
};