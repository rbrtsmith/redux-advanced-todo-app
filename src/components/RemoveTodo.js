import React from 'react';

const RemoveTodo = ({ removeTodo }) => (
  <button
    className="c-card__remove c-btn c-btn--remove"
    onClick={e => removeTodo(e)}
  >
    ✖
  </button>
);

RemoveTodo.propTypes = {
  removeTodo: React.PropTypes.func.isRequired
};

export default RemoveTodo;
