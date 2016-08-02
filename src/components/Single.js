import React from 'react';
import { browserHistory } from 'react-router';

import getTodo from '../utils/getTodo';

import UpdateFormContainer from './UpdateFormContainer';

const Single = ({ todos, params, removeTodo, updateForms, toggleUpdateFormVisibility }) => {
  const todo = getTodo(todos, params.todoId);
  const { title, description, status, priority } = todo;
  const onRemoveClick = () => {
    removeTodo({
      id: todo.id
    });
    browserHistory.push('/');
  };
  const onUpdateTitleClick = e => {
    e.preventDefault();
    toggleUpdateFormVisibility({
      todoId: todo.id,
      field: 'title'
    });
  };
  const Title = () => (
    <h2 className="contains-edit">
      {title}
      <a href="#" onClick={onUpdateTitleClick} className="contains-edit__link">
        Edit
      </a>
    </h2>
  );
  return (
    <div>
      {
        updateForms[todo.id] && updateForms[todo.id].title ?
          <UpdateFormContainer
            field="title"
            fieldValue={title}
            toggleUpdateFormVisibility={toggleUpdateFormVisibility}
            todoId={todo.id}
          />
        :
          <Title />
      }
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
  removeTodo: React.PropTypes.func.isRequired,
  toggleUpdateFormVisibility: React.PropTypes.func.isRequired,
  updateForms: React.PropTypes.object
};


export default Single;
