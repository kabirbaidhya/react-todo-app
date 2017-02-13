import React from 'react';
import Filter from './Filter';
import {MODE_CREATE, MODE_SEARCH} from './../services/mode';

export default function Footer(props) {
    const {count, filter, changeFilter, mode} = props;

    return (
        <div className="todo-footer clearfix">
            <div className="pull-left buttons">
                <a title="Add New" className={'button add ' + (mode === MODE_CREATE ? 'selected' : '')}></a>
                <a title="Search" className={'button search ' + (mode === MODE_SEARCH ? 'selected' : '')}></a>
            </div>
            <div className="pull-left">
                {`${count} items left`}
            </div>
            <div className="pull-right">
                <Filter filter={filter} change={changeFilter}/>
            </div>
        </div>
    );
}
