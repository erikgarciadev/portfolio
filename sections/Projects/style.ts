import styled from 'styled-components'

export const ContainerProjects = styled.section`
    display: grid;
    gap: 50px;
    grid-template-columns: repeat(1, 1fr);

    @media (min-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (min-width: 1024px) {
        grid-template-columns: repeat(3, 1fr);
    }
`

