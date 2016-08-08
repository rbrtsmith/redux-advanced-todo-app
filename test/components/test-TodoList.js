import React from 'react';
import test from 'ava';
import { shallow } from 'enzyme';

import TodoList from '../../src/components/TodoList';
import TodoCard from '../../src/components/TodoCard';

test('It render the correct number of <TodoCard /> components', t => {
  const todos = [
    {
      title: 'foo',
      id: 'T1',
      priority: 'high'
    },
    {
      title: 'bar',
      id: 'T2',
      priority: 'low'
    }
  ];
  const $ = shallow(<TodoList todos={todos} />);

  const expected = 2;
  const actual = $.find(TodoCard).length;

  t.deepEqual(actual, expected);
});

