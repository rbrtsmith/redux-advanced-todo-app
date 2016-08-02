
export const addTodo = (title, description, priority = 'medium') => ({
  type: 'ADD_TODO',
  id: +new Date(),
  title,
  description,
  priority
});
