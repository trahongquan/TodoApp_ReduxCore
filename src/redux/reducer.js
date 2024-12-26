import filterReducer from "../components/Filters/slideReducerFilter";
import todoListReducer from "../components/TodoList/slideReducerTodoList";

const rootReducer = (state = {}, action) => {
    return {
        filter: filterReducer(state.filters, action),
        todoList: todoListReducer(state.todoList, action),
    };
}

export default rootReducer;