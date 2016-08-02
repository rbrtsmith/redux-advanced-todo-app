import test from 'ava';

import getTodo from '../../src/utils/getTodo';

test('It should return a single todo with a matching ID', t => {
  const todos = [
    { id: 1 },
    { id: 2 },
    { id: 3 }
  ];
  const expected = { id: 2 };
  const actual = getTodo(todos, 2);
  t.deepEqual(actual, expected);
});
