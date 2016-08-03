import React from 'react';
import { Link } from 'react-router';

const TodoCard = ({ title, id, priority }) => (
  <li className="o-bare-list__item">
    <div className={`c-card c-card--${priority}`}>
      <Link to={`/single/${id}`} >
        <strong>{title}</strong>
      </Link>
    </div>
  </li>
);

TodoCard.propTypes = {
  title: React.PropTypes.string.isRequired,
  id: React.PropTypes.string.isRequired,
  priority: React.PropTypes.string.isRequired
};

export default TodoCard;
