import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';

import store, { history } from './store';

import Root from './components/Root';
import Main from './components/Main';
import SingleContainer from './components/SingleContainer';
import NotFound from './components/NotFound';

const Base = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={Root}>
        <Route path="single/:todoId" component={SingleContainer} />
        <IndexRoute component={Main} />
      </Route>
      <Route path="*" component={Root}>
        <IndexRoute component={NotFound} />
      </Route>
    </Router>
  </Provider>
);

render(Base, document.querySelector('#app'));
