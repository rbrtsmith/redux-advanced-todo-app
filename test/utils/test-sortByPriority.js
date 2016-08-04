import test from 'ava';
import deepFreeze from 'deep-freeze';

import sortByPriority from '../../src/utils/sortByPriority';

test('It should sort the todos list based on priority level', t => {
  const todosBefore = [
    { priority: 'high' },
    { priority: 'low' },
    { priority: 'medium' },
    { priority: 'high' },
    { priority: 'high' },
    { priority: 'low' },
    { priority: 'medium' }
  ];
  deepFreeze(todosBefore);
  const expected = [
    { priority: 'high' },
    { priority: 'high' },
    { priority: 'high' },
    { priority: 'medium' },
    { priority: 'medium' },
    { priority: 'low' },
    { priority: 'low' }
  ];
  const actual = sortByPriority(todosBefore);
  t.deepEqual(actual, expected);
});
