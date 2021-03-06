import { connect } from 'react-redux';
import { browserHistory } from 'react-router';


import addTodo from '../actions/addTodo';
import updateAddTodoFormFieldValue from '../actions/updateAddTodoFormFieldValue';
import resetAddTodoFormFieldValue from '../actions/resetAddTodoFormFieldValue';


import AddTodo from './AddTodo';

const mapStateToProps = ({ addTodoFormFieldValues }) => ({
  addTodoFormFieldValues
});

const mapDispatchToProps = dispatch => ({
  publishNewTodo(e, { title, description, priority }) {
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
    dispatch(resetAddTodoFormFieldValue());
    browserHistory.push('/');
  },
  updateAddTodoFormFieldValue(field, value) {
    const payload = {
      field,
      value
    };
    dispatch(updateAddTodoFormFieldValue(payload));
  }
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddTodo);
