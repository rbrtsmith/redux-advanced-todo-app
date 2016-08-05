import React from 'react';

const NotFound = ({ location, history }) => (
  <div>
    <p>Pathname <em>{location.pathname}</em> could not be found</p>
    <button className="c-btn c-btn--md c-btn--brand" onClick={history.goBack}>
      &larr; Go back
    </button>
  </div>
);

NotFound.propTypes = {
  location: React.PropTypes.object.isRequired,
  history: React.PropTypes.object.isRequired
};

export default NotFound;
