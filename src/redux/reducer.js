const initState = {
    filters: {
        search: '',
        status: '',
        priority: []
    },
    todoList : [
        {id: 1, name: 'Learn x', complete: false, priority: 'Medium'},
        {id: 2, name: 'Learn y', complete: true, priority: 'High'},
        {id: 3, name: 'Learn z', complete: false, priority: 'Low'},
    ]
}
const rootReducer = (state = initState, action) => {
    switch (action.type) {
        case 'todoList/addTodo':
            return {
                ...state,
                todoList: [
                    ...state.todoList, // copy và giữ nguyên todoList cũ
                    action.payload //Thêm vào phía cuối của todoList
                ]
            }
        case 'filters/searchFilterChange':
        return {
            ...state,
            filters: {
                ...state.filters,
                search: action.payload
            }
        }
        default:
            return state
    }
}

export default rootReducer;