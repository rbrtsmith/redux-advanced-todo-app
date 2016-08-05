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
  const $ = shallow(<AddTodo { ...props } />);
  const e = {
    preventDefault() {}
  };

  $.find('form').prop('onSubmit')(e);

  t.true(stubbedpublishNewTodo.calledWith(e, addTodoFormFieldValues));
});


test('It calls updateAddTodoFormFieldValue when the title field changes', t => {
  const stubbedUpdateAddTodoFormFieldValue = sinon.stub();
  const addTodoFormFieldValues = {
    title: '',
    description: '',
    priority: 'low'
  };
  const props = {
    publishNewTodo(){},
    addTodoFormFieldValues,
    updateAddTodoFormFieldValue: stubbedUpdateAddTodoFormFieldValue
  };
  const $ = shallow(<AddTodo { ...props } />);
  const e = {
    target: {
      value: 'H'
    },
    preventDefault() {}
  };

  $.find('input[name="title"]').prop('onChange')(e);

  t.true(stubbedUpdateAddTodoFormFieldValue.calledWith('title', 'H'));
});


test('It calls updateAddTodoFormFieldValue when the description field changes', t => {
  const stubbedUpdateAddTodoFormFieldValue = sinon.stub();
  const addTodoFormFieldValues = {
    title: '',
    description: '',
    priority: 'low'
  };
  const props = {
    publishNewTodo(){},
    addTodoFormFieldValues,
    updateAddTodoFormFieldValue: stubbedUpdateAddTodoFormFieldValue
  };
  const $ = shallow(<AddTodo { ...props } />);
  const e = {
    target: {
      value: 'H'
    },
    preventDefault() {}
  };

  $.find('input[name="description"]').prop('onChange')(e);

  t.true(stubbedUpdateAddTodoFormFieldValue.calledWith('description', 'H'));
});


test('It calls updateAddTodoFormFieldValue when the priority field changes', t => {
  const stubbedUpdateAddTodoFormFieldValue = sinon.stub();
  const addTodoFormFieldValues = {
    title: '',
    description: '',
    priority: 'low'
  };
  const props = {
    publishNewTodo(){},
    addTodoFormFieldValues,
    updateAddTodoFormFieldValue: stubbedUpdateAddTodoFormFieldValue
  };
  const $ = shallow(<AddTodo { ...props } />);
  const e = {
    target: {
      value: 'high'
    },
    preventDefault() {}
  };

  $.find('select[name="priority"]').prop('onChange')(e);

  t.true(stubbedUpdateAddTodoFormFieldValue.calledWith('priority', 'high'));
});
