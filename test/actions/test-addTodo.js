import test from 'ava';

import addTodo from '../../src/actions/addTodo';

test('It should return an object containing the action type and payload', t => {
  const expected = {
    type: 'ADD_TODO',
    payload: {}
  };

  const actual = addTodo({});

  t.deepEqual(actual, expected);
});
