const createTodo = ({ id, title, description, priority = 'low' }) => ({
  id,
  title,
  description,
  priority
});

const removeTodo = (todo, { id }) => todo.id !== id;


const updateTodoField = (todo, { id, fieldName, fieldValue }) => {
  if (todo.id === id) {
    return {
      ...todo,
      [fieldName]: fieldValue
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
    case 'UPDATE_TODO_FIELD':
      return state.map(todo => updateTodoField(todo, action.payload));
    default:
      return state;
  }
};

export default todos;
