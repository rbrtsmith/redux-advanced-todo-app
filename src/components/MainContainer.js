import { connect } from 'react-redux';

import Main from './Main';

const mapStateToProps = ({ todos }) => ({
  todos
});

export default connect(
  mapStateToProps
)(Main);
