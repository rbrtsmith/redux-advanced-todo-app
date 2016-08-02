import test from 'ava';
import deepFreeze from 'deep-freeze';

import todos from '../../src/reducers/todos';

import actionAddTodo from '../../src/actions/addTodo';
import actionRemoveTodo from '../../src/actions/removeTodo';
import actionUpdateTodoStatus from '../../src/actions/updateTodoStatus';
import actionUpdateTodoTitle from '../../src/actions/updateTodoTitle';
import actionUpdateTodoDescription from '../../src/actions/updateTodoDescription';
import actionUpdateTodoPriority from '../../src/actions/updateTodoPriority';



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



test('It should update the todo title when action.type = UPDATE_TODO_TITLE', t => {
  const stateBefore = [
    {
      id: 1,
      title: 'Learn Redux'
    },
    {
      id: 2,
      title: 'Go swimming'
    }
  ];
  const expected = [
    {
      id: 1,
      title: 'Learn Redux'
    },
    {
      id: 2,
      title: 'Clean apartment'
    }
  ];
  const action = actionUpdateTodoTitle({
    id: 2,
    title: 'Clean apartment' 
  });
  deepFreeze(stateBefore);
  const actual = todos(stateBefore, action);

  t.deepEqual(actual, expected);
});




test('It should update the todo priority when action.type = UPDATE_TODO_PRIORITY', t => {
  const stateBefore = [
    {
      id: 1,
      priority: 'Low'
    },
    {
      id: 2,
      priority: 'Low'
    }
  ];
  const expected = [
    {
      id: 1,
      priority: 'High'
    },
    {
      id: 2,
      priority: 'Low'
    }
  ];
  const action = actionUpdateTodoPriority({
    id: 1,
    priority: 'High' 
  });
  deepFreeze(stateBefore);
  const actual = todos(stateBefore, action);

  t.deepEqual(actual, expected);
});



test('It should update the todo description when action.type = UPDATE_TODO_DESCRIPTION', t => {
  const stateBefore = [
    {
      id: 1,
      description: 'Learn Redux'
    },
    {
      id: 2,
      description: 'Go swimming'
    }
  ];
  const expected = [
    {
      id: 1,
      description: 'Learn Redux'
    },
    {
      id: 2,
      description: 'Clean apartment'
    }
  ];
  const action = actionUpdateTodoDescription({
    id: 2,
    description: 'Clean apartment' 
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
