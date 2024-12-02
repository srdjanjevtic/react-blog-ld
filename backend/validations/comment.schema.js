import { z } from 'zod';

export const createCommentSchema = z.object({
  body: z.object({
    desc: z.string()
      .min(1, 'Comment cannot be empty')
      .max(1000, 'Comment cannot exceed 1000 characters')
  })
});

export const updateCommentSchema = z.object({
  body: z.object({
    desc: z.string()
      .min(1, 'Comment cannot be empty')
      .max(1000, 'Comment cannot exceed 1000 characters')
  }),
  params: z.object({
    id: z.string().min(1, 'Comment ID is required')
  })
});

export const deleteCommentSchema = z.object({
  params: z.object({
    id: z.string().min(1, 'Comment ID is required')
  })
});
