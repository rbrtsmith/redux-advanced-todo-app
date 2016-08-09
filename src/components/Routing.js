import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';

import { store, history } from '../store';


import Root from './Root';
import MainContainer from './MainContainer';
import SingleContainer from './SingleContainer';
import NotFound from './NotFound';
import AddTodoContainer from './AddTodoContainer';

const Routing = () => (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={Root}>
        <Route path="single/:todoId" component={SingleContainer} />
        <Route path="add-todo" component={AddTodoContainer} />
        <IndexRoute component={MainContainer} />
      </Route>
      <Route path="*" component={Root}>
        <IndexRoute component={NotFound} />
      </Route>
    </Router>
  </Provider>
);

export default Routing;
