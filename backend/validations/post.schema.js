import { z } from 'zod';

export const createPostSchema = z.object({
  body: z.object({
    title: z.string()
      .min(3, 'Title must be at least 3 characters long')
      .max(100, 'Title cannot exceed 100 characters'),
    content: z.string()
      .min(10, 'Content must be at least 10 characters long'),
    image: z.string().url('Invalid image URL').optional(),
    tags: z.array(z.string()).optional(),
  })
});

export const updatePostSchema = z.object({
  body: z.object({
    title: z.string()
      .min(3, 'Title must be at least 3 characters long')
      .max(100, 'Title cannot exceed 100 characters')
      .optional(),
    content: z.string()
      .min(10, 'Content must be at least 10 characters long')
      .optional(),
    image: z.string().url('Invalid image URL').optional(),
    tags: z.array(z.string()).optional(),
  }),
  params: z.object({
    id: z.string().min(1, 'Post ID is required')
  })
});
