import React from 'react';
import { Link } from 'react-router';

const Main = () => (
  <div>
    <h1>Main</h1>
    <Link to="/single/foo">
      To single
    </Link>
  </div>
);

export default Main;
