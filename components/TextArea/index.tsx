import React from 'react'

export default function TextArea(props: React.HTMLProps<HTMLTextAreaElement>) {
    return (
        <textarea
            {...props}
            style={{
                resize: 'none',
                padding: '0.5em',
                borderRadius: '10px',
                height: '100px',
                width: '100%',
            }}
        />
    )
}

