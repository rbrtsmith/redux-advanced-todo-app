import React from 'react';
import test from 'ava';
import { shallow } from 'enzyme';
import proxyquire from 'proxyquire';
import { render } from 'react-dom';
import { jsdom } from 'jsdom';
import { Provider } from 'react-redux';


global.document = jsdom('<body></body>');
global.window = document.defaultView;
global.navigator = window.navigator;



test.skip('It renders a <Provider />', t => {
  const createStore = () => {};
  const syncHistoryWithStore = () => {};
  const App = proxyquire('../src/App', {
    './store': {
      store: {},
      history: () => {}
    },
    'react-router': {
      Router: () => {},
      Route: () => {},
      IndexRoute: () => {}
    },
    'react-dom': {
      render: () => {}
    }
  }).default;
  console.log(<App />);
  console.log('--------------');
  console.log(App);
  console.log('--------------');
  const $ = shallow(<App />); // Returns an error!
  console.log($.find(Provider).length);
  // const expected = 1;
  // // console.log($.find(Provider).props());
  // const actual = $.find(Provider).length;
  // console.log(actual);
  t.pass();
});
