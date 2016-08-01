import test from 'ava';

import sanitise from '../src/utils/sanitise';

test('It should return a lowercase string', t => {

  const actual = 'hello world!';
  const expected = sanitise('HELLO World!');

  t.deepEqual(actual, expected);
});
