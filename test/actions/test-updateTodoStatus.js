import test from 'ava';

import updateTodoStatus from '../../src/actions/updateTodoStatus';

test('It should return an object containing the action type and payload', t => {
  const expected = {
    type: 'UPDATE_TODO_STATUS',
    payload: {}
  };

  const actual = updateTodoStatus({});

  t.deepEqual(actual, expected);
});
