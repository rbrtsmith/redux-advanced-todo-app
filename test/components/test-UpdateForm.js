import React from 'react';
import test from 'ava';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';

import UpdateForm from '../../src/components/UpdateForm';

test('It renders a text input when the fieldType prop = "text"', t => {
  const props = {
    fieldValue: 'Foo',
    fieldName: 'Bar',
    fieldType: 'text',
    toggleUpdateFormVisibility(){},
    updateTodoField(){},
    id: 'T1'
  };
  const $ = shallow(<UpdateForm {...props} />);
  const expected = 1;
  const actual = $.find('input[type="text"]').length;

  t.deepEqual(actual, expected);
});


test('It renders a select input when the fieldType prop != "text"', t => {
  const props = {
    fieldValue: 'Foo',
    fieldName: 'Bar',
    fieldType: 'select',
    toggleUpdateFormVisibility(){},
    updateTodoField(){},
    id: 'T1',
    selectOptions: [1,2,3]
  };
  const $ = shallow(<UpdateForm {...props} />);
  const expected = 1;
  const actual = $.find('select').length;

  t.deepEqual(actual, expected);
});


test('It calls updateTodoField when a text input changes', t => {
  const stubbedUpdateTodoField = sinon.stub();
  const props = {
    fieldValue: 'Learn Redux',
    fieldName: 'title',
    fieldType: 'text',
    toggleUpdateFormVisibility(){},
    updateTodoField: stubbedUpdateTodoField,
    id: 'T1'
  };
  const $ = shallow(<UpdateForm {...props} />);
  const e = {
    target: {
      value: 'Learn Redux!'
    }
  };
  $.find('input[type="text"]').prop('onChange')(e);

  t.true(stubbedUpdateTodoField.calledWith('T1', 'title', 'Learn Redux!'));
});


test('It calls updateTodoField & toggleUpdateFormVisibility when a text input changes', t => {
  const stubbedUpdateTodoField = sinon.stub();
  const stubbedToggleUpdateFormVisibility = sinon.stub();
  const props = {
    fieldValue: 'Learn Redux',
    fieldName: 'status',
    fieldType: 'select',
    toggleUpdateFormVisibility: stubbedToggleUpdateFormVisibility,
    updateTodoField: stubbedUpdateTodoField,
    id: 'T1',
    selectOptions: [1,2,3]
  };
  const $ = shallow(<UpdateForm {...props} />);
  const e = {
    target: {
      value: '2'
    }
  };
  t.plan(2);
  $.find('select').prop('onChange')(e);

  t.true(stubbedUpdateTodoField.calledWith('T1', 'status', '2'));
  t.true(stubbedToggleUpdateFormVisibility.calledWith(e));
});


test('It calls toggleUpdateFormVisibility when the form submit event is fired', t => {
  const stubbedToggleUpdateFormVisibility = sinon.stub();
  const props = {
    fieldValue: 'Learn Redux',
    fieldName: 'title',
    fieldType: 'text',
    toggleUpdateFormVisibility: stubbedToggleUpdateFormVisibility,
    updateTodoField(){},
    id: 'T1',
  };
  const $ = shallow(<UpdateForm {...props} />);
  const e = {
    target: {
      value: '2'
    }
  };
  $.find('form').prop('onSubmit')(e);

  t.true(stubbedToggleUpdateFormVisibility.calledWith(e));
});
