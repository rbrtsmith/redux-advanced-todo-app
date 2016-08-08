import React from 'react';
import test from 'ava';
import { shallow } from 'enzyme';
import { Link } from 'react-router';

import TodoCard from '../../src/components/TodoCard';
import RemoveTodoContainer from '../../src/components/RemoveTodoContainer';


test('It renders the todo title', t => {
  const props = {
    title: 'foo',
    id: 'T1',
    priority: 'high'
  };
  const $ = shallow(<TodoCard { ...props } />);

  const expected = true;
  const actual = $.contains(<strong>foo</strong>);

  t.deepEqual(actual, expected);
});


test('It renders a <RemoveTodoContainer /> component', t => {
  const props = {
    title: 'foo',
    id: 'T1',
    priority: 'high'
  };
  const $ = shallow(<TodoCard { ...props } />);

  const expected = 1;
  const actual = $.find(RemoveTodoContainer).length;

  t.deepEqual(actual, expected);
});


test('It add a className indicating the priority level', t => {
  const props = {
    title: 'foo',
    id: 'T1',
    priority: 'high'
  };
  const $ = shallow(<TodoCard { ...props } />);

  const expected = 1;
  const actual = $.find('.c-card--high').length;

  t.deepEqual(actual, expected);
});



test('It renders a <Link/> component that has the correct value in the \'to\' attribute', t => {
  const props = {
    title: 'foo',
    id: 'T1',
    priority: 'high'
  };
  const $ = shallow(<TodoCard { ...props } />);

  const expected = 1;
  const actual = $.find('Link[to="/single/T1"]').length;

  t.deepEqual(actual, expected);
});

