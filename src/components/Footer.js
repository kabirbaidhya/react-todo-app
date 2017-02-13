import React from 'react';
import Filter from './Filter';

export default function Footer(props) {
    const {count, filter, changeFilter} = props;

    return (
        <div className="todo-footer clearfix">
            <div className="pull-left buttons">
                <a className="button add"></a>
                <a className="button search"></a>
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
