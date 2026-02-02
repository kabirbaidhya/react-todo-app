import update from 'immutability-helper';

// Priority constants
export const PRIORITY_HIGH = 'High';
export const PRIORITY_MEDIUM = 'Medium';
export const PRIORITY_NORMAL = 'Normal';

// Priority order for sorting (higher number = higher priority)
const PRIORITY_ORDER = {
    [PRIORITY_HIGH]: 3,
    [PRIORITY_MEDIUM]: 2,
    [PRIORITY_NORMAL]: 1
};

/**
 * Get the list of todo items.
 * @return {Array}
 */
export function getAll() {
    return [
        {
            id: 1,
            text: 'Learn Javascript',
            completed: false,
            priority: PRIORITY_HIGH
        },
        {
            id: 2,
            text: 'Learn React',
            completed: false,
            priority: PRIORITY_MEDIUM
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

    return sortByPriority(list.concat([item]));
}

/**
 * Sorts the todo list by priority (High > Medium > Normal).
 * Completed items are always moved to the bottom.
 *
 * @param {Array} list
 * @return {Array}
 */
export function sortByPriority(list) {
    return [...list].sort((a, b) => {
        // Completed items should always be at the bottom
        if (a.completed !== b.completed) {
            return a.completed ? 1 : -1;
        }
        
        // If both have same completion status, sort by priority
        const priorityA = PRIORITY_ORDER[a.priority] || PRIORITY_ORDER[PRIORITY_NORMAL];
        const priorityB = PRIORITY_ORDER[b.priority] || PRIORITY_ORDER[PRIORITY_NORMAL];
        
        return priorityB - priorityA;
    });
}

// LocalStorage key
const STORAGE_KEY = 'todo-app-data';

/**
 * Save todo list to LocalStorage
 * @param {Array} list
 */
export function saveToStorage(list) {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
    } catch (e) {
        console.error('Failed to save to LocalStorage:', e);
    }
}

/**
 * Load todo list from LocalStorage
 * @return {Array|null}
 */
export function loadFromStorage() {
    try {
        const data = localStorage.getItem(STORAGE_KEY);
        return data ? JSON.parse(data) : null;
    } catch (e) {
        console.error('Failed to load from LocalStorage:', e);
        return null;
    }
}
