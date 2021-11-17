import styled from 'styled-components';

export const CardDepositionContainer = styled.li`

    padding: 1.5rem;
    background-color: ${({ theme }) => { return theme.COLORS.BRANCO; }};
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.22);
    border-radius: 18px;

    .depositions-cardDepositions-stars {
        display: flex;
        gap: .5rem;
    }

    p { 
        margin-top: .7rem;
        font-size: 1rem;
        color: ${({ theme }) => { return theme.COLORS.GRAY_200; }};
        font-family: ${({ theme }) => { return theme.FONTS.DEFAULT; }};
        font-weight: 400;

        @media(max-width: 767px) {
            font-size: .75rem;
            line-height: 1.2rem;
        }
    }

    .depositions-cardDepositions-intentification {
        margin-top: 1.5rem;
        display: flex;
        align-items: center;

        img {
            margin-right: 1rem;
        }

        h4 {
            font-size: 1rem;
            font-family: ${({ theme }) => { return theme.FONTS.DEFAULT; }};
            color: ${({ theme }) => { return theme.COLORS.PRIMARY; }};
            font-weight: 500;
        }

        span {
            font-size: .75rem;
            color: ${({ theme }) => { return theme.COLORS.GRAY_200; }};
            font-family: ${({ theme }) => { return theme.FONTS.DEFAULT; }};
            font-weight: 500;
            text-transform: none;
        }

        svg {
            margin-left: auto;
        }
    }

`;
