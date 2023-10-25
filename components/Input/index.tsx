import React from 'react'
import styles from './styles.module.css'

export default function Input(props: React.HTMLProps<HTMLInputElement>) {
    return <input {...props} className={styles.input} />
}
