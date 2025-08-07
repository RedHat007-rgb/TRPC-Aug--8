"use client";

import { useEffect, useState } from "react";
import { trpc } from "../utils/trpc";
import { TodoType } from "@repo/shared";

export default function Home() {
  const [todos, setTodos] = useState<TodoType[]>([]);
  const allTodos = trpc.todoRouter.getAllTodo.useQuery();
  useEffect(() => {
    setTodos((prev: any) => [...prev, allTodos.data]);
  }, [allTodos.data]);

  return <>{JSON.stringify(todos)}</>;
}
