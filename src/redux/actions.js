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

export const searchFilterChange = (text) => {
    return {
        type: 'filters/searchFilterChange',
        payload: text,
    }
}