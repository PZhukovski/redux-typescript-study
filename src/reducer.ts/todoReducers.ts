import { TodoAction, TodoState, TodosActionTypes } from "../types/todo"

const initualState : TodoState={
    todos: [],
    loading: false,
    error: null ,
    page: 1 ,
    limit: 10
}

export const todoReducer = (state = initualState, action: TodoAction): TodoState => {
    switch (action.type) {
        case TodosActionTypes.FETCH_TODOS:
            return { ...state, loading: true }
        case TodosActionTypes.FETCH_TODOS_SUCCESS:
            return {...state, loading: false, todos: action.payload}
        case TodosActionTypes.FETCH_TODOS_ERROR:
            return {...state, loading: false, error: action.payload }
        case TodosActionTypes.SET_TODO_PAGE:
            return {...state, page: action.payload }
        default: 
        return state
    }
}