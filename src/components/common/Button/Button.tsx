import React from "react"
import styles from "./Button.module.css"

interface ButtonProps extends React.ComponentPropsWithRef<'button'> {
    color: 'Blue' | 'Green' | 'Red'
}

const Button: React.FC<ButtonProps> = ({ children, color, onClick, ...props }) => {

    const className = `${styles.button} ${styles[`button${color}`]} `

    return (
        <button className={className} onClick={onClick} {...props}>
            {children}
        </button>
    )
}

export default Button;