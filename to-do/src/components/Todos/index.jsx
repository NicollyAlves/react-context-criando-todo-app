import { useContext } from "react";
import { TodosContext } from "../../contexts/todos"

export const Todos = () => {
    const { todos, deleteTodo, completeTask } = useContext(TodosContext)

    return (
        <div className="todos-list" >
            <h1>Lista de Tarefas</h1>

            <ul>
                {!todos.length ? (
                    <p>Lista Vazia</p>
                ) : (
                    todos.map(todo => (
                        <li key={todo.id} >
                            <input 
                            type="checkbox" 
                            onClick={() => completeTask(todo.id)}
                            />

                            <span
                                style={{
                                    textDecoration:
                                        todo.completed && "line-through"
                                }}>
                                {todo.task}
                            </span>

                            <button 
                                onClick={() => deleteTodo(todo.id)}
                                type="button"
                            >excluir</button>
                        </li>
                    ))
                )}
            </ul>
        </div>
    )
}