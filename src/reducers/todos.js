const createTodo = action => ({
  id: action.id,
  title: action.title,
  description: action.description,
  priority: action.priority
});

const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        createTodo(action)
      ];
    default:
      return state;
  }
};

export default todos;
