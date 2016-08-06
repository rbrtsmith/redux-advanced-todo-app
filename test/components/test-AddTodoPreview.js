import React from 'react';
import test from 'ava';
import { shallow } from 'enzyme';

import AddTodoPreview from '../../src/components/AddTodoPreview';

test('It renders out the card if the title field is present', t => {
  const props = {
    addTodoFormFieldValues: {
      title: 'Hello'
    }
  };
  const $ = shallow(<AddTodoPreview { ...props } />);
  const expected = 1;
  const actual = $.find('.c-card').length;
  t.deepEqual(actual, expected);
});

test('It doesn\'t render out the card if the title field is ommited', t => {
  const props = {
    addTodoFormFieldValues: {
      description: 'Hello'
    }
  };
  const $ = shallow(<AddTodoPreview { ...props } />);
  const expected = 0;
  const actual = $.find('.c-card').length;
  t.deepEqual(actual, expected);
});


test('It renders out the description', t => {
  const props = {
    addTodoFormFieldValues: {
      title: 'Hello',
      description: 'World!'
    }
  };
  const $ = shallow(<AddTodoPreview { ...props } />);
  const expected = true;
  const actual = $.contains(<p>World!</p>);
  t.deepEqual(actual, expected);
});


test('It doesn\'t out the description <p></p> if description is ommited', t => {
  const props = {
    addTodoFormFieldValues: {
      title: 'Hello',
      description: ''
    }
  };
  const $ = shallow(<AddTodoPreview { ...props } />);
  const expected = false;
  const actual = $.contains(<p></p>);
  t.deepEqual(actual, expected);
});



test('Renders out the correct c-card modifier class according to priority', t => {
  const props = {
    addTodoFormFieldValues: {
      title: 'Hello',
      description: '',
      priority: 'high'
    }
  };
  const $ = shallow(<AddTodoPreview { ...props } />);
  const expected = 1;
  const actual = $.find('.c-card--high').length;
  t.deepEqual(actual, expected);
});
