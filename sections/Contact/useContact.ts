import React, { ChangeEvent, FormEvent, useState } from 'react'
import { encode, isValidEmail } from '../../utils/util'

const InitalForm = {
    email: '',
    matter: '',
    name: '',
}

export default function useContact() {
    const [form, setForm] = useState({ ...InitalForm })
    const [errors, setErrors] = useState({ ...InitalForm })
    const [loading, setLoading] = useState(false)
    const [alert, setAlert] = useState<{
        message: string
        type: 'danger' | 'success'
        show: boolean
    }>({
        message: '',
        type: 'danger',
        show: false,
    })
    const handleChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
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
        setLoading(true)
        fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: encode({ 'form-name': 'contact-form', ...form }),
        })
            .then(() => {
                setAlert({
                    ...alert,
                    message: '¡Muchas gracias! Nos comunicaremos pronto contigo',
                    type: 'success',
                    show: true,
                })
                setForm({
                    ...InitalForm,
                })
                setLoading(false)
            })
            .catch(() => {
                setAlert({
                    ...alert,
                    type: 'danger',
                    message: 'Ocurrió un error. Volver a intentar',
                    show: true,
                })
                setLoading(false)
            })
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
        alert,
        setAlert,
        loading,
    }
}

