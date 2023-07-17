import {combineReducers} from 'redux';
import filterReducer from "../components/Filters/FiltersSlice";
import todoListReducer from "../components/Todo/TodoSlice";

// const rootReducer = (state ={}, action) => {
//   return {
//     filters: filterReducer(state.filters, action),
//     todoList: todoListReducer(state.todoList, action),
//   };
// };

const rootReducer = combineReducers({
    filter: filterReducer,
    todoList : todoListReducer,
})

export default rootReducer;
