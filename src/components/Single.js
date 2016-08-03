import React from 'react';
import { browserHistory } from 'react-router';

import getTodo from '../utils/getTodo';

import EditableField from './EditableField';


const Single = ({ todos, params, removeTodo, updateForms, toggleUpdateFormVisibility }) => {
  const todo = getTodo(todos, params.todoId);
  const { title, description, status, priority, id } = todo;
  const onRemoveClick = () => {
    removeTodo({
      id
    });
    browserHistory.push('/');
  };
  const onUpdateFieldClick = (e, fieldName) => {
    e.preventDefault();
    toggleUpdateFormVisibility({
      todoId: id,
      fieldName
    });
  };
  return (
    <div className="o-site-wrap o-site-wrap--padding">
      <div className="c-card">
        <EditableField
          fieldName="title"
          fieldValue={title}
          onUpdateFieldClick={onUpdateFieldClick}
          id={id}
          updateForms={updateForms}
        >
          <h2>
            {title}
          </h2>
        </EditableField>
        {description &&
          <EditableField
            fieldName="description"
            fieldValue={description}
            onUpdateFieldClick={onUpdateFieldClick}
            id={id}
            updateForms={updateForms}
          >
            <p>{description}</p>
          </EditableField>
        }
        <ul>
          <li>
            <EditableField
              fieldName="status"
              fieldValue={status}
              onUpdateFieldClick={onUpdateFieldClick}
              id={id}
              updateForms={updateForms}
            >
              <strong>Status: </strong>{status}
            </EditableField>
          </li>
          <li>
            <EditableField
              fieldName="priority"
              fieldValue={priority}
              onUpdateFieldClick={onUpdateFieldClick}
              id={id}
              updateForms={updateForms}
            >
              <strong>Priority: </strong>{priority}
            </EditableField>
          </li>
        </ul>
        <button className="c-btn c-btn--md c-btn--brand" onClick={onRemoveClick}>
          Remove
        </button>
      </div>
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
