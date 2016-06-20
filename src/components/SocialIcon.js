import React from 'react';

const SocialIcon = ({ icon }) => (
  <svg>
    <use xlinkHref={`./assets/images/icons.svg#icon-${icon}`}></use>
  </svg>
);

SocialIcon.propTypes = {
  icon: React.PropTypes.string.isRequired
};

export default SocialIcon;
