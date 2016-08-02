export default (todos, todoId) =>
  todos.filter(todo =>
    todo.id === parseInt(todoId, 10))[0];
