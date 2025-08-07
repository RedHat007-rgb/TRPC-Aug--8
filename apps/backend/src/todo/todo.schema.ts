import { Status } from '@repo/shared';
import z from 'zod';

const zStatus = z.enum([
  Status.COMPLETED,
  Status.IN_PROGRESS,
  Status.NOT_INTERESTED,
] as const);

export const zTodo = z.object({
  id: z.string().optional(),
  title: z.string(),
  description: z.string(),
  status: zStatus,
});

export type Todo = z.infer<typeof zTodo>;
