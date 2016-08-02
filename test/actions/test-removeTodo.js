import test from 'ava';

import removeTodo from '../../src/actions/removeTodo';

test('It should return an object containing the action type and payload', t => {
  const expected = {
    type: 'REMOVE_TODO',
    payload: {}
  };

  const actual = removeTodo({});

  t.deepEqual(actual, expected);
});
