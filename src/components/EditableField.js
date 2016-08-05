import React from 'react';

import UpdateFormContainer from './UpdateFormContainer';

const EditableField = ({
  children,
  fieldName,
  fieldType,
  fieldValue,
  selectOptions,
  id,
  updateForms,
  toggleUpdateFormVisibility
}) => (
  <div>
    <div className="contains-edit">
      {
        updateForms[id] && updateForms[id][fieldName] ?
          <UpdateFormContainer
            fieldName={fieldName}
            fieldValue={fieldValue}
            fieldType={fieldType}
            selectOptions={selectOptions}
            toggleUpdateFormVisibility={e => toggleUpdateFormVisibility(e, id, fieldName)}
            id={id}
          />
        :
          <div>
            {children}
            <a href="#" onClick={e => toggleUpdateFormVisibility(e, id, fieldName)} className="contains-edit__link">
              Edit {fieldName}
            </a>
          </div>
      }
    </div>
  </div>
);

EditableField.propTypes = {
  children: React.PropTypes.node.isRequired,
  fieldName: React.PropTypes.string.isRequired,
  fieldValue: React.PropTypes.string.isRequired,
  fieldType: React.PropTypes.string.isRequired,
  updateForms: React.PropTypes.object.isRequired,
  id: React.PropTypes.string.isRequired,
  toggleUpdateFormVisibility: React.PropTypes.func.isRequired,
  selectOptions: React.PropTypes.array
};

export default EditableField;
