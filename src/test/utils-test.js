import { assert } from 'chai';
import sanitise from '../utils/sanitise';

describe('Santise', () => {
  it('should return a lowercase string', () => {
    const actual = 'hello world';
    const expected = sanitise('HELLO WORLD');
    assert.equal(actual, expected);
  });
});
