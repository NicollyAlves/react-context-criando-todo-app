import { createContext, useState } from "react";

export const TodosContext = createContext({})

export const TodosProvider = ({children}) => {
    const [ todos, setTodos ] = useState([])

    const saveNewTodo = (task) => {
        if (!task) return;
        
        const newTodo = {
            id: todos.length + 1,
            task: task,
            completed: false
        }

        setTodos(oldTodos => [...oldTodos, newTodo])
    }

    const deleteTodo = (id) => {
        const filteredTodos = todos.filter(todo => todo.id !== id)

        setTodos(filteredTodos)
    }

    const completeTask = (id) => {
        const filteredTodos = todos.map(todo => (
            todo.id === id ? {...todo, completed: !todo.completed} : todo
        ))

        setTodos(filteredTodos)
    }

    return (
        <TodosContext.Provider value={{todos, saveNewTodo, deleteTodo, completeTask}} >
            {children}
        </TodosContext.Provider>
    )
}