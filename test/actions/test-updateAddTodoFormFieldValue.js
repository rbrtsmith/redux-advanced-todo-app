import test from 'ava';

import updateAddTodoFormFieldValue from '../../src/actions/updateAddTodoFormFieldValue';

test('It should return an object containing the action type and payload', t => {
  const expected = {
    type: 'UPDATE_ADD_TODO_FORM_FIELD_VALUE',
    payload: {}
  };

  const actual = updateAddTodoFormFieldValue({});

  t.deepEqual(actual, expected);
});
