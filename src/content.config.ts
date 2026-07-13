import { defineCollection, z } from 'astro:content';

const correctBrand = (value: string) => value.replaceAll('DevOpsWorlwide', 'DevOpsWorldwide');

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string().transform(correctBrand), description: z.string().transform(correctBrand), date: z.coerce.date(), author: z.string().default('DevOpsWorldwide Editorial').transform(correctBrand),
    tags: z.array(z.string().transform(correctBrand)), category: z.string().transform(correctBrand), featured: z.boolean().default(false),
    heroImage: z.string().optional(), draft: z.boolean().default(false), readingTime: z.number().positive()
  })
});
export const collections = { blog };
