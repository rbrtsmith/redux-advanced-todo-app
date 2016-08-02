import test from 'ava';

import toggleUpdateFormVisibility from '../../src/actions/toggleUpdateFormVisibility';

test('It should return an object containing the action type and payload', t => {
  const expected = {
    type: 'TOGGLE_UPDATE_FORM_VISIBILITY',
    payload: {}
  };

  const actual = toggleUpdateFormVisibility({});

  t.deepEqual(actual, expected);
});
