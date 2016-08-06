import React from 'react';
import test from 'ava';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import EditableField from '../../src/components/EditableField';
import UpdateFormContainer from '../../src/components/UpdateFormContainer';


test('It calls toggleUpdateFormVisibility when the edit link is clicked', t => {
  const stubbedToggleUpdateFormVisibility = sinon.stub();
  const $ = shallow(
    <EditableField
      fieldName="Foo"
      fieldType=""
      fieldValue=""
      toggleUpdateFormVisibility={stubbedToggleUpdateFormVisibility}
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

  t.true(stubbedToggleUpdateFormVisibility.calledWith(e, 'T1', 'Foo'));
});


test('It renders an <UpdateFormContainer /> component when updateForms key matches the current todId and the fieldname props match', t => {
  const toggleUpdateFormVisibility = () => {};
  const updateForms = {
    T1: {
      title: true
    }
  };
  const $ = shallow(
    <EditableField
      fieldName="title"
      fieldType=""
      fieldValue=""
      toggleUpdateFormVisibility={toggleUpdateFormVisibility}
      updateForms={updateForms}
      id="T1"
    >
      <div></div>
    </EditableField>
  );

  const actual = $.find(UpdateFormContainer).length;
  const expected = 1;

  t.deepEqual(actual, expected);
});


test('It renders an edit field link when updateForms key matches the current todId and the fieldname does not match and is set to true', t => {
  const toggleUpdateFormVisibility = () => {};
  const updateForms = {
    T1: {
      description: true
    }
  };
  const $ = shallow(
    <EditableField
      fieldName="title"
      fieldType=""
      fieldValue=""
      toggleUpdateFormVisibility={toggleUpdateFormVisibility}
      updateForms={updateForms}
      id="T1"
    >
      <div></div>
    </EditableField>
  );

  const actual = $.find('a').length;
  const expected = 1;

  t.deepEqual(actual, expected);
});


test('It renders an an edit field link when updateForms key matches the current todId and the fieldname matches and is set to false', t => {
  const toggleUpdateFormVisibility = () => {};
  const updateForms = {
    T1: {
      title: false
    }
  };
  const $ = shallow(
    <EditableField
      fieldName="title"
      fieldType=""
      fieldValue=""
      toggleUpdateFormVisibility={toggleUpdateFormVisibility}
      updateForms={updateForms}
      id="T1"
    >
      <div></div>
    </EditableField>
  );

  const actual = $.find('a').length;
  const expected = 1;

  t.deepEqual(actual, expected);
});


test('It renders an an edit field link when updateForms key does not match the current todId and the fieldname matches  and is set to true', t => {
  const toggleUpdateFormVisibility = () => {};
  const updateForms = {
    T2: {
      title: true
    }
  };
  const $ = shallow(
    <EditableField
      fieldName="title"
      fieldType=""
      fieldValue=""
      toggleUpdateFormVisibility={toggleUpdateFormVisibility}
      updateForms={updateForms}
      id="T1"
    >
      <div></div>
    </EditableField>
  );

  const actual = $.find('a').length;
  const expected = 1;

  t.deepEqual(actual, expected);
});


