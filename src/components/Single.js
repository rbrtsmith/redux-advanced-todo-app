import React from 'react';
import { connect } from 'react-redux';

import getTodo from '../utils/getTodo';

const Single = ({ todos, params }) => {
  const todo = getTodo(todos, params.todoId);
  const { title, description, status, priority } = todo;
  return (
    <div>
      <h1>{title}</h1>
      {description && <p>{description}</p>}
      <ul>
        <li>
          <strong>Status: </strong>{status}
        </li>
        <li>
          <strong>priority: </strong>{priority}
        </li>
      </ul>
    </div>
  );
};

Single.propTypes = {
  todos: React.PropTypes.array.isRequired,
  params: React.PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  todos: state.todos
});

export default connect(
  mapStateToProps
)(Single);
