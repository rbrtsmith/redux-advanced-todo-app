export default (todos, status) =>
  todos.filter(todo => todo.status === status);
