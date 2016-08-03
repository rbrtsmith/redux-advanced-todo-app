import test from 'ava';
import deepFreeze from 'deep-freeze';

import updateForms from '../../src/reducers/updateForms';

import actionToggleUpdateFormVisibility from '../../src/actions/toggleUpdateFormVisibility';


test('It should toggle the appropiate field when action.type = TOGGLE_UPDATE_FORM_VISIBILITY', t => {
  const stateBefore = {
    "T1": {
      title: true
    }
  };
  const expected = {
    "T1": {
      title: false
    }
  };
  const action = actionToggleUpdateFormVisibility({
    todoId: "T1",
    fieldName: "title"
  });
  deepFreeze(stateBefore);
  const actual = updateForms(stateBefore, action);

  t.deepEqual(actual, expected);
});


test('It should toggle the appropiate field when action.type = TOGGLE_UPDATE_FORM_VISIBILITY', t => {
  const stateBefore = {};
  const expected = {
    "T1": {
      description: true
    }
  };
  const action = actionToggleUpdateFormVisibility({
    todoId: "T1",
    fieldName: "description"
  });
  deepFreeze(stateBefore);
  const actual = updateForms(stateBefore, action);

  t.deepEqual(actual, expected);
});

test('It should toggle the appropiate field when action.type = TOGGLE_UPDATE_FORM_VISIBILITY', t => {
  const stateBefore = {
    "T1": {
      title: true
    },
    "T2": {
      title: true,
      description: true
    }
  };
  const expected = {
    "T1": {
      title: true
    },
    "T2": {
      title: true,
      description: true
    },
    "T3": {
      priority: true
    }
  };
  const action = actionToggleUpdateFormVisibility({
    todoId: "T3",
    fieldName: "priority"
  });
  deepFreeze(stateBefore);
  const actual = updateForms(stateBefore, action);

  t.deepEqual(actual, expected);
});

test('It should return the current state if the action.type is unmatched', t => {
  const stateBefore = [{}];
  const action = {
    type: 'DO_SOMETHING_ELSE'
  };
  const expected = [{}];
  deepFreeze(stateBefore);
  const actual = updateForms(stateBefore, action);

  t.deepEqual(actual, expected);
});


