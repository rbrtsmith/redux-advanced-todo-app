import React from 'react';
import test from 'ava';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import NotFound from '../../src/components/NotFound';

test('It renders the location pathname', t => {
  const $ = shallow(<NotFound location={{ pathname: '/todo/foo'}} history={{}} />);

  const expected = true;
  const actual = $.contains(<em>/todo/foo</em>);

  t.is(actual, expected);
});


test('It calls the goBack method on the history object when go back button is clicked', t => {
  const stubbedGoBack = sinon.stub();
  const history = {
    goBack: stubbedGoBack
  };
  const $ = shallow(<NotFound location={{ pathname: '/todo/foo'}} history={history} />);

  $.find('button').prop('onClick')();

  t.true(stubbedGoBack.calledWith());
});
