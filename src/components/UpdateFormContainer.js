import { connect } from 'react-redux';

import updateTodoTitle from '../actions/updateTodoTitle';

import UpdateForm from './UpdateForm';


const mapDispatchToProps = dispatch => ({
  updateTodoTitle(payload) {
    dispatch(updateTodoTitle(payload));
  },
});

export default connect(
  undefined,
  mapDispatchToProps
)(UpdateForm);
