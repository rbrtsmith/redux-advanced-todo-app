import React from 'react';
import { Link } from 'react-router';

const TodoCard = ({ title, id }) => (
  <li className="o-grid__item u-1/4">
    <div className="c-card">
      <Link to={`/single/${id}`} >
        <strong>{title}</strong>
      </Link>
    </div>
  </li>
);

TodoCard.propTypes = {
  title: React.PropTypes.string.isRequired,
  id: React.PropTypes.string.isRequired
};

export default TodoCard;
