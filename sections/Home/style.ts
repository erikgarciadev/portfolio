import styled from 'styled-components'

export const HomeStyled = styled.section`
    display: flex;
    justify-content: center;
    min-height: 100vh;
    padding: 0 2em;
    align-items: center;
    flex-direction: column;

    @media (min-width: 768px) {
        flex-direction: row;
        justify-content: space-between;
    }
`

