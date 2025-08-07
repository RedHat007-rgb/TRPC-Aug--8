import { initTRPC } from "@trpc/server";
import { z } from "zod";

const t = initTRPC.create();
const publicProcedure = t.procedure;

const appRouter = t.router({
  todoRouter: t.router({
    createTodo: publicProcedure
      .input(
        z.object({
          id: z.string().optional(),
          title: z.string(),
          description: z.string().optional(),
          status: z.enum(["NOT_INTERESTED", "COMPLETED", "IN_PROGRESS"]),
        })
      )
      .mutation(async () => "PLACEHOLDER_DO_NOT_REMOVE" as any),
  }),
});
export type AppRouter = typeof appRouter;
