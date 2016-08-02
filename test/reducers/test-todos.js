import test from 'ava';
import deepFreeze from 'deep-freeze';

import todos from '../../src/reducers/todos';

test('It should return a new state with the added todo', t => {
  const stateBefore = [{}];
  const action = {
    type: 'ADD_TODO',
    id: 1,
    title: 'Learn Redux',
    description: 'Hello world',
    priority: 'high'
  };
  const expected = [
    {},
    {
      id: 1,
      title: 'Learn Redux',
      description: 'Hello world',
      priority: 'high'
    }
  ];
  deepFreeze(stateBefore);
  const actual = todos(stateBefore, action);

  t.deepEqual(actual, expected);
});


test('It should return the current state if the action.type is unmatched', t => {
  const stateBefore = [
    {
      id: 1,
      title: 'Learn Redux',
      description: 'Hello world',
      priority: 'high'
    }
  ];
  const action = {
    type: 'DO_SOMETHING_ELSE'
  };
  const expected = [
    {
      id: 1,
      title: 'Learn Redux',
      description: 'Hello world',
      priority: 'high'
    }
  ];
  deepFreeze(stateBefore);
  const actual = todos(stateBefore, action);

  t.deepEqual(actual, expected);
});
