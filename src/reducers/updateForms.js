const toggleVisibility = (state, { todoId, fieldName }) => ({
  ...state[todoId],
  [fieldName]: !(state[todoId] && state[todoId][fieldName])
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
