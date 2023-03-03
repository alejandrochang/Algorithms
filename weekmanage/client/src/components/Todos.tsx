import { Box, List, ThemeIcon, Card } from "@mantine/core";
import { CheckCircleFillIcon } from "@primer/octicons-react";
import React from "react";
import useSWR from "swr";
import "./App.css";
import AddTodo from "./components/AddTodo";

export const ENDPOINT = "http://localhost:4000";

const fetcher = (url) => fetch(`${ENDPOINT}/${url}`).then((r) => r.json());

function App() {
  const { data: todos, mutate } = useSWR("api/todos", fetcher);
  async function markTodoAsDone(id) {
    const updated = await fetch(`${ENDPOINT}/api/todos/${id}/done`, {
      method: "PATCH",
    }).then((r) => r.json());

    mutate(updated);
  }

  return (
    <div>
      <Box>
        <List spacing="xs" size="sm" mb={12} center>
          {todos?.map((todo) => {
            return (
              <Card
                shadow="sm"
                radius="md"
                p="xl"
                mb="20px"
                miw="300px"
                key={`todo_list__${todo.id}`}
                withBorder
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
              </Card>
            );
          })}
        </List>
        <AddTodo mutate={mutate} />
      </Box>
    </div>
  );
}

export default App;
