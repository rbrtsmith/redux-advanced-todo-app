import React from 'react';

import UpdateFormContainer from './UpdateFormContainer';

const EditableField = ({ children, fieldName, fieldValue, onUpdateFieldClick, id, updateForms }) => (
  <div>
    <div className="contains-edit">
      {
        updateForms[id] && updateForms[id][fieldName] ?
          <UpdateFormContainer
            fieldName={fieldName}
            fieldValue={fieldValue}
            toggleUpdateFormVisibility={onUpdateFieldClick}
            id={id}
          />
        :
          <div>
            {children}
            <a href="#" onClick={e => onUpdateFieldClick(e, fieldName)} className="contains-edit__link">
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
  onUpdateFieldClick: React.PropTypes.func.isRequired,
  updateForms: React.PropTypes.object.isRequired,
  id: React.PropTypes.string.isRequired
};

export default EditableField;
