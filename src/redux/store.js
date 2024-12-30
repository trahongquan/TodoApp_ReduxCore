// import { createStore } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";
// import rootReducer from "./reducer";
import { configureStore } from '@reduxjs/toolkit'
import filterSlice from '../components/Filters/slideReducerFilter';
import todoListSlice from '../components/TodoList/slideReducerTodoList';

// const composedEnhancers = composeWithDevTools()
// const store = createStore(rootReducer, composedEnhancers);
// export default store;


const store = configureStore({
    reducer: {
        filters: filterSlice.reducer,
        todoList: todoListSlice.reducer,
    }
})

export default store;