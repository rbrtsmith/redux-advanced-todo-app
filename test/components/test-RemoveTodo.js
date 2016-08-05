import React from 'react';
import test from 'ava';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import RemoveTodo from '../../src/components/RemoveTodo';

test('It renders a single button', t => {
  const stubbedRemoveTodo = sinon.stub();
  const $ = shallow(<RemoveTodo removeTodo={stubbedRemoveTodo} />);
  $.find('button').prop('onClick')();

  t.true(stubbedRemoveTodo.calledWith());
});
