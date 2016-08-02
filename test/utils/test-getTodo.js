import test from 'ava';

import getTodo from '../../src/utils/getTodo';

test('It should return a single todo with a matching ID', t => {
  const todos = [
    { id: "T1" },
    { id: "T2" },
    { id: "T3" }
  ];
  const expected = { id: "T2" };
  const actual = getTodo(todos, "T2");
  t.deepEqual(actual, expected);
});
