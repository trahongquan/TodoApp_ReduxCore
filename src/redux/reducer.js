import { combineReducers } from "redux";
import filterReducer from "../components/Filters/slideReducerFilter";
import todoListReducer from "../components/TodoList/slideReducerTodoList";

// const rootReducer = (state = {}, action) => {
//     return {
//         filters: filterReducer(state.filters, action),
//         todoList: todoListReducer(state.todoList, action),
//     };
// }
/**
 * Sử dụng combineReducers của redux sẽ rút gọn code lại thành như dưới
 * Khi sử dụng Redux toolkit thì không cần dùng đến file này 
*/
const rootReducer = combineReducers({
    filters: filterReducer,
    todoList: todoListReducer,
})

export default rootReducer;

/**
 * Khi sử dụng Redux toolkit thì không cần dùng đến file này
 * 
 */