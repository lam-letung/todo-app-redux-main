import {combineReducers} from 'redux';
import filterReducer from "./components/Filters/filtersSlice";
import todoListReducer from "./components/TodoList/todoSlice";



const rootReducer = combineReducers({
    filters: filterReducer,
    todoList : todoListReducer,
})

export default rootReducer;
