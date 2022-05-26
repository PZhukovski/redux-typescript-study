import { TodoAction, TodosActionTypes } from "../types/todo";
import { Dispatch } from "redux";
import axios from "axios";

//https://jsonplaceholder.typicode.com/todos
export const fetchTodos =(page = 1, limit = 10) =>{
    return async (dispatch: Dispatch<TodoAction>) =>{
        try {
          dispatch({type: TodosActionTypes.FETCH_TODOS})
          const res = await axios.get('https://jsonplaceholder.typicode.com/todos' , {
            params: {_page: page, _limit: limit}
          })
          
          dispatch({type: TodosActionTypes.FETCH_TODOS_SUCCESS, payload: res.data})
        }catch(e) {
          dispatch({type: TodosActionTypes.FETCH_TODOS_ERROR, payload: 'Произошла ошибка пр загрузке пользователя' })
        }
    }
}

export const setTodoPage = (page: number): TodoAction=>{
    return {type: TodosActionTypes.SET_TODO_PAGE, payload: page}
}