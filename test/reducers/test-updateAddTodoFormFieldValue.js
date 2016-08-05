import test from 'ava';
import deepFreeze from 'deep-freeze';

import addTodoFormFieldValues from '../../src/reducers/addTodoFormFieldValues';

import actionUpdateAddTodoFormFieldValue from '../../src/actions/updateAddTodoFormFieldValue';
import actionResetAddTodoFormFieldValue from '../../src/actions/resetAddTodoFormFieldValue';


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
  deepFreeze(stateBefore);
  const action = actionUpdateAddTodoFormFieldValue({
    field: 'title',
    value: 'T'
  });
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
  deepFreeze(stateBefore);
  const action = {
    type: 'FOO'
  };
  const actual = addTodoFormFieldValues(stateBefore, action);

  t.deepEqual(actual, expected);
});


test('It should reset the state when the action.type = RESET_ADD_TODO_FORM_FIELD_VALUE', t => {
  const stateBefore = {
    title: 'Hello',
    description: 'world',
    priority: 'high'
  };
  const expected = {
    title: '',
    description: '',
    priority: 'low'
  };
  deepFreeze(stateBefore);
  const action = actionResetAddTodoFormFieldValue();
  const actual = addTodoFormFieldValues(stateBefore, action);

  t.deepEqual(actual, expected);
});
