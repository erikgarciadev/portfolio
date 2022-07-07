import styled from 'styled-components'

export const AboutStyled = styled.section`
    display: flex;
    justify-content: center;
    padding: 0 2em;
    flex-direction: column;
    padding-top: 80px;
    gap: 1em;

    @media (min-width: 768px) {
        flex-direction: row;
        justify-content: space-between;

        > div {
            width: 50%;
            height: 100%;
        }
    }
`

