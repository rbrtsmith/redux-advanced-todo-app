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

const updateTodoTitle = (todo, { id, title }) => {
  if (todo.id === id) {
    return {
      ...todo,
      title
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
    case 'UPDATE_TODO_TITLE':
      return state.map(todo => updateTodoTitle(todo, action.payload));
    default:
      return state;
  }
};

export default todos;
