import { values } from '@repo/shared';
import z from 'zod';

const zStatus = z.enum(values as [string, ...string[]]);

export const zTodo = z.object({
  id: z.string().optional(),
  title: z.string(),
  description: z.string().optional(),
  status: zStatus,
});

export const zcreateTodo = z.object({
  title: z.string(),
  status: zStatus,
});

export const zUpdateTodo = z.object({
  id: z.string(),
  title: z.string().optional(),
  description: z.string().optional(),
  status: zStatus.optional(),
});

export type TodoType = z.infer<typeof zTodo>;
