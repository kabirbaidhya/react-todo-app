import update from 'immutability-helper';

/**
 * Get the list of todo items.
 * @return {Array}
 */
export function getAll() {
    return [
        {
            id: 1,
            text: 'Learn Javascript',
            completed: false
        }, {
            id: 2,
            text: 'Learn React',
            completed: false
        }, {
            id: 3,
            text: 'Build a React App',
            completed: false
        }
    ]
}

export function getItemById(itemId) {
    return getAll().find(item => item.id === itemId);
}

export function updateStatus(items, itemId, completed) {
    let index = items.findIndex(item => item.id === itemId);

    // Returns a new list of data with updated item.
    return update(items, {
        [index]: {
            completed: {$set: completed}
        }
    });
}

export function createNew(text) {
    let nextId = this.state.items.length + 1;
    let item = {
        id: nextId,
        text: text
    };

    return item;
}
