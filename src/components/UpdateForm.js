import React from 'react';

const UpdateForm = ({ fieldValue, field, toggleUpdateFormVisibility, updateTodoTitle, todoId }) => {
  let input;
  const handleSubmit = e => {
    e.preventDefault();
    toggleUpdateFormVisibility({
      todoId,
      field
    });
  };
  const handleInputChange = () => {
    updateTodoTitle({
      id: todoId,
      title: input.value
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        ref={node => {
          input = node;
        }}
        value={fieldValue}
        onChange={handleInputChange}
      />
      <input type="submit" hidden />
    </form>
  );
};

UpdateForm.propTypes = {
  fieldValue: React.PropTypes.string.isRequired,
  field: React.PropTypes.string.isRequired,
  toggleUpdateFormVisibility: React.PropTypes.func.isRequired,
  updateTodoTitle: React.PropTypes.func.isRequired,
  todoId: React.PropTypes.string.isRequired
};

export default UpdateForm;
