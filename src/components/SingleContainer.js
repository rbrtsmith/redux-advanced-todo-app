import { connect } from 'react-redux';

import Single from './Single';

const mapStateToProps = ({ todos }) => ({
  todos
});


export default connect(
  mapStateToProps
)(Single);
