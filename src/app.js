import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

import Main from './components/Main';
import Single from './components/Single';

render(
  <Router history={browserHistory}>
    <Route path="/single/:todoId" component={Single} />
    <Route path="/" component={Main} />
  </Router>,
  document.querySelector('#app')
);