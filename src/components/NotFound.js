import React from 'react';
import { Link } from 'react-router';

const NotFound =  ({ location, history }) => (
  <div>
    <p>Pathname <em>{location.pathname}</em> could not be found</p>
    <p onClick={history.goBack}>
      &larr; Go back
    </p>
  </div>
);

export default NotFound;
