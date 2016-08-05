import { connect } from 'react-redux';
import { browserHistory } from 'react-router';


import addTodo from '../actions/addTodo';

import AddTodo from './AddTodo';

const mapDispatchToProps = dispatch => ({
  publishNewTodo(e, title, description, priority) {
    e.preventDefault();
    const payload = {
      id: `T${+new Date()}`,
      title,
      description,
    };
    if (priority) {
      payload.priority = priority;
    }
    dispatch(addTodo(payload));
    browserHistory.push('/');
  }
});

export default connect(
  undefined,
  mapDispatchToProps
)(AddTodo);
