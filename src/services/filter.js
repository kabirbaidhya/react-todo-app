
export function applyFilter(list, filter) {
    switch (filter) {
        case 'completed':
            return list.filter(item => item.completed === true);

        case 'active':
            return list.filter(item => item.completed !== true);

        default:
            return list;
    }
}
