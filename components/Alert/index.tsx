import React from 'react'
import { AlertContainer } from './style'

interface Props {
    show: boolean
    type: 'success' | 'danger'
    children: React.ReactNode
    onClick: () => void
    style: React.CSSProperties
}

export default function Alert({ children, ...props }: Props) {
    return <AlertContainer {...props}>{children}</AlertContainer>
}

