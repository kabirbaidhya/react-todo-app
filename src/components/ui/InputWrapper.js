import React from 'react';
import InputBox from './InputBox';
import SearchBox from './SearchBox';
import { MODE_SEARCH, MODE_CREATE, MODE_EDIT } from '../../services/mode';

export default function InputWrapper(props) {
    const { mode, addNew, query, setSearchQuery, editingItem, editingText, setEditingText, updateItem } = props;

    switch (mode) {
        case MODE_CREATE:
            return <InputBox {...{ addNew }} />;

        case MODE_SEARCH:
            return <SearchBox {...{ query, setSearchQuery }} />;

        case MODE_EDIT:
            if (!editingItem) {
                return null;
            }

            return (
                <InputBox
                    key={editingItem.id}
                    value={editingText}
                    handleChange={text => {
                        setEditingText(text)
                    }}
                    handleKeyUp={event => {
                        if (event.key === 'Enter') {
                            updateItem(editingItem.id, editingText);

                        }
                    }}
                />
            );
        default:
            return null;
    }
}
