// export const addTodoAction = {
//     type: 'todoList/addTodo',
//     payload: {id: 5, name: 'Learn p', complete: false, priority: 'Medium'},
// }

// Action bản chất là một obj thường có type, payload.
// Tuy nhiên do action được dùng nhiều lân nên thường triển khai thành hàm

export const addTodo = (data) => {
    return {
        type: 'todoList/addTodo',
        payload: data,
    }
}

export const toggleStatusTodo = (id) => {
    return {
        type: 'todoList/toggleStatusTodo',
        payload: id
    }
}

export const searchFilterChange = (text) => {
    return {
        type: 'filters/searchFilterChange',
        payload: text,
    }
}

export const statusFilterChange = (status) => {
    return {
        type: 'filters/statusFilterChange',
        payload: status,
    }
}

export const prioritiesFilterChange = (priorities) => {
    return {
        type: 'filters/prioritiesFilterChange',
        payload: priorities,
    }
}

/**
 * Khi sử dụng Redux toolkit thì không cần dùng đến file này
 * 
*/