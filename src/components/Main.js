import React from 'react';

import { Link } from 'react-router';

import TodoList from './TodoList';

import filterTodosByStatus from '../utils/filterTodosByStatus';
import sortByPriority from '../utils/sortByPriority';

const Main = ({ todos }) => (
  <div className="o-site-wrap o-site-wrap--padding">
    <div className="o-grid o-grid--gutter-lg u-push-bottom">
      <div className="o-grid__item u-1/3@sm">
        <h3>Todo</h3>
        <TodoList
          todos={sortByPriority(filterTodosByStatus(todos, 'todo'))}
        />
      </div>
      <div className="o-grid__item u-1/3@sm">
        <h3>In progress</h3>
        <TodoList
          todos={sortByPriority(filterTodosByStatus(todos, 'in progress'))}
        />
      </div>
      <div className="o-grid__item u-1/3@sm">
        <h3>Done</h3>
        <TodoList
          todos={sortByPriority(filterTodosByStatus(todos, 'done'))}
        />
      </div>
    </div>
    <Link to="/add-todo" className="c-btn c-btn--md c-btn--brand">
      Add todo
    </Link>
  </div>
);

Main.propTypes = {
  todos: React.PropTypes.array.isRequired
};

export default Main;
