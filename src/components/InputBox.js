import React, { useState, useCallback } from 'react';
import { KEY_RETURN } from 'keycode-js';

function InputBox() {
  const [value, setValue] = useState('');
  const handleKeyUpEvent = useCallback(e => {
    if (e.keyCode === KEY_RETURN) {
      // Add new Todo Here
      // Clear the text box
      console.log('KEY_RETURN pressed');
    }
  }, []);
  const handleChangeEvent = useCallback(
    e => {
      setValue(e.target.value);
    },
    [setValue]
  );

  return (
    <input
      type="text"
      className="form-control add-todo"
      value={value}
      onKeyUp={handleKeyUpEvent}
      onChange={handleChangeEvent}
      placeholder="Add New"
    />
  );
}

export default InputBox;
