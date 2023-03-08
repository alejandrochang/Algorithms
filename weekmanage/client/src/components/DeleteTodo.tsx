import React from "react";
import { Button, Group } from "@mantine/core";
import { ENDPOINT } from "./Todos";
import { KeyedMutator } from "swr";
import { IconTrash } from "@tabler/icons-react";

// eslint-disable-next-line react/prop-types
function DeleteTodo({ mutate, id }: { id: string, mutate: KeyedMutator<any> }) {

  async function deleteTodo(id: string) {
    const updated = await fetch(`${ENDPOINT}/api/todos/${id}/delete`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((r) => r.json());

    mutate(updated);
  }

  return (
    <div onClick={() => deleteTodo(id)}>
      <Group position="right">
        <Button bg='red' p={8}>
            <IconTrash size="0.9rem" stroke={1.5} />
        </Button>
      </Group>
    </div>
  );
}

export default DeleteTodo;
