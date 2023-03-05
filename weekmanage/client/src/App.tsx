import { MantineProvider } from "@mantine/core";
import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Todos from "./components/Todos";
import useSWR, { KeyedMutator } from "swr";
import { parseTodos } from './utils/index';

import './App.css';

export const ENDPOINT = "http://localhost:4000";
const fetcher = (url: string) => fetch(`${ENDPOINT}/${url}`).then((r) => r.json());

const renderActiveChild = (child: string, todos: any[], mutate: KeyedMutator<any>) => {
  switch(child) {
    // case child === 'completed':
    //   return<Todos todos={todos} mutate={mutate} />
    default:
      return<Todos todos={todos} mutate={mutate} />
  }
}

function App() {
  const { data, mutate } = useSWR("api/todos", fetcher);
  const [todos, setTodos] = useState(data);
  const [activeNavChild, setActiveNavChild] = useState('todos');

  useEffect(() => {
    setTodos(data);
  }, [data]);
  
  const [incompleteTodos, completeTodos] = parseTodos(todos);

  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Navigation
        incompleteCount={incompleteTodos?.length}
        completeCount={completeTodos?.length}
        setActiveNavChild={setActiveNavChild}
      />
      {renderActiveChild(activeNavChild, todos, mutate)}
    </MantineProvider>
  );
}

export default App
