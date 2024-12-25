const initState = {
    filter: {
        search: '',
        status: '',
        priority: []
    },
    todoList : [
        {id: 1, name: 'Learn x', complete: false, priority: 'Medium'},
        {id: 2, name: 'Learn y', complete: true, priority: 'High'},
        {id: 2, name: 'Learn z', complete: false, priority: 'Low'},
    ]
}
const rootReducer = (state = initState, action) => {
    switch (action.type) {
        case 'todoLisst/addTodo':
            return {
                ...state,
                todoList: [
                    ...state.todoList, // copy và giữ nguyên todoList cũ
                    action.payload //Thêm vào phía cuối của todoList
                ]
            }

        default:
            return state
    }
}

export default rootReducer;