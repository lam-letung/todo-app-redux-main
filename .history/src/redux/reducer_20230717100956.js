import filterReducer from "../components/Filters/FiltersSlice";


const rootReducer = (state  , action)=>{
  return {
    filter: filterReducer(state .filters , action) ,
    todoList:  ,
  }
}

export default rootReducer;