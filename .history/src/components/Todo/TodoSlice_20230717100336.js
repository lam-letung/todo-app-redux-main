const initState = [
  
       {id : 1, name : 'Learn more' , completed : false , prioriry: 'Medium'},
       {id : 2, name : 'Learn Redux' , completed : true , prioriry: 'Hight'},
       {id : 3, name : 'Learn React' , completed : false , prioriry: 'Low'},
]

const TodoSlice = (state = initState , action)=>{
   console.log({state, action});
   switch(action.type){
       case 'todoList/addTodo':
           return{
               ...state,
               todoList:[
                   ...state.todoList,
                  action.payload
               ]
           }
       case 'filters/searchFilterChange':
           return {
               ...state,
               filters :{
                   ...state.filter,
                   search : action.payload
               }
           }
       default: return state;
   }
}

export default TodoSlice;