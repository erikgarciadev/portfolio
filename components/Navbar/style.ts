import styled, { css } from 'styled-components'

export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 70px;
    background: var(--white);
    padding: 0 4em;
    box-shadow: rgb(0 0 0 / 16%) 0px 0px 7px;
    position: sticky;
    top: 0;
    width: 100%;
    z-index: 1000;

    @media (max-width: 768px) {
        padding: 0 2em;
    }
`

export const Logo = styled.a`
    height: 40px;
    cursor: pointer;
`
export const IconMenu = styled.i.attrs((props) => ({
    className: props.className,
}))`
    color: var(--primary);
    font-size: 25px;
    display: none;
    cursor: pointer;
    transition: all 0.2s linear;

    @media (max-width: 768px) {
        display: initial;
        &.fa-times {
            transform: rotate(180deg);
        }
    }
`

export const Nav = styled.nav<{ active: boolean }>`
    > a {
        padding: 0 1em;
        &:hover {
            color: var(--primary);
        }
    }

    @media (max-width: 768px) {
        position: absolute;
        top: 99%;
        left: 0;
        right: 0;
        background: var(--white);
        padding: 0 2em;
        clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);
        transition: all 0.2s linear;
        ${(props) =>
            props.active &&
            css`
                clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
            `}
        > a {
            padding: 1em 0;
            display: block;
        }
    }
`
