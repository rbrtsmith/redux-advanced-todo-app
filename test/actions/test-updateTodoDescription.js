import test from 'ava';

import updateTodoDescription from '../../src/actions/updateTodoDescription';

test('It should return an object containing the action type and payload', t => {
  const expected = {
    type: 'UPDATE_TODO_DESCRIPTION',
    payload: {}
  };

  const actual = updateTodoDescription({});

  t.deepEqual(actual, expected);
});
