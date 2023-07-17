export const addTodoActions = {
    type: 'todoList/addTodo',
    payload: {id : 5, name : 'Learn Football' , completed : false , priority: 'Medium'}
}

export const addTodo = (data)=>{
    return {
        type: 'todoList/addTodo',
        payload: data
    }
}

// action creators => function