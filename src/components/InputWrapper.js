import React from 'react';
import InputBox from './InputBox';
import {MODE_SEARCH, MODE_CREATE} from './../services/mode';

export default function InputWrapper(props) {
    const {mode, addNew} = props;

    switch (mode) {
        case MODE_CREATE:
            return <InputBox {...{addNew}}/>;

        case MODE_SEARCH:
            return null;

        default:
            return null;
    }
}
