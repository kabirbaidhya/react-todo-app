import React from 'react';

export default function Filter(props) {
    return (
        <ul className="filters list-unstyled clearfix">
            <li>
                <a className="selected">All</a>
            </li>
            <li>
                <a>Active</a>
            </li>
            <li>
                <a>Completed</a>
            </li>
        </ul>
    );
}
