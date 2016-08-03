import { connect } from 'react-redux';

import addTodo from '../actions/addTodo';

import AddTodo from './AddTodo';

const mapDispatchToProps = dispatch => ({
  publishNewTodo(payload) {
    dispatch(addTodo(payload));
  }
});

export default connect(
  undefined,
  mapDispatchToProps
)(AddTodo);
