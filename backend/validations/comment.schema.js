import { z } from 'zod';

export const createCommentSchema = z.object({
  body: z.object({
    content: z.string()
      .min(1, 'Comment content cannot be empty')
      .max(1000, 'Comment cannot exceed 1000 characters'),
    postId: z.string().min(1, 'Post ID is required'),
  })
});

export const updateCommentSchema = z.object({
  body: z.object({
    content: z.string()
      .min(1, 'Comment content cannot be empty')
      .max(1000, 'Comment cannot exceed 1000 characters'),
  }),
  params: z.object({
    id: z.string().min(1, 'Comment ID is required')
  })
});
