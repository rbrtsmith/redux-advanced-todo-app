import { connect } from 'react-redux';

import updateTodoField from '../actions/updateTodoField';

import UpdateForm from './UpdateForm';


const mapDispatchToProps = dispatch => ({
  updateTodoField(payload) {
    dispatch(updateTodoField(payload));
  },
});

export default connect(
  undefined,
  mapDispatchToProps
)(UpdateForm);
