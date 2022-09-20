import styled from 'styled-components'

export const AboutStyled = styled.section`
    display: flex;
    justify-content: center;
    padding: 0 2em;
    flex-direction: column;
    padding-top: 80px;
    gap: 1.5em;

    div h2 {
        text-align: center;
        padding-top: 20px;
        padding-bottom: 20px;
    }

    > div div:last-child {
        display: flex;
        gap: 0.8em;
        flex-wrap: wrap;
    }

    @media (min-width: 768px) {
        flex-direction: row;
        justify-content: space-between;

        > div {
            width: 50%;
            height: 100%;
        }
    }
`

