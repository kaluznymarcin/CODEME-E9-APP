import React from 'react';

import Title from './Title';

export default (props) => (
  <header className="pageHeader">
    <Title>{props.children}</Title>
  </header>
);
