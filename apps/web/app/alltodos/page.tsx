"use client";

import { TodoType } from "@repo/shared";
import React, { useEffect, useState } from "react";
import { trpc } from "../../utils/trpc";

const AllTodos = () => {
  const [todos, setTodos] = useState<TodoType[]>([]);
  const result = trpc.todoRouter.getAllTodo.useQuery();

  useEffect(() => {}, [todos.length]);

  return <div>{JSON.stringify(result.data)}</div>;
};

export default AllTodos;
