import React from 'react';
import { Link } from 'react-router';
import moment from 'moment';

import getTodo from '../utils/getTodo';

import EditableField from './EditableField';
import RemoveTodoContainer from './RemoveTodoContainer';


const Single = ({ todos, params, updateForms, toggleUpdateFormVisibility }) => {
  const todo = getTodo(todos, params.todoId);
  const { title, description, status, priority, id, dateAdded } = todo;
  const onUpdateFieldClick = (e, fieldName) => {
    e.preventDefault();
    toggleUpdateFormVisibility({
      todoId: id,
      fieldName
    });
  };
  return (
    <div className="o-site-wrap o-site-wrap--padding">
      <div className={`c-card c-card--${priority}`}>
        <EditableField
          fieldName="title"
          fieldValue={title}
          fieldType="text"
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
            fieldType="text"
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
              fieldType="select"
              selectOptions={['todo', 'in progress', 'done']}
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
              fieldType="select"
              selectOptions={['low', 'medium', 'high']}
              onUpdateFieldClick={onUpdateFieldClick}
              id={id}
              updateForms={updateForms}
            >
              <strong>Priority: </strong>{priority}
            </EditableField>
          </li>
          <li>
            <strong>Date added: </strong>{moment(dateAdded).format('MMMM Do YYYY, hh:mm')}
          </li>
        </ul>
        <Link to="/" className="c-btn c-btn--md c-btn--brand">
          &larr; Go back
        </Link>
        <RemoveTodoContainer id={id} />
      </div>
    </div>
  );
};

Single.propTypes = {
  todos: React.PropTypes.array.isRequired,
  params: React.PropTypes.object.isRequired,
  toggleUpdateFormVisibility: React.PropTypes.func.isRequired,
  updateForms: React.PropTypes.object
};


export default Single;
