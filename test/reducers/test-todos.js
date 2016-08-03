import test from 'ava';
import deepFreeze from 'deep-freeze';

import todos from '../../src/reducers/todos';

import actionAddTodo from '../../src/actions/addTodo';
import actionRemoveTodo from '../../src/actions/removeTodo';
import actionUpdateTodoField from '../../src/actions/updateTodoField';



test('It should add a todo when action.type = ADD_TODO ', t => {
  const stateBefore = [{}];
  const action = actionAddTodo({
    id: "T1",
    title: 'Learn Redux',
    description: 'Hello world',
    priority: 'high'
  })
  const expected = [
    {},
    {
      id: "T1",
      title: 'Learn Redux',
      description: 'Hello world',
      priority: 'high'
    }
  ];
  deepFreeze(stateBefore);
  const actual = todos(stateBefore, action);

  t.deepEqual(actual, expected);
});



test('It should remove correct todo when action.type = REMOVE_TODO', t => {
  const stateBefore = [
    { id: "T1" },
    { id: "T2" },
    { id: "T3" }
  ];
  const expected = [
    { id: "T1" },
    { id: "T3" }
  ];
  const action = actionRemoveTodo({
    id: "T2"
  });
  deepFreeze(stateBefore);
  const actual = todos(stateBefore, action);

  t.deepEqual(actual, expected);
});



test('It should update the title field when fieldName=title and action.type=UPDATE_TODO_FIELD', t => {
  const stateBefore = [
    {
      id: "T1",
      title: 'Wash car'
    },
    {
      id: "T2",
      title: 'Go shopping'
    }
  ];
  const expected = [
    {
      id: "T1",
      title: 'Wash car'
    },
    {
      id: "T2",
      title: 'Go to the cinema'
    }
  ];
  const action = actionUpdateTodoField({
    id: "T2",
    fieldName: "title",
    fieldValue: 'Go to the cinema' 
  });
  deepFreeze(stateBefore);
  const actual = todos(stateBefore, action);

  t.deepEqual(actual, expected);
});




test('It should update the status field when fieldName=status and action.type=UPDATE_TODO_FIELD', t => {
  const stateBefore = [
    {
      id: "T1",
      status: 'todo'
    }
  ];
  const expected = [
    {
      id: "T1",
      status: 'in progress'
    }
  ];
  const action = actionUpdateTodoField({
    id: "T1",
    fieldName: "status",
    fieldValue: 'in progress' 
  });
  deepFreeze(stateBefore);
  const actual = todos(stateBefore, action);

  t.deepEqual(actual, expected);
});



test('It should return the current state if the action.type is unmatched', t => {
  const stateBefore = [{}];
  const action = {
    type: 'DO_SOMETHING_ELSE'
  };
  const expected = [{}];
  deepFreeze(stateBefore);
  const actual = todos(stateBefore, action);

  t.deepEqual(actual, expected);
});
