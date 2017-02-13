import React from 'react';
import InputBox from './InputBox';

export default function Header(props) {
    return (
        <header>
            <h1>Things To Do</h1>

            <InputBox addNew={props.addNew}/>
        </header>
    );
}
