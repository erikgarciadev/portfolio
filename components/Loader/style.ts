import styled, { keyframes } from 'styled-components'

const rotation = keyframes`
0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`

export const LoaderStyled = styled.span`
    width: 20px;
    height: 20px;
    border: 3px solid var(--primary);
    border-bottom-color: transparent;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: ${rotation} 1s linear infinite;
`
