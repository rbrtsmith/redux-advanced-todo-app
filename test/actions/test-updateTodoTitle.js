import test from 'ava';

import updateTodoTitle from '../../src/actions/updateTodoTitle';

test('It should return an object containing the action type and payload', t => {
  const expected = {
    type: 'UPDATE_TODO_TITLE',
    payload: {}
  };

  const actual = updateTodoTitle({});

  t.deepEqual(actual, expected);
});
