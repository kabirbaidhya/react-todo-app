import React from 'react';
import { flags } from '../../services/featureflags'
import {MODE_NONE, MODE_CREATE, MODE_SEARCH} from '../../services/mode';

export default function ButtonWrapper(props) {
    const {mode, changeMode} = props;
    const isCreateMode = () => mode === MODE_CREATE;
    const isSearchMode = () => mode === MODE_SEARCH;

    return (
        <div>
            <a title="Add New"
                className={'button add ' + (isCreateMode() ? 'selected' : '')}
                onClick={() => changeMode(isCreateMode() ? MODE_NONE : MODE_CREATE)}></a>
            { flags.search.isEnabled() && 
            <a title="Search"
                className={'button search ' + (isSearchMode() ? 'selected' : '')}
                onClick={() => changeMode(isSearchMode() ? MODE_NONE : MODE_SEARCH)}></a>
            }
        </div>
    );
}
