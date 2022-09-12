import React from "react";
import { Todo } from "../../type";
import TodoContext from "./TodoContext";

interface TodoProviderProps {
    children: React.ReactNode
}

const DEFAULT_TODO_LIST = [
    { id: 1, name: 'task: 1', description: 'description 1', checked: false },
    { id: 2, name: 'task: 2', description: 'description 2', checked: true },
]

const TodoProvider: React.FC<TodoProviderProps> = ({ children }) => {
    const [todos, setTodos] = React.useState(DEFAULT_TODO_LIST);
    const [todoIdForEdit, setTodoIdForEdit] = React.useState<Todo['id'] | null>(null);

    const selectTodoIdForEdit = (id: Todo['id']) => {
        setTodoIdForEdit(id);
    }

    const addTodo = ({ name, description }: Omit<Todo, 'checked' | 'id'>) => {
        if (name.length !== 0 && description.length !== 0){
        setTodos([...todos, { id: todos[todos.length -1].id + 1, description, name, checked: false }])
    }if(name.length == 0){
        alert('Error, field "Name" is empty')
    }if(description.length == 0){
        alert('Error, field "Description" is empty')
    }
    }

    const checkTodo = (id: Todo['id']) => {
        setTodos(todos.map(todo => {
            if (todo.id === id) {
                return { ...todo, checked: !todo.checked }
            }
            return todo;
        }))
    }

    const deleteTodo = (id: Todo['id']) => {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    const changeTodo = ({ name, description }: Omit<Todo, 'checked' | 'id'>) => {
        setTodos(todos.map(todo => {
            if (todo.id === todoIdForEdit) {
                return { ...todo, name, description }
            }
            return todo;
        }))
        setTodoIdForEdit(null);
    }

    const value = React.useMemo(() => ({
        selectTodoIdForEdit,
        addTodo,
        checkTodo,
        deleteTodo,
        changeTodo,
        todoIdForEdit,
        todos,
    }),
        [selectTodoIdForEdit,
            addTodo,
            checkTodo,
            deleteTodo,
            changeTodo,
            todoIdForEdit,
            todos,])
    return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>
}


export default TodoProvider;