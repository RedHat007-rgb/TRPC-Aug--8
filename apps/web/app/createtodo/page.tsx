"use client";
import { Status } from "@repo/shared";
import React, { useState } from "react";

import { trpc } from "../../utils/trpc";

const CreateTodo = () => {
  const [title, setTitle] = useState<string>("");
  const [status, setStatus] = useState<Status>(Status.NOT_INTERESTED);
  const [error, setError] = useState<string>("");

  const createTodo = trpc.todoRouter.createTodo.useMutation();
  const onSubmitHandler = async () => {
    console.log("reached here");
    console.log(`title:${title}`);
    console.log(`status:${status}`);
    if (!title || !status) {
      setError("Please dont leave fields empty");
      return;
    }
    const newTodo = {
      title,
      status,
    };
    const data = await createTodo.mutateAsync(newTodo);
    console.log(data);
    console.log(createTodo);
  };

  return (
    <div>
      <input onChange={(e) => setTitle(e.target.value)} placeholder="title" />
      <select
        value={status}
        onChange={(e) => setStatus(e.target.value as Status)}
      >
        <option>Select Status</option>
        <option value={Status.NOT_INTERESTED}>not interested</option>
        <option value={Status.IN_PROGRESS}>in progress</option>
        <option value={Status.COMPLETED}>completed</option>
      </select>
      <button onClick={onSubmitHandler}>Submit</button>
      {error}
    </div>
  );
};

export default CreateTodo;
