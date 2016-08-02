const createTodo = ({ id, title, description, priority }) => ({
  id,
  title,
  description,
  priority
});

const removeTodo = (todo, { id }) => todo.id !== id;

const updateTodoStatus = (todo, { id, status }) => {
  if (todo.id === id) {
    return {
      ...todo,
      status
    };
  }
  return todo;
};

const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        createTodo(action.payload)
      ];
    case 'REMOVE_TODO':
      return state.filter(todo => removeTodo(todo, action.payload));
    case 'UPDATE_TODO_STATUS':
      return state.map(todo => updateTodoStatus(todo, action.payload));
    default:
      return state;
  }
};

export default todos;
