import styled from 'styled-components';

export const ActionContainer = styled.div`

    width: 50%;
    min-width: 350px;
    background: transparent;
    z-index: 1000;
    margin: auto 0;


    .bannerContaienr-content-callEnem {
        display: flex;
        align-items: flex-end;
        gap: 1.25rem;  

        p {
            font-size: 1.25rem;
            color: ${({ theme }) => { return theme.COLORS.SECUNDARY; }};
            font-weight: bold;
            font-family: ${({ theme }) => { return theme.FONTS.DEFAULT; }};
        }
    }

    .bannerContaienr-content-action {
        margin-top: 2rem;
        h2 {
            font-size: 4rem;
            color: ${({ theme }) => { return theme.COLORS.BRANCO; }};
            font-family: 'Fredoka One', 'Inter', sans-serif;

            span {
                font-size: 4rem;
                color: ${({ theme }) => { return theme.COLORS.SECUNDARY; }}
            }
        }

        p {
            margin-top: 2rem;
            font-size: 1.25rem;
            color: ${({ theme }) => { return theme.COLORS.BRANCO; }};
            font-family: ${({ theme }) => { return theme.FONTS.DEFAULT; }};
            width: 78%;

            span {
                font-size: 1.25rem;
                font-weight: bold;
            }
        }

        button {
            background: none;
            a {
                margin-top: 2rem;
                padding: 1rem 5rem;
                background-color: ${({ theme }) => { return theme.COLORS.SECUNDARY; }};
                font-size: 1rem;
                font-family: ${({ theme }) => { return theme.FONTS.DEFAULT; }};
                display: flex;
                color: ${({ theme }) => { return theme.COLORS.PRIMARY; }};
                font-weight: bold;
                gap: 1rem;
                align-items: center;
                border-radius: 0.375rem;
                cursor: pointer;

                &:hover {
                    filter: brightness(0.9)
                }
            }
        }
    }

`;
