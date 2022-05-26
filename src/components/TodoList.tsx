import React, { FC, useEffect } from "react"
import { useTypeSelector } from "../hooks/useTypesSelector";
import { fetchTodos, setTodoPage } from "../action-creators/todo";
import { bindActionCreators } from "redux";
import { useActions } from "../hooks/useActions";

const TodoList: FC = () => {
    const { page, limit, todos, loading, error } = useTypeSelector(state => state.todoReducer);
    const { fetchTodos, setTodoPage } = useActions();
    const pages = [1, 2, 3, 4, 5];
    useEffect(() => {
        fetchTodos(page);
    }, [page])
    if (loading) {
        return <h1>Идет загрузка....</h1>
    }
    if (error) {
        return <h1>{error}</h1>
    }
    return (
        <div>
            {todos.map(todo =>
                <div key={todo.id}>
                    {todo.id} - {todo.title}
                </div>
            )}
            <div style={{ display: 'flex' }}>
                {pages.map(p =>
                    <div
                    onClick = {()=>setTodoPage(p)}
                        style={{ border: p === page ? '2px solid green' : '1px solid gray', padding: 10 }}
                    >
                        {p}
                    </div>
                )}
            </div>

        </div>
    );
};

export default TodoList;