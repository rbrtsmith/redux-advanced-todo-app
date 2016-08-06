import React from 'react';
import moment from 'moment';

const AddTodoPreview = ({ addTodoFormFieldValues }) => {
  const { title, description, priority } = addTodoFormFieldValues;
  return (
    <div>
      {
        title &&
          <div className={`c-card c-card--${priority}`}>
            <h2>
              {title}
            </h2>
            {
              description &&
                <p>
                  {description}
                </p>
            }
            <ul className="o-bare-list">
              <li className="o-bare-list__item">
                <strong>Priority:</strong> {priority}
              </li>
              <li className="o-bare-list__item">
                <strong>Status:</strong> Todo
              </li>
              <li className="o-bare-list__item">
                <strong>Date added:</strong> {moment(+ new Date()).format('MMMM Do YYYY, hh:mm')}
              </li>
            </ul>
          </div>
      }
    </div>
  );
};

AddTodoPreview.propTypes = {
  addTodoFormFieldValues: React.PropTypes.object.isRequired
};

export default AddTodoPreview;
