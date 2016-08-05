import React from 'react';
import test from 'ava';
import { shallow } from 'enzyme';

import Root from '../../src/components/Root';

test('<Root /> it renders children', t => {
  const $ = shallow(
    <Root>
      <div>
        Foo
      </div>
    </Root>
  );

  t.true($.children().contains('Foo'));
});
