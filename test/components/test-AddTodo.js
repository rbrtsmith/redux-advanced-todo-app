import React from 'react';
import test from 'ava';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import AddTodo from '../../src/components/AddTodo';

test.skip('<AddTodo /> it calls publishNewTodo when the form is submitted', t => {
  const stubbedpublishNewTodo = sinon.stub();
  const $ = shallow(
    <AddTodo publishNewTodo={stubbedpublishNewTodo} />
  );

  const e = {
    preventDefault() {}
  };

  $.find('form').prop('onSubmit')(e);

  t.true(stubbedpublishNewTodo.calledWith(e, '', '', ''));
});
