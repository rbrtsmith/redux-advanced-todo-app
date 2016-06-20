import React from 'react';
import sanitise from '../utils/sanitise';

const Greeting = ({ msg = 'World' }) => (
  <div>
    <h2>Hello {sanitise(msg)}</h2>
    <p>Welcome to our new APP!</p>
  </div>
);

Greeting.propTypes = {
  msg: React.PropTypes.string
};

export default Greeting;
