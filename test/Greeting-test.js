import React from 'react';
import { assert } from 'chai';
import { shallow } from 'enzyme';
import Greeting from '../src/components/Greeting';

describe('<Greeting />', () => {

  it('contains a message in a paragraph', () => {
    const wrapper1 = shallow(<Greeting msg="WORLD" />);
    const actual = wrapper1.contains(<p>Welcome to our new APP!</p>);
    const expected = true;
    assert(actual, expected);
  });

});