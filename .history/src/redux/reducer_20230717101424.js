import filterReducer from "../components/Filters/FiltersSlice";
import todoListReducer from "../components/Todo/TodoSlice";


const rootReducer = (state  , action)=>{
  return {
    filters: filterReducer(state.filters , action) ,
    todoList:  todoListReducer(state.todoList, action),
  }
}

export default rootReducer;