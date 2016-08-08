import React from 'react';
import test from 'ava';
import { shallow } from 'enzyme';

import Main from '../../src/components/Main';
import TodoList from '../../src/components/TodoList';

test('It renders three <TodoList /> components', t => {
  const $ = shallow(<Main todos={[{}]} />);

  const expected = 3;
  const actual = $.find(TodoList).length;

  t.deepEqual(actual, expected);
});

test('It renders zero <TodoList /> components when the todolist length is zero', t => {
  const $ = shallow(<Main todos={[]} />);

  const expected = 0;
  const actual = $.find(TodoList).length;

  t.deepEqual(actual, expected);
});
