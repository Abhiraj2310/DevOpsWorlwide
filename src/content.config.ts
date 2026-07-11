import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(), description: z.string(), date: z.coerce.date(), author: z.string().default('DevOpsWorlwide Editorial'),
    tags: z.array(z.string()), category: z.string(), featured: z.boolean().default(false),
    heroImage: z.string().optional(), draft: z.boolean().default(false), readingTime: z.number().positive()
  })
});
export const collections = { blog };
