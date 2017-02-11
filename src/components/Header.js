import React from 'react';

export default function Header(props) {
    const {title} = props;

    return (
        <header>
            <h1>{title.toUpperCase()}</h1>
            <input type="text" className="form-control add-todo" placeholder="Add New" />
        </header>
    );
}
