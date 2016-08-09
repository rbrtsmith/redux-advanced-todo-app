import React from 'react';
import test from 'ava';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import { store, history } from '../../src/store'; 
import { Router, Route, IndexRoute } from 'react-router';


import Routing from '../../src/components/Routing';


test('It renders a <Provider /> component and passes in the store', t => {
  t.plan(2);

  const $ = shallow(<Routing />);
  const firstExpected = 1;
  const firstActual = $.find(Provider).length;
  t.deepEqual(firstExpected, firstActual);

  const secondExpected = store;
  const secondActual = $.find(Provider).props().store;
  t.deepEqual(secondActual, secondExpected);
});


test('It renders a <Router /> component and passes in the history', t => {
  t.plan(2);

  const $ = shallow(<Routing />);
  const firstExpected = 1;
  const firstActual = $.find(Router).length;
  t.deepEqual(firstExpected, firstActual);

  const secondExpected = history;
  const secondActual = $.find(Router).props().history;
  t.deepEqual(secondActual, secondExpected);
});
