import React from "react";
import useTodo from "../../utils/Contextes/useTodo";
import styles from '../Header/Header.module.css'


const Header: React.FC = () => {
    const { todos } = useTodo()
    return (
        <div className={styles.headerContainer}>
            <div className={styles.headerTitle}>
                Todo list <b>{todos.length}</b> task(s)
            </div>
        </div>
    )
}

export default Header; 