/**
 * Redux core
import { legacy_createStore as createStore } from "redux";
import rootReducer from "./reducer";
import { composeWithDevTools } from "redux-devtools-extension";

const composedEnhancers = composeWithDevTools();

const store = createStore(rootReducer, composedEnhancers);

export default store;

*/

import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "../components/Filters/filtersSlice";
import todoListReducer from "../components/TodoList/todoSlice";

const store = configureStore({
    reducer :{
        filters: filterReducer,
        todoList : todoListReducer,
    }
})

export default store;

