// const initState = {
//     search: '',
//     status: 'All',
//     priorities: []
// }
// const filterReducer = (state = initState, action) => {
//     switch (action.type) {
//         case 'filters/searchFilterChange':
//         return {
//             ...state,
//             search: action.payload
//         }
//         case 'filters/statusFilterChange':
//         return {
//             ...state,
//             status: action.payload
//         }
//         case 'filters/prioritiesFilterChange':
//         return {
//             ...state,
//             priorities: action.payload
//         }
//         default:
//             return state
//     }
// }

// export default filterReducer;

/////////////////////////
///Viết với redux toolkit
/////////////////////////
import { createSlice } from '@reduxjs/toolkit';

export default createSlice({
    name: 'filters',
    initialState: {
        search: '',
        status: 'All',
        priorities: []
    },
    reducers: {
        //Sẽ trả về một action có dạng name + tên hàm reducers slide
        // sẽ ko còn phải tạo ra 1 file action riêng nữa
        searchFilterChange: ( state, action ) => {
            //cách viết giống như muitaion 
            state.search = action.payload
            // => {type: 'filters/searchFilterChange'}
        }, 
        statusFilterChange: ( state, action ) => {
            state.status = action.payload
        },
        prioritiesFilterChange: ( state, action ) => {
            state.priorities = action.payload
        },

    }
})

// export default filterSlice;