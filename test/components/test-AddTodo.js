import React from 'react';
import test from 'ava';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import AddTodo from '../../src/components/AddTodo';

test('It calls publishNewTodo when the form is submitted', t => {
  const stubbedpublishNewTodo = sinon.stub();
  const addTodoFormFieldValues = {
    title: '',
    description: '',
    priority: 'low'
  };
  const props = {
    publishNewTodo: stubbedpublishNewTodo,
    addTodoFormFieldValues,
    updateAddTodoFormFieldValue(){}
  };
  const $ = shallow(
    <AddTodo { ...props } />
  );

  const e = {
    preventDefault() {}
  };

  $.find('form').prop('onSubmit')(e);

  t.true(stubbedpublishNewTodo.calledWith(e, addTodoFormFieldValues));
});
