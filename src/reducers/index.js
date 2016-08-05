import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import todos from './todos';
import updateForms from './updateForms';
import addTodoFormFieldValues from './addTodoFormFieldValues';

export default combineReducers({
  todos,
  updateForms,
  addTodoFormFieldValues,
  routing: routerReducer
});
