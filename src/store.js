import { createStore } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

import rootReducer from './reducers/index';

import todos from './data/todos';
import updateForms from './data/updateForms';
import addTodoFormFieldValues from './data/addTodoFormFieldValues';

const defaultState = {
  todos,
  updateForms,
  addTodoFormFieldValues
};


export const store = createStore(rootReducer, defaultState, window.devToolsExtension && window.devToolsExtension());

export const history = syncHistoryWithStore(browserHistory, store);
