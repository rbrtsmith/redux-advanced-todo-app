import test from 'ava';
import proxyquire from 'proxyquire';
import sinon from 'sinon';
import { jsdom } from 'jsdom';

global.document = jsdom('<body></body>');
global.window = document.defaultView;
global.navigator = window.navigator;

test('It should call createStore passing in 3 arguments', t => {
  const stubbedCreateStore = sinon.stub();
  const stubbedSyncHistoryWithStore = sinon.stub();
  const store = proxyquire('../src/store', {
    'redux': {
      createStore: stubbedCreateStore
    },
    'react-router-redux': {
      syncHistoryWithStore: stubbedSyncHistoryWithStore
    }
  }).default;

  t.plan(2);
  t.true(stubbedCreateStore.calledWith());
  t.true(stubbedSyncHistoryWithStore.calledWith());
});
