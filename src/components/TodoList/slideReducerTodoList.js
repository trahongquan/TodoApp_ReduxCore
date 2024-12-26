const initState = [
    { id: 1, name: "Learn x", complete: false, priority: "Medium" },
    { id: 2, name: "Learn y", complete: true, priority: "High" },
    { id: 3, name: "Learn z", complete: false, priority: "Low" },
];
const todoListReducer = (state = initState, action) => {
    switch (action.type) {
        case "todoList/addTodo":
        return [
            ...state, // copy và giữ nguyên todoList cũ
            action.payload, //Thêm vào phía cuối của todoList
        ];
        case "todoList/toggleStatusTodo":
        return state.map((todo) =>
            todo.id === action.payload
            ? { ...todo, complete: !todo.complete }
            : todo
        );
        default:
        return state;
    }
};

export default todoListReducer;
