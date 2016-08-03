import test from 'ava';

import updateTodoField from '../../src/actions/updateTodoField';

test('It should return an object containing the action type and payload', t => {
  const expected = {
    type: 'UPDATE_TODO_FIELD',
    payload: {}
  };

  const actual = updateTodoField({});

  t.deepEqual(actual, expected);
});
