import { Box, List, ThemeIcon, Card, Title} from "@mantine/core";
import { CheckCircleFillIcon } from "@primer/octicons-react";
import React from "react";
import AddTodo from "./AddTodo";
import "./Todos.css";

export const ENDPOINT = "http://localhost:4000";

const sortTodos = (todos) => {
  if (!todos) return [];
  return todos.sort((a, b) => a.done - b.done);
};

const Todos = (props) => {
  // eslint-disable-next-line react/prop-types
  const { todos = [], mutate } = props;
  async function markTodoAsDone(id) {
    const updated = await fetch(`${ENDPOINT}/api/todos/${id}/done`, {
      method: "PATCH",
    }).then((r) => r.json());

    mutate(updated);
  }

  return (
    <div className="container">
      <Box>
        <Title order={4} mb={20} color="blue.5">
          You have {todos?.length} tasks remaining
        </Title>
        <List spacing="xs" size="sm" mb={12} center>
          {sortTodos(todos)?.map((todo) => {
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
