import {combineReducers} from 'redux';
import filterReducer from "../components/Filters/FiltersSlice";
import todoListReducer from "../components/Todo/TodoSlice";



const rootReducer = combineReducers({
    filters: filterReducer,
    todoList : todoListReducer,
})

export default rootReducer;
