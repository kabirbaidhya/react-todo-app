import React from 'react';
import { flags } from '../../services/featureflags'
import InputWrapper from './InputWrapper';

export default function Header(props) {
    return (
        <header>
            <h1>{flags.title.getValue()}</h1>
            <InputWrapper {...props}/>
        </header>
    );
}
