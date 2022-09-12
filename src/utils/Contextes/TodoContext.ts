import React from "react";
import { Todo } from "../../type";

export interface TodoContextProps {
    todos: Todo[]
    checkTodo: (id: Todo['id']) => void
    deleteTodo: (id: Todo['id']) => void
    selectTodoIdForEdit: (id: Todo['id']) => void
    todoIdForEdit: Todo['id'] | null
    changeTodo: ({ name, description }: Omit<Todo, 'checked' | 'id'>) => void
    addTodo: ({ name, description }: Omit<Todo, 'checked' | 'id'>) => void
}

const TodoContext = React.createContext<TodoContextProps>({
    todos: [],
    todoIdForEdit: null,
    addTodo: () => { },
    deleteTodo: () => { },
    changeTodo: () => { },
    selectTodoIdForEdit: () => { },
    checkTodo: () => { }
})

export default TodoContext;