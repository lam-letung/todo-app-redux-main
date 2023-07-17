
const initState = {
     filter:{
        search:'',
        status : 'All',
        priority: []
     },
     todoList: [
        {id : 1, name : 'Learn more' , completed : false , priority: 'Medium'},
        {id : 2, name : 'Learn Redux' , completed : true , priority: 'Hight'},
        {id : 3, name : 'Learn React' , completed : false , priority: 'Low'},
     ]
}

const rootReducer = (state = initState , action)=>{
    switch(action.type){
        case 'todoList/addTodo':
            return{
                ...state,
                todoList:[
                    ...state.todoList,
                    {id : 5, name : 'Learn Football' , completed : false , priority: 'Medium'}
                ]
            }
        default: return state;
    }
}

export default rootReducer;