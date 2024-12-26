
// export const todoListSelector = (state) => {
//     const todoRemaining = state.todoList.filter((todo) => {
//         return todo.name.includes(state.filters.search)
//     });
//     return todoRemaining;
// };

import { createSelector } from "reselect";

const todoListSelector = (state) => state.todoList
const searchTextSelector = (state) => state.filters.search
const statusSelector = (state) => state.filters.status
const prioritiesSelector = (state) => state.filters.priorities

export const todoListRemainingSelector = createSelector(
    todoListSelector,
    searchTextSelector,
    statusSelector,
    prioritiesSelector,
    (todoList, searchText, status, priorities) => {
        return todoList.filter((todo) => {
            if(status === 'All') {
                return priorities.length
                ? todo.name.includes(searchText) && priorities.includes(todo.priority)
                : todo.name.includes(searchText)
            }

            return (
                todo.name.includes(searchText) &&
                (status === 'Completed' ? todo.complete : !todo.complete) && 
                (priorities.length ? priorities.includes(todo.priority) : true)
            )
            
        })
    })