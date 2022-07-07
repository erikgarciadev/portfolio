import React, { ChangeEvent, FormEvent, useState } from 'react'

export default function useContact() {
    const [form, setForm] = useState({
        email: '',
        matter: '',
    })
    const [errors, setErrors] = useState({
        email: '',
        matter: '',
    })
    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const name = e.target.name
        setForm({
            ...form,
            [name]: e.target.value,
        })
        setErrors({
            ...errors,
            [name]: '',
        })
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (!isValid()) {
            return
        }
    }

    const isValid = () => {
        let _errors = {}
        if (!isValidEmail(form.email)) {
            _errors = {
                ..._errors,
                email: 'Formato inválido',
            }
        }
        for (const [field, value] of Object.entries(form)) {
            if (!value) {
                _errors = {
                    ..._errors,
                    [field]: 'Requerido',
                }
            }
        }

        if (Object.keys(_errors).length !== 0) {
            setErrors({
                ...errors,
                ..._errors,
            })
        }

        return Object.keys(_errors).length === 0
    }

    return {
        form,
        errors,
        handleChange,
        handleSubmit,
    }
}

const isValidEmail = (email: string) => {
    return email.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    )
}

