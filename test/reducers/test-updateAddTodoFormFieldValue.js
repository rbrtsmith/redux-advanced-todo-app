import test from 'ava';
import deepFreeze from 'deep-freeze';

import addTodoFormFieldValues from '../../src/reducers/addTodoFormFieldValues';

import actionUpdateAddTodoFormFieldValue from '../../src/actions/updateAddTodoFormFieldValue';


test('It should toggle the appropiate field when action.type = UPDATE_ADD_TODO_FORM_FIELD_VALUE', t => {
  const stateBefore = {
    title: "",
    description: "",
    priority: ""
  };
  const expected = {
    title: "T",
    description: "",
    priority: ""
  };
  const action = actionUpdateAddTodoFormFieldValue({
    field: 'title',
    value: 'T'
  });
  deepFreeze(stateBefore);
  const actual = addTodoFormFieldValues(stateBefore, action);

  t.deepEqual(actual, expected);
});

test('It should return the state when action.type != UPDATE_ADD_TODO_FORM_FIELD_VALUE', t => {
  const stateBefore = {
    title: "",
    description: "",
    priority: ""
  };
  const expected = {
    title: "",
    description: "",
    priority: ""
  };
  const action = {
    type: 'FOO'
  };
  deepFreeze(stateBefore);
  const actual = addTodoFormFieldValues(stateBefore, action);

  t.deepEqual(actual, expected);
});
