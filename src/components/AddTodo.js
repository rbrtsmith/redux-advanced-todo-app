import React from 'react';

import { Link, browserHistory } from 'react-router';

const AddTodo = ({ publishNewTodo }) => {
  let title;
  let description;
  let priority;
  return (
    <div className="o-site-wrap o-site-wrap--padding">
      <div className="c-card">
        <h2>Add new Todo</h2>
        <form
          className="u-push-bottom"
          onSubmit={e => {
            e.preventDefault();
            const payload = {
              id: `T${+new Date()}`,
              title: title.value,
              description: description.value,
            };
            if (priority.value) {
              payload.priority = priority.value;
            }
            publishNewTodo(payload);
            browserHistory.push('/');
          }}
        >
          <ul className="o-bare-list o-bare-list--spaced">
            <li className="o-bare-list__item">
              <label>
                <div>Title:</div>
                <input
                  type="text"
                  ref={node => { title = node; }}
                  name="title"
                  className="text-input"
                  required
                />
              </label>
            </li>
            <li className="o-bare-list__item">
              <label>
                <div>Description:</div>
                <input
                  type="text"
                  ref={node => { description = node; }}
                  name="description"
                  className="text-input"
                  required
                />
              </label>
            </li>
            <li className="o-bare-list__item">
              <label>
                <div>Priority:</div>
                <select defaultValue="low" ref={node => { priority = node; }}>
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
};

AddTodo.propTypes = {
  publishNewTodo: React.PropTypes.func.isRequired
};

export default AddTodo;
