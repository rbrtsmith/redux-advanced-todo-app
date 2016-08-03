import test from 'ava';
import deepFreeze from 'deep-freeze';

import getTodo from '../../src/utils/getTodo';

test('It should return a single todo with a matching ID', t => {
  const todosBefore = [
    { id: "T1" },
    { id: "T2" },
    { id: "T3" }
  ];
  deepFreeze(todosBefore)
  const expected = { id: "T2" };
  const actual = getTodo(todosBefore, "T2");
  t.deepEqual(actual, expected);
});
