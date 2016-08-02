import { connect } from 'react-redux';

import removeTodo from '../actions/removeTodo';
import Single from './Single';

const mapStateToProps = ({ todos }) => ({
  todos
});

const mapDispatchToProps = dispatch => ({
  removeTodo(id) {
    dispatch(removeTodo(id));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Single);
