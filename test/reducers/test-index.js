import test from 'ava';

import proxyquire from 'proxyquire';
import sinon from 'sinon';
import todos from '../../src/reducers/todos';
import { routerReducer } from 'react-router-redux';

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
      routing: routerReducer
    })
  );
});
