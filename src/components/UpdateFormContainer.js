import { connect } from 'react-redux';

import updateTodoField from '../actions/updateTodoField';

import UpdateForm from './UpdateForm';


const mapDispatchToProps = dispatch => ({
  updateTodoField(id, fieldName, fieldValue) {
    dispatch(updateTodoField({
      id,
      fieldName,
      fieldValue
    }));
  }
});

export default connect(
  undefined,
  mapDispatchToProps
)(UpdateForm);
