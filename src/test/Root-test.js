import React from 'react';
import { assert } from 'chai';
import { shallow } from 'enzyme';
import Root from '../components/Root';

describe('<Root />', () => {
  it('renders a single <Greeting /> component', () => {
    const $ = shallow(<Root />);
    const actual = $.find('Greeting').length;
    const expected = 1;
    assert.equal(actual, expected);
  });

  it('renders two <SocialIcon /> components', () => {
    const $ = shallow(<Root />);
    const actual = $.find('SocialIcon').length;
    const expected = 2;
    assert.equal(actual, expected);
  });
});
