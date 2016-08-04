import React from 'react';
import test from 'ava';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import EditableField from '../../src/components/EditableField';

test('<EditableField /> it calls onUpdateFieldClick when the edit link is clicked', t => {
  const stubbedonUpdateFieldClick = sinon.stub();
  const $ = shallow(
    <EditableField
      onUpdateFieldClick={stubbedonUpdateFieldClick}
      fieldName="Foo"
      fieldType=""
      fieldValue=""
      updateForms={{}}
      id="T1"
    >
      <div></div>
    </EditableField>
  );

  const e = {
    preventDefault() {}
  };

  $.find('a').prop('onClick')(e);

  t.true(stubbedonUpdateFieldClick.calledWith(e, 'Foo'));
});
