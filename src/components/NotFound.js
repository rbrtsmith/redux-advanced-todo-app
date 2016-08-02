import React from 'react';

const NotFound = ({ location, history }) => (
  <div>
    <p>Pathname <em>{location.pathname}</em> could not be found</p>
    <p onClick={history.goBack}>
      &larr; Go back
    </p>
  </div>
);

NotFound.propTypes = {
  location: React.PropTypes.object.isRequired,
  history: React.PropTypes.object.isRequired
};

export default NotFound;
