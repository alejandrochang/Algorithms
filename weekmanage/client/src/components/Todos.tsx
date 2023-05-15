import React from "react";
import { Box, List, ThemeIcon, Card, Title, Badge } from "@mantine/core";
import { CheckCircleFillIcon } from "@primer/octicons-react";
import AddTodo from "./AddTodo";
import DeleteTodo from "./DeleteTodo";
import { KeyedMutator } from "swr";
import "./Todos.css";

export const ENDPOINT = "http://localhost:4000";

const Todos = (props: { todos?: any[] | undefined; mutate: KeyedMutator<any>; navItem: string }) => {
  const { todos = [], mutate, navItem } = props;

  async function markTodoAsDone(id: number) {
    const updated = await fetch(`${ENDPOINT}/api/todos/${id}/done`, {
      method: "PATCH",
    }).then((r) => r.json());

    mutate(updated);
  }

  const keyword = navItem === 'completed' ? 'completed' : 'remaining';
  const title = `You have ${todos?.length} tasks ${keyword}`;
  const newKeyword = todos.length > 1 ? 'Todos' : 'Todo';
  const newTitle = `${todos.length} ${newKeyword}`

  return (
    <div className="container">
      <Box w="800px">
        <Card
          sx={{ justifyContent: "space-between", alignItems: "center" }}
          shadow="sm"
          radius="md"
          p={5}
          pl={20}
          pr={20}
          maw="fit-content"
          withBorder
          display="flex"
          c="#ffffff"
          bg="#B8A9C9"
        >
            {newTitle}
        </Card>
        <List spacing="xs" size="sm" mb={12} center>
          {todos?.map((todo) => {
            return (
              <Card
                sx={{ justifyContent: "space-between", alignItems: "center" }}
                shadow="sm"
                radius="md"
                p={5}
                pl={20}
                pr={20}
                miw="300px"
                key={`todo_list__${todo.id}`}
                withBorder
                display="flex"
              >
                <List.Item
                  onClick={() => markTodoAsDone(todo.id)}
                  icon={
                    todo.done ? (
                      <ThemeIcon color="teal" size={24} radius="xl">
                        <CheckCircleFillIcon size={20} />
                      </ThemeIcon>
                    ) : (
                      <ThemeIcon color="gray" size={24} radius="xl">
                        <CheckCircleFillIcon size={20} />
                      </ThemeIcon>
                    )
                  }
                >
                  {todo.title}
                </List.Item>
                <DeleteTodo mutate={mutate} id={todo.id}/>
              </Card>
            );
          })}
        </List>
        <AddTodo mutate={mutate} />
      </Box>
    </div>
  );
}

export default Todos;
