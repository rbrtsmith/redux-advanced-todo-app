import { connect } from 'react-redux';

import EditableField from './EditableField';
import toggleUpdateFormVisibility from '../actions/toggleUpdateFormVisibility';

const mapStateToProps = ({ updateForms }) => ({
  updateForms
});

const mapDispatchToProps = dispatch => ({
  toggleUpdateFormVisibility(e, todoId, fieldName) {
    e.preventDefault();
    dispatch(toggleUpdateFormVisibility({
      todoId,
      fieldName
    }));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditableField);
