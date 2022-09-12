import React from "react";
import { Todo } from "../../type";
import useTodo from "../../utils/Contextes/useTodo";
import Button from "../common/Button/Button";
import styles from './TodoPanel.module.css'

const DEFAULT_TODO = {
    name: '',
    description: ''
}

interface AddTodoPanelProps {
    mode: 'add'
}

interface EditTodoPanelProps {
    mode: 'edit'
    editTodo: Omit<Todo, 'id' | 'checked'>
}

type TodoPanelProps = AddTodoPanelProps | EditTodoPanelProps

const TodoPanel: React.FC<TodoPanelProps> = (props) => {
    const { changeTodo, addTodo } = useTodo();
    const isEdit = props.mode === 'edit'
    const [todo, setTodo] = React.useState(isEdit ? props.editTodo : DEFAULT_TODO);

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target
        setTodo({ ...todo, [name]: value });
    }

    const onClick = () => {
        const todoItem = { name: todo.name, description: todo.description }
        if (isEdit) {
            return changeTodo(todoItem)
        }

        addTodo(todoItem)
        setTodo(DEFAULT_TODO)
    }

    return (
        <div className={styles.todoPanelContainer}>
            <div className={styles.fieldsContainer}>
                <div className={styles.fieldContainer}>
                    <label htmlFor="name">
                        <div><b>Name</b></div>
                        <input type="text" id="name" value={todo.name} name="name" onChange={onChange} />
                    </label>
                </div>
                <div className={styles.fieldContainer}>
                    <label htmlFor="description">
                        <div><b>Description</b></div>
                        <input type="text" id="description" value={todo.description} name="description" onChange={onChange} />
                    </label>
                </div>
            </div>
            <div className={styles.buttonContainer}>
                {!isEdit && <Button color="Green" onClick={onClick}>
                    ADD
                </Button>}
                {isEdit &&
                    <Button color="Blue" onClick={onClick}>
                        Edit
                    </Button>}
            </div>
        </div>
    )
}

export default TodoPanel; 