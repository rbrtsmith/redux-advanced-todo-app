import React from 'react';

import { Link } from 'react-router';

import AddTodoPreview from './AddTodoPreview';

const AddTodo = ({ publishNewTodo, addTodoFormFieldValues, updateAddTodoFormFieldValue }) => {
  const { title, description, priority } = addTodoFormFieldValues;
  return (
    <div className="o-site-wrap o-site-wrap--padding">
      <h2>Add new Todo</h2>
      <div className="o-grid o-grid--matrix u-flush-bottom">
        <div className="o-grid__item u-1/2@sm">
          <div className="c-card">
            <form onSubmit={e => publishNewTodo(e, addTodoFormFieldValues)}>
              <ul className="o-bare-list o-bare-list--spaced">
                <li className="o-bare-list__item">
                  <label>
                    <div>Title:</div>
                    <input
                      type="text"
                      name="title"
                      value={title}
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
                      value={description}
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
                      name="priority"
                      value={priority}
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
          </div>
        </div>
        {title &&
          <div className="o-grid__item u-1/2@sm">
            <AddTodoPreview addTodoFormFieldValues={addTodoFormFieldValues} />
          </div>
        }
      </div>
      <Link to="/" className="c-btn c-btn--md c-btn--brand">
        &larr; Go back
      </Link>
    </div>
  );
};

AddTodo.propTypes = {
  publishNewTodo: React.PropTypes.func.isRequired,
  updateAddTodoFormFieldValue: React.PropTypes.func.isRequired,
  addTodoFormFieldValues: React.PropTypes.object.isRequired
};

export default AddTodo;
