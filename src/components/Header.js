import React from 'react';

export default function Header(props) {
    const {title} = props;

    return (
        <h1>{title.toUpperCase()}</h1>
    );
}
