import test from 'ava';
import proxyquire from 'proxyquire';
import sinon from 'sinon';
import { jsdom } from 'jsdom';
import { createStore } from 'redux';

import rootReducer from '../src/reducers/index';
import todos from '../src/data/todos';
import updateForms from '../src/data/updateForms';
import addTodoFormFieldValues from '../src/data/addTodoFormFieldValues';

global.document = jsdom('<body></body>');
global.window = document.defaultView;
global.navigator = window.navigator;


test('It should call createStore passing in rootReducer and defaultState', t => {
  const stubbedCreateStore = sinon.stub();
  const stubbedSyncHistoryWithStore = sinon.stub();
  const store = proxyquire('../src/store', {
    redux: {
      createStore: stubbedCreateStore
    },
    'react-router-redux': {
      syncHistoryWithStore: stubbedSyncHistoryWithStore
    }
  }).default;

  const defaultState = {
    todos,
    updateForms,
    addTodoFormFieldValues
  };

  t.true(stubbedCreateStore.calledWith(rootReducer, defaultState));
});


test('It should call syncHistoryWithStore', t => {
  const stubbedCreateStore = sinon.stub();
  const stubbedSyncHistoryWithStore = sinon.stub();
  const store = proxyquire('../src/store', {

    'react-router-redux': {
      syncHistoryWithStore: stubbedSyncHistoryWithStore
    }
  }).default;


  const defaultState = {
    todos,
    updateForms,
    addTodoFormFieldValues
  };
  
  const argStore = createStore(rootReducer, defaultState);

  t.true(stubbedSyncHistoryWithStore.calledWith());
});
