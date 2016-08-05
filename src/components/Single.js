import React from 'react';
import { Link } from 'react-router';
import moment from 'moment';

import getTodo from '../utils/getTodo';

import EditableFieldContainer from './EditableFieldContainer';
import RemoveTodoContainer from './RemoveTodoContainer';


const Single = ({ todos, params }) => {
  const todo = getTodo(todos, params.todoId);
  const { title, description, status, priority, id, dateAdded } = todo;
  return (
    <div className="o-site-wrap o-site-wrap--padding">
      <div className={`c-card c-card--${priority}`}>
        <EditableFieldContainer
          fieldName="title"
          fieldValue={title}
          fieldType="text"
          id={id}
        >
          <h2>
            {title}
          </h2>
        </EditableFieldContainer>
        {description &&
          <EditableFieldContainer
            fieldName="description"
            fieldValue={description}
            fieldType="text"
            id={id}
          >
            <p>{description}</p>
          </EditableFieldContainer>
        }
        <ul>
          <li>
            <EditableFieldContainer
              fieldName="status"
              fieldValue={status}
              fieldType="select"
              selectOptions={['todo', 'in progress', 'done']}
              id={id}
            >
              <strong>Status: </strong>{status}
            </EditableFieldContainer>
          </li>
          <li>
            <EditableFieldContainer
              fieldName="priority"
              fieldValue={priority}
              fieldType="select"
              selectOptions={['low', 'medium', 'high']}
              id={id}
            >
              <strong>Priority: </strong>{priority}
            </EditableFieldContainer>
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
  params: React.PropTypes.object.isRequired
};


export default Single;
