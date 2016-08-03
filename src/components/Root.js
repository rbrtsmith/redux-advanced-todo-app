import React from 'react';
import { Link } from 'react-router';

const Root = ({ children }) => (
  <div>
    <header className="c-app-header">
      <div className="o-site-wrap o-site-wrap--padding">
        <h1>
          <Link to="/">
            Advanced todos
          </Link>
        </h1>
      </div>
    </header>
    {children}
  </div>
);

Root.propTypes = {
  children: React.PropTypes.node
};

export default Root;
