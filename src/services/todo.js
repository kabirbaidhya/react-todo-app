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

export function createNew(text) {
    let nextId = this.state.items.length + 1;
    let item = {
        id: nextId,
        text: text
    };

    return item;
}
