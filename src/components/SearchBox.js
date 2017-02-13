import React from 'react';

export default function SearchBox(props) {
    const {query, setSearchQuery} = props;

    return (
        <input
            type="text"
            className="form-control search"
            value={query}
            onChange={e => setSearchQuery(e.target.value)}
            placeholder="Search"
        />
    );
}
