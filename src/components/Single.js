import React from 'react';
import { browserHistory } from 'react-router';

import getTodo from '../utils/getTodo';


const Single = ({ todos, params, removeTodo }) => {
  const todo = getTodo(todos, params.todoId);
  const { title, description, status, priority } = todo;
  const onRemoveClick = () => {
    removeTodo({
      id: todo.id
    });
    browserHistory.push('/');
  };
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
      <button onClick={onRemoveClick}>
        Remove
      </button>
    </div>
  );
};

Single.propTypes = {
  todos: React.PropTypes.array.isRequired,
  params: React.PropTypes.object.isRequired,
  removeTodo: React.PropTypes.func.isRequired
};


export default Single;
