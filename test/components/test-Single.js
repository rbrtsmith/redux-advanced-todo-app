import React from 'react';
import test from 'ava';
import { shallow } from 'enzyme';

import Single from '../../src/components/Single';

import EditableFieldContainer from '../../src/components/EditableFieldContainer';
import RemoveTodoContainer from '../../src/components/RemoveTodoContainer';

const todos = [
  {
    id: 'T1',
    title: 'Learn Redux',
    description: 'Make use of Egghead, learnredux.com and redux documentation.',
    status: 'in progress',
    priority: 'high',
    dateAdded: 1460300009839
  }
];
const params = {
  todoId: 'T1'
};


test('It renders four <EditableFieldContainer /> components', t => {
  const $ = shallow(<Single todos={todos} params={params} />);
  const expected = 4;
  const actual = $.find(EditableFieldContainer).length;

  t.deepEqual(actual, expected);
});

test('It renders a single <RemoveTodoContainer /> component', t => {
  const $ = shallow(<Single todos={todos} params={params} />);
  const expected = 1;
  const actual = $.find(RemoveTodoContainer).length;

  t.deepEqual(actual, expected);
});
