import React from 'react';
import InputWrapper from './InputWrapper';  

export default function Header(props) {
    return (
        <header>
            <img src="./assets/images/5492.jpg" alt="Cricket"/>
            <h1>Things To Do</h1>
            <InputWrapper {...props}/>
        </header>
    );
}
