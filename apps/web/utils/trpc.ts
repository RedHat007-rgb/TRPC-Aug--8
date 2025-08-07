"use client";

import { AppRouter } from "@repo/trpc-config/AppRouter";
import { createTRPCReact } from "@trpc/react-query";

export const trpc = createTRPCReact<AppRouter>();
