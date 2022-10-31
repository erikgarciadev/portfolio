import React from 'react'

export default function FormField({
    children,
    label = '',
    errorMessage = '',
}: {
    children: React.ReactNode
    label: string
    errorMessage: string
}) {
    return (
        <>
            <label style={{ fontSize: '18px', fontWeight: 'bold', color: 'var(--primary)' }}>{label}</label>
            {children}
            {errorMessage && <p className="text-error">{errorMessage}</p>}
        </>
    )
}

