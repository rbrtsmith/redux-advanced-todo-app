import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import Root from './components/Root';
import Main from './components/Main';
import Single from './components/Single';

const router = (
  <Router history={browserHistory}>
    <Route path="/" component={Root}>
      <Route path="/single/:todoId" component={Single} />
      <IndexRoute component={Main} />
    </Route>
  </Router>
);

render(router, document.querySelector('#app'));