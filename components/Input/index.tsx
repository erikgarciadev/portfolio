import React from 'react'

export default function Input(props: React.HTMLProps<HTMLInputElement>) {
    return <input {...props} style={{ width: '100%', padding: '0.5em', borderRadius: '10px' }} />
}

