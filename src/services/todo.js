import update from 'immutability-helper';

/**
 * Priority levels
 */
export const PRIORITY_HIGH = 'High';
export const PRIORITY_MEDIUM = 'Medium';
export const PRIORITY_NORMAL = 'Normal';

/**
 * Get the list of todo items from localStorage.
 * @return {Array}
 */
export function getAll() {
    const storedTodos = localStorage.getItem('todos');
    if (storedTodos) {
        return JSON.parse(storedTodos);
    }
    return [
        {
            id: 1,
            text: 'Learn Javascript',
            completed: false,
            priority: PRIORITY_NORMAL
        },
        {
            id: 2,
            text: 'Learn React',
            completed: false,
            priority: PRIORITY_NORMAL
        },
        {
            id: 3,
            text: 'Build a React App',
            completed: false,
            priority: PRIORITY_NORMAL
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

/**
 * A counter to generate a unique id for a todo item.
 * Can remove this logic when the todo is created using backend/database logic.
 * @type {Number}
 */
let todoCounter = 1;

function getNextId() {
    return getAll().length + todoCounter++;
}

/**
 * Adds a new item on the list and returns the new updated list (immutable).
 *
 * @param {Array} list
 * @param {Object} data
 * @return {Array}
 */
export function addToList(list, data) {
    let item = Object.assign({
        id: getNextId(),
        priority: PRIORITY_NORMAL
    }, data);

    return list.concat([item]);
}

/**
 * Sorts the todo list by priority and completion status.
 * Completed tasks sink to the bottom.
 * Priority order: High > Medium > Normal
 * @param {Array} list
 * @return {Array}
 */
export function sortList(list) {
    const priorityOrder = {
        [PRIORITY_HIGH]: 3,
        [PRIORITY_MEDIUM]: 2,
        [PRIORITY_NORMAL]: 1
    };

    return [...list].sort((a, b) => {
        // Completed tasks sink to bottom
        if (a.completed !== b.completed) {
            return a.completed ? 1 : -1;
        }
        // Sort by priority
        return priorityOrder[b.priority] - priorityOrder[a.priority];
    });
}
