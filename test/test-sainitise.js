import test from 'ava';

import sanitise from '../src/utils/sanitise';

test('It should return a lowercase string', t => {

  const actual = sanitise('HELLO World!');
  const expected = 'hello world!';

  t.deepEqual(actual, expected);
});
