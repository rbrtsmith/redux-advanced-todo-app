import React from 'react';

const RemoveTodo = ({ removeTodo }) => (
  <button
    className="c-card__remove c-btn c-btn--remove"
    onClick={removeTodo}
  >
    ✖
  </button>
);

RemoveTodo.propTypes = {
  removeTodo: React.PropTypes.func.isRequired
};

export default RemoveTodo;
