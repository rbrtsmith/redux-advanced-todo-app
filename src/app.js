import React from 'react';
import ReactDOM from 'react-dom';
import Greeting from './greeting';

const App = () => (
  <div>
    <h1>App</h1>
    <Greeting msg="World"/>
  </div>
);

ReactDOM.render(<App />, document.querySelector('#app'));

