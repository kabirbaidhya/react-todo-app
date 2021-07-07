import React from 'react';

export default function SearchBox({query, setSearchQuery}) {
    return (
        <input
            type="text" autoFocus
            className="form-control search"
            value={query}
            onChange={e => setSearchQuery(e.target.value)}
            placeholder="Search"
        />
    );
}
