import { connect } from 'react-redux';

import toggleUpdateFormVisibility from '../actions/toggleUpdateFormVisibility';

import Single from './Single';

const mapStateToProps = ({ todos, updateForms }) => ({
  todos,
  updateForms
});

const mapDispatchToProps = dispatch => ({
  toggleUpdateFormVisibility(payload) {
    dispatch(toggleUpdateFormVisibility(payload));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Single);
