import test from 'ava';

import updateTodoPriority from '../../src/actions/updateTodoPriority';

test('It should return an object containing the action type and payload', t => {
  const expected = {
    type: 'UPDATE_TODO_PRIORITY',
    payload: {}
  };

  const actual = updateTodoPriority({});

  t.deepEqual(actual, expected);
});
