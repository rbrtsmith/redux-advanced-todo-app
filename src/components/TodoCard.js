import React from 'react';
import { Link } from 'react-router';

const TodoCard = ({ title, id }) => (
  <li>
    <Link to={`/single/${id}`} >
      <strong>{title}</strong>
    </Link>
  </li>
);

export default TodoCard;
