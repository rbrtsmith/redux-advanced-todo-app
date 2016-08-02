import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import todos from './todos';
import updateForms from './updateForms';

export default combineReducers({
  todos,
  updateForms,
  routing: routerReducer
});
