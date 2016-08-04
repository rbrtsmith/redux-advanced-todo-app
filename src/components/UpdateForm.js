import React from 'react';

class UpdateForm extends React.Component {
  componentDidMount() {
    this.refs.input.focus();
  }

  render() {
    const { fieldValue, fieldName, fieldType, selectOptions, toggleUpdateFormVisibility, updateTodoField, id } = this.props;
    return (
      <form onSubmit={e => toggleUpdateFormVisibility(e, fieldName)}>
        {
          fieldType === 'text' ?
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
          :
            <select
              defaultValue={fieldValue}
              ref="input"
              onChange={e => {
                updateTodoField({
                  id,
                  fieldName,
                  fieldValue: this.refs.input.value
                });
                toggleUpdateFormVisibility(e, fieldName);
              }}
            >
              {selectOptions.map((option, i) => <option key={i} value={option}>{option}</option>)}
            </select>
        }
        <input type="submit" hidden />
      </form>
    );
  }
}


UpdateForm.propTypes = {
  fieldValue: React.PropTypes.string.isRequired,
  fieldName: React.PropTypes.string.isRequired,
  fieldType: React.PropTypes.string.isRequired,
  toggleUpdateFormVisibility: React.PropTypes.func.isRequired,
  updateTodoField: React.PropTypes.func.isRequired,
  id: React.PropTypes.string.isRequired,
  selectOptions: React.PropTypes.array
};

export default UpdateForm;
