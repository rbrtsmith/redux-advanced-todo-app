import { connect } from 'react-redux';

import removeTodo from '../actions/removeTodo';
import toggleUpdateFormVisibility from '../actions/toggleUpdateFormVisibility';

import Single from './Single';

const mapStateToProps = ({ todos, updateForms }) => ({
  todos,
  updateForms
});

const mapDispatchToProps = dispatch => ({
  removeTodo(payload) {
    dispatch(removeTodo(payload));
  },
  toggleUpdateFormVisibility(payload) {
    dispatch(toggleUpdateFormVisibility(payload));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Single);
