import styled, { css } from 'styled-components'

export const AlertContainer = styled.div<{
    show: boolean
    type: 'success' | 'danger'
}>`
    width: 100%;
    font-size: 12px;
    font-family: 'Helvetica';
    border-radius: 5px;
    text-align: center;
    transition: 0.2s ease;
    overflow: hidden;
    visibility: visible;
    opacity: 1;
    ${(props) =>
        props.show
            ? css`
                  padding: 0.5em 1em;
                  height: auto;
              `
            : css`
                  padding: 0 1em;
                  height: 0;
                  visibility: hidden;
                  opacity: 0;
              `}

    ${(props) =>
        props.type === 'danger' &&
        css`
            border: 2px solid var(--danger);
            background-color: var(--danger-light);
            color: var(--danger);
        `}
  
  ${(props) =>
        props.type === 'success' &&
        css`
            border: 2px solid var(--success);
            background-color: var(--success-light);
            color: var(--success);
        `}
`

