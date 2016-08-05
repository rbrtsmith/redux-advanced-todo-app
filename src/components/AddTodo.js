import React from 'react';

import { Link } from 'react-router';

const AddTodo = ({ publishNewTodo, addTodoFormFieldValues, updateAddTodoFormFieldValue }) => (
  <div className="o-site-wrap o-site-wrap--padding">
    <div className="c-card">
      <h2>Add new Todo</h2>
      <form
        className="u-push-bottom"
        onSubmit={e => publishNewTodo(e, addTodoFormFieldValues)}
      >
        <ul className="o-bare-list o-bare-list--spaced">
          <li className="o-bare-list__item">
            <label>
              <div>Title:</div>
              <input
                type="text"
                name="title"
                value={addTodoFormFieldValues.title}
                className="text-input"
                onChange={(e) => updateAddTodoFormFieldValue('title', e.target.value)}
                required
              />
            </label>
          </li>
          <li className="o-bare-list__item">
            <label>
              <div>Description:</div>
              <input
                type="text"
                name="description"
                value={addTodoFormFieldValues.description}
                className="text-input"
                onChange={(e) => updateAddTodoFormFieldValue('description', e.target.value)}
                required
              />
            </label>
          </li>
          <li className="o-bare-list__item">
            <label>
              <div>Priority:</div>
              <select
                value={addTodoFormFieldValues.priority}
                onChange={(e) => updateAddTodoFormFieldValue('priority', e.target.value)}
              >
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
            </label>
          </li>
          <li className="o-bare-list__item">
            <button type="submit" className="c-btn c-btn--md c-btn--brand">
              Publish
            </button>
          </li>
        </ul>
      </form>
      <Link to="/" className="c-btn c-btn--md c-btn--brand">
        &larr; Go back
      </Link>
    </div>
  </div>
);

AddTodo.propTypes = {
  publishNewTodo: React.PropTypes.func.isRequired,
  updateAddTodoFormFieldValue: React.PropTypes.func.isRequired,
  addTodoFormFieldValues: React.PropTypes.object.isRequired
};

export default AddTodo;
