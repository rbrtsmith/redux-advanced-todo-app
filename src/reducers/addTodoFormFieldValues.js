const addTodoFormFieldValues = (state = {
  title: '',
  description: '',
  priority: ''
}, action) => {
  switch (action.type) {
    case 'UPDATE_ADD_TODO_FORM_FIELD_VALUE':
      return {
        ...state,
        [action.payload.field]: action.payload.value
      };
    default:
      return state;
  }
};

export default addTodoFormFieldValues;
