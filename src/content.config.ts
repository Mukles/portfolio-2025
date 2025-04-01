import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const projects = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    role: z.array(z.string()),
    design: z.string(),
    image: z.string(),
    imageAlt: z.string(),
    tags: z.array(z.string()),
    date: z.coerce.date(),
  }),
});

export const collections = { projects };
