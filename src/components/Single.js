import React from 'react';
import { connect } from 'react-redux';


const Single = ({ todos, params }) => {
  const todo = todos.filter(todo =>
    todo.id === parseInt(params.todoId, 10))[0];
  return (
    <div>
      <h1>{todo.title}</h1>
    </div>
  );
};

const mapStateToProps = state => ({
  todos: state.todos
});

export default connect(
  mapStateToProps
)(Single);
