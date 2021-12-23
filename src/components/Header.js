import React from 'react';
import InputBox from './InputBox';

function Header(props) {
  const { title, addNewItem } = props;

  return (
    <header>
      <h1>{title.toUpperCase()}</h1>
      <InputBox addNewItem={addNewItem} />
    </header>
  );
}

export default Header;
