import React from 'react';
import TodoCard from './TodoCard';


const TodoList = ({ todos }) => (
  <ul className="o-bare-list o-bare-list--spaced">
    {todos.map(todo => <TodoCard key={todo.id} {...todo} />)}
  </ul>
);

TodoList.propTypes = {
  todos: React.PropTypes.array.isRequired
};

export default TodoList;
