import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

import removeTodo from '../actions/removeTodo';

import RemoveTodo from './RemoveTodo';


const mapDispatchToProps = (dispatch, { id }) => ({
  removeTodo(e) {
    e.preventDefault();
    dispatch(removeTodo({
      id
    }));
    browserHistory.push('/');
  },
});

export default connect(
  undefined,
  mapDispatchToProps
)(RemoveTodo);
