import styled from 'styled-components';

export const DepositionsContainer = styled.section`

    width: 1220px;
    margin: 0 auto;
    overflow: hidden;

    span {
        font-size: 1.25rem;
        color: ${({ theme }) => { return theme.COLORS.SECUNDARY; }};
        font-weight: bold;
        font-family: ${({ theme }) => { return theme.FONTS.DEFAULT; }};
        text-transform: uppercase;
    }

    h2 {
        margin-top: 1rem;
        font-size: 2.75rem;
        font-family: ${({ theme }) => { return theme.FONTS.DEFAULT; }};
        color: ${({ theme }) => { return theme.COLORS.PRIMARY; }};
        font-weight: bold;
        width: 50%;
    }

    ul {
        margin-top: 4rem;
        margin-bottom: 4rem;
        display: flex;
        overflow: scroll;
        gap: 40px;
        width: 200%;

        li {
            width: 370px;
        }
    }

`;
