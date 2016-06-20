import React from 'react';
import { assert } from 'chai';
import { shallow } from 'enzyme';
import Greeting from '../components/Greeting';

describe('<Greeting />', () => {
  it('contains "Welcome to our new APP!" in a paragraph', () => {
    const $ = shallow(<Greeting />);
    const actual = $.find('p').text();
    const expected = 'Welcome to our new APP!';
    assert.equal(actual, expected);
  });

  it('renders a message inside of a H2 with the passeed prop in lowercase', () => {
    const $ = shallow(<Greeting msg="WORLD" />);
    const actual = $.find('h2').text();
    const expected = 'Hello world';
    assert.equal(actual, expected);
  });
});
