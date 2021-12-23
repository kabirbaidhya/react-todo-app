import React from 'react';

function Header(props) {
  const { title } = props;

  return <h1>{title.toUpperCase()}</h1>;
}

export default Header;
