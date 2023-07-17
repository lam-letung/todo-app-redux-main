export const todoListSelector = (state)=> {
    const todoRemaining = state.todoList.filter((todo)=>{
        
        return todo.name.includes(searchTextSelector);
    })
    return todoRemaining;
};
export const searchTextSelector = (state)=> state.filters.search;