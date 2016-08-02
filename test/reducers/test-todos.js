import test from 'ava';
import deepFreeze from 'deep-freeze';

import todos from '../../src/reducers/todos';

import actionAddTodo from '../../src/actions/addTodo';
import actionRemoveTodo from '../../src/actions/removeTodo';
import actionUpdateTodoStatus from '../../src/actions/updateTodoStatus';


test('It should add a todo when action.type = ADD_TODO ', t => {
  const stateBefore = [{}];
  const action = actionAddTodo({
    id: 1,
    title: 'Learn Redux',
    description: 'Hello world',
    priority: 'high'
  })
  const expected = [
    {},
    {
      id: 1,
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
    { id: 1 },
    { id: 2 },
    { id: 3 }
  ];
  const expected = [
    { id: 1 },
    { id: 3 }
  ];
  const action = actionRemoveTodo({
    id: 2
  });
  deepFreeze(stateBefore);
  const actual = todos(stateBefore, action);

  t.deepEqual(actual, expected);
});



test('It should update the todo status when action.type = UPDATE_TODO_STATUS', t => {
  const stateBefore = [
    {
      id: 1,
      status: 'todo'
    },
    {
      id: 2,
      status: 'todo'
    }
  ];
  const expected = [
    {
      id: 1,
      status: 'todo'
    },
    {
      id: 2,
      status: 'in progress'
    }
  ];
  const action = actionUpdateTodoStatus({
    id: 2,
    status: 'in progress' 
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
