const toggleVisibility = (state, { todoId, field }) => ({
  ...state[todoId],
  [field]: state[todoId] && state[todoId][field] ? false : true
});

const updateForms = (state = {}, action) => {
  switch (action.type) {
    case 'TOGGLE_UPDATE_FORM_VISIBILITY':
      return {
        ...state,
        [action.payload.todoId]: toggleVisibility(state, action.payload)
      };
    default:
      return state;
  }
};

export default updateForms;
