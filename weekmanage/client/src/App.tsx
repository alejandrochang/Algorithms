import { MantineProvider } from "@mantine/core";
import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Todos from "./components/Todos";
import useSWR from "swr";
import './App.css';

export const ENDPOINT = "http://localhost:4000";
const fetcher = (url) => fetch(`${ENDPOINT}/${url}`).then((r) => r.json());

function App() {
  const { data, mutate } = useSWR("api/todos", fetcher);
  const [todos, setTodos] = useState(data);

  useEffect(() => {
    setTodos(data);
  }, [data]);
  
  const todosLength = todos?.length;

  console.log('plop', { todos })

  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Navigation todosLength={todosLength} />
      <Todos todos={todos} mutate={mutate} />
    </MantineProvider>
  );
}

export default App
