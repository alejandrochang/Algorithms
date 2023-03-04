export const parseTodos = (todos) => {
  if (!todos) return [];

  const completeTodos = todos.filter(({ done }) => done);
  const incompleteTodos = todos.filter(({ done }) => !done);
  return [incompleteTodos, completeTodos];
}