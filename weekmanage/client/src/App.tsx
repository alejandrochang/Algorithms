import { MantineProvider } from "@mantine/core";
import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Todos from "./components/Todos";
import useSWR, { KeyedMutator } from "swr";
import { parseTodos } from './utils/index';
import { Todos as TodosType } from './types';

import './App.css';

export const ENDPOINT = "http://localhost:4000";
const fetcher = (url: string) => fetch(`${ENDPOINT}/${url}`).then((r) => r.json());

const renderActiveChild = (child: string, todos: TodosType[], mutate: KeyedMutator<any>) => {
  return<Todos todos={todos} mutate={mutate} navItem={child} />
}

function App() {
  const { data, mutate } = useSWR("api/todos", fetcher);
  const [todos, setTodos] = useState(data);
  const [activeNavChild, setActiveNavChild] = useState('todos');

  useEffect(() => {
    setTodos(data);
  }, [data]);
  
  const [incompleteTodos, completeTodos] = parseTodos(todos);
  const currentTodos = activeNavChild === 'todos' ? incompleteTodos : completeTodos;

  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Navigation
        incompleteCount={incompleteTodos?.length}
        completeCount={completeTodos?.length}
        setActiveNavChild={setActiveNavChild}
      />
      {renderActiveChild(activeNavChild, currentTodos, mutate)}
    </MantineProvider>
  );
}

export default App
