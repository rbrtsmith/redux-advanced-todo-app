import test from 'ava';
import deepFreeze from 'deep-freeze';


import filterTodosByStatus from '../../src/utils/filterTodosByStatus';


test('It should return a filtered list of Todos based on the status', t => {
  const todosBefore = [
    { 
      id: 'T1',
      status: 'todo'
    },
    { 
      id: 'T2',
      status: 'done'
    },
    { 
      id: 'T3',
      status: 'in progress'
    },
    { 
      id: 'T4',
      status: 'todo'
    },
    { 
      id: 'T5',
      status: 'todo'
    },
    { 
      id: 'T6',
      status: 'done'
    }
  ];
  deepFreeze(todosBefore);
  const expected = [
    { 
      id: 'T2',
      status: 'done'
    },
    { 
      id: 'T6',
      status: 'done'
    }
  ];
  const actual = filterTodosByStatus(todosBefore, 'done');
  t.deepEqual(actual, expected);
});
