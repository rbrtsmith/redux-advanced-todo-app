const addTodoFormFieldValues = (state = {
  title: '',
  description: '',
  priority: 'low'
}, action) => {
  switch (action.type) {
    case 'UPDATE_ADD_TODO_FORM_FIELD_VALUE':
      return {
        ...state,
        [action.payload.field]: action.payload.value
      };
    case 'RESET_ADD_TODO_FORM_FIELD_VALUE':
      return {
        title: '',
        description: '',
        priority: 'low'
      };
    default:
      return state;
  }
};

export default addTodoFormFieldValues;
