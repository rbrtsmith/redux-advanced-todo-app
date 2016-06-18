import React from 'react';

const Greeting = ({ msg }) => <div>Hello {msg}</div>;

Greeting.propTypes = {
  msg: React.PropTypes.string
};

export default Greeting;
