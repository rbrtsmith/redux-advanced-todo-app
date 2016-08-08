import React from 'react';
import { Link } from 'react-router';

import RemoveTodoContainer from './RemoveTodoContainer';

const TodoCard = ({ title, id, priority }) => (
  <li className="o-bare-list__item c-tile">
    <Link to={`/single/${id}`} >
      <div className={`c-card c-card--${priority} c-tile__inner`}>
        <div className="o-flag u-fill-height">
          <div className="o-flag__body">
            <strong>{title}</strong>
            <RemoveTodoContainer id={id} />
          </div>
        </div>
      </div>
    </Link>
  </li>
);

TodoCard.propTypes = {
  title: React.PropTypes.string.isRequired,
  id: React.PropTypes.string.isRequired,
  priority: React.PropTypes.string.isRequired
};

export default TodoCard;
