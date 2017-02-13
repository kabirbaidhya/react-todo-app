import React from 'react';

export default function SearchBox(props) {
    const {query, search} = props;

    return (
        <input
            type="text"
            className="form-control search"
            value={query}
            onChange={e => search(e.target.value)}
            placeholder="Search"
        />
    );
}
