import React from 'react';
import { connect } from 'react-redux';

import TodoCard from './TodoCard';

const Main = ({ todos }) => (
  <div>
    <h2>Todos</h2>
    <ul>
      {todos.map(todo => <TodoCard key={todo.id} {...todo} />)}
    </ul>
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
