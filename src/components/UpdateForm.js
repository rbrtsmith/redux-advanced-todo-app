import React from 'react';

class UpdateForm extends React.Component {
  componentDidMount() {
    this.refs.input.focus();
  }

  render() {
    const { fieldValue, fieldName, toggleUpdateFormVisibility, updateTodoField, id } = this.props;
    return (
      <form onSubmit={e => toggleUpdateFormVisibility(e, fieldName)}>
        <input
          type="text"
          className="text-input"
          ref="input"
          value={fieldValue}
          onChange={() => updateTodoField({
            id,
            fieldName,
            fieldValue: this.refs.input.value
          })}
          onBlur={e => toggleUpdateFormVisibility(e, fieldName)}
        />
        <input type="submit" hidden />
      </form>
    );
  }
}


UpdateForm.propTypes = {
  fieldValue: React.PropTypes.string.isRequired,
  fieldName: React.PropTypes.string.isRequired,
  toggleUpdateFormVisibility: React.PropTypes.func.isRequired,
  updateTodoField: React.PropTypes.func.isRequired,
  id: React.PropTypes.string.isRequired
};

export default UpdateForm;
