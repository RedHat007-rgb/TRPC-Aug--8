// import { values } from '@repo/shared';
import z from 'zod';

const zStatus = z.enum(['NOT_INTERESTED', 'COMPLETED', 'IN_PROGRESS']);

export const zTodo = z.object({
  id: z.string().optional(),
  title: z.string(),
  description: z.string().optional(),
  status: zStatus,
});

export type TodoType = z.infer<typeof zTodo>;
