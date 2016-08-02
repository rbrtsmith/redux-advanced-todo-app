export default (todos, todoId) =>
  todos.filter(todo =>
    todo.id === todoId)[0];
