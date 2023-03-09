import { Todos } from '../types'

export const parseTodos = (todos: Todos[]) => {
  if (!todos) return [];

  const completeTodos = todos.filter(({ done }) => done);
  const incompleteTodos = todos.filter(({ done }) => !done);
  return [incompleteTodos, completeTodos];
}
