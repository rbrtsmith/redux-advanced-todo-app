import test from 'ava';

import proxyquire from 'proxyquire';
import sinon from 'sinon';

import { routerReducer } from 'react-router-redux';

import todos from '../../src/reducers/todos';
import updateForms from '../../src/reducers/updateForms';

test('It should return single combined reducer', t => {
  const stubbedCombineReducers = sinon.stub();
  const index = proxyquire('../../src/reducers/index', {
    'redux': {
      combineReducers: stubbedCombineReducers
    }
  }).default;

  t.true(
    stubbedCombineReducers.calledWith({
      todos,
      updateForms,
      routing: routerReducer
    })
  );
});
