import React from 'react';
import { Link } from 'react-router';

const Root = ({ children }) => (
  <div>
    <Link to="/">
      <h1>Todo App</h1>
    </Link>
    {children}
  </div>
);

Root.propTypes = {
  children: React.PropTypes.node
};

export default Root;
