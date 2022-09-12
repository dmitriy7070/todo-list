import React from "react";
import styles from "./TodoItem.module.css"
import { Todo } from "../../../type";
import Button from "../../common/Button/Button";

interface TodoItemPropsType {
    todo: Todo
    checkTodo: (id: Todo['id']) => void
    deleteTodo: (id: Todo['id']) => void
    selectTodoIdForEdit: (id: Todo['id']) => void
}

const TodoItem: React.FC<TodoItemPropsType> = ({ todo, checkTodo, deleteTodo, selectTodoIdForEdit }) => {
    return (
        <div className={styles.todoItemContainer}>
            <div>
                <div aria-hidden
                    style={{
                        opacity: todo.checked ? 0.5 : 1,
                        textDecoration: todo.checked ? 'line-through' : 'none'
                    }}
                    onClick={() => checkTodo(todo.id)}
                    className={styles.todoItemTitle}
                >
                    {todo.name}
                </div>
                <div aria-hidden
                    className={styles.todoItemDescription}
                >
                    {todo.description}
                </div>
            </div>
            <div className={styles.todoItemButtonContainer}>
                <Button color="Blue" onClick={() => selectTodoIdForEdit(todo.id)}>Edit</Button>
                <Button color="Red" onClick={() => deleteTodo(todo.id)}>Delete</Button>
            </div>
        </div>
    )
}

export default TodoItem;