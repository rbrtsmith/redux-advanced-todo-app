import React from 'react';
import TodoCard from './TodoCard';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const TodoList = ({ todos }) => (
  <ReactCSSTransitionGroup
    transitionName="c-tile-"
    transitionEnterTimeout={300}
    transitionLeaveTimeout={300}
    component="ul"
    className="o-bare-list o-bare-list--spaced"
  >
  {todos.map(todo => (
    <TodoCard key={todo.id} {...todo} />
  ))}
  </ReactCSSTransitionGroup>
);

TodoList.propTypes = {
  todos: React.PropTypes.array.isRequired
};

export default TodoList;
