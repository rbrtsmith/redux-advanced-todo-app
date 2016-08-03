import React from 'react';
import { connect } from 'react-redux';

import TodoList from './TodoList';

import filterTodosByStatus from '../utils/filterTodosByStatus';

const Main = ({ todos }) => (
  <div className="o-site-wrap o-site-wrap--padding">
    <h2>Todos</h2>
    <div className="o-grid o-grid--gutter-lg">
      <div className="o-grid__item u-1/3">
        <h3>Todo</h3>
        <TodoList
          todos={filterTodosByStatus(todos, 'todo')}
        />
      </div>
      <div className="o-grid__item u-1/3">
        <h3>In progress</h3>
        <TodoList
          todos={filterTodosByStatus(todos, 'in progress')}
        />
      </div>
      <div className="o-grid__item u-1/3">
        <h3>Done</h3>
        <TodoList
          todos={filterTodosByStatus(todos, 'done')}
        />
      </div>
    </div>
  </div>
);

Main.propTypes = {
  todos: React.PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  todos: state.todos
});

export default connect(
  mapStateToProps
)(Main);
