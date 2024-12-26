import { createSelector } from "reselect";

// export const todoListSelector = (state) => {
//     const todoRemaining = state.todoList.filter((todo) => {
//         return todo.name.includes(state.filter.filters.search) 
//     });
//     return todoRemaining;
// };

const todoListSelector = (state) => state.todoList
const searchTextSelector = (state) => state.filter.filters.search

export const todoListRemainingSelector = createSelector(
    todoListSelector,
    searchTextSelector,
    (todoList, searchText) => {
        return todoList.filter((todo) => {
            return todo.name.includes(searchText)
        })
    })