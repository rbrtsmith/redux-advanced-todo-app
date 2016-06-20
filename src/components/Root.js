import React from 'react';
import Greeting from './Greeting';
import SocialIcon from './SocialIcon';

export default () => (
  <div>
    <h1>App</h1>
    <Greeting msg="DeVeLoPeR" />
    <SocialIcon icon="facebook" />
    <SocialIcon icon="youtube" />
  </div>
);
