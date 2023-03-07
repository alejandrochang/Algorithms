import React from "react";
import { Box, List, ThemeIcon, Card, Title} from "@mantine/core";
import { CheckCircleFillIcon } from "@primer/octicons-react";
import AddTodo from "./AddTodo";
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

  return (
    <div className="container">
      <Box w="800px">
        <Title order={4} mb={20} color="blue.5">
          {title}
        </Title>
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

export default Todos;
