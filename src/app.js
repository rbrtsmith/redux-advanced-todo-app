import React from 'react';
import ReactDOM from 'react-dom';
import Greeting from './components/Greeting';

const App = () => (
  <div>
    <h1>App</h1>
    <Greeting msg="WoRlD" />
  </div>
);

ReactDOM.render(<App />, document.querySelector('#app'));
