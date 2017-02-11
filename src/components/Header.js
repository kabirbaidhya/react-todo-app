import React from 'react';
import InputBox from './InputBox';

export default function Header(props) {
    const {title} = props;

    return (
        <header>
            <h1>{title.toUpperCase()}</h1>
            <InputBox/>
        </header>
    );
}
