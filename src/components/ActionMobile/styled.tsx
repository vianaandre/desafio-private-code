import styled from 'styled-components';

export const ActionMobileContainer = styled.section`

    width: 100%;
    background-color: ${({ theme }) => { return theme.COLORS.PRIMARY; }};
    margin-top: 5rem;
    margin-bottom: 4rem;


    .actionMobile-content {
        width: 1220px;
        margin: 0 auto;

        display: flex;
        justify-content: space-between;

        img { 
            margin-top: -5rem;
        }

        .actionMobile-content-action {
            margin: auto 0;
            width: 50%;

            div { 
                display: flex;
                align-items: center;
                gap: 1rem;

                h4 {
                    margin-top: 10px;
                    font-size: 1.25rem;
                    color: ${({ theme }) => { return theme.COLORS.SECUNDARY; }};
                    font-family: ${({ theme }) => { return theme.FONTS.DEFAULT; }};
                    font-weight: bold;
                }
            }

            p {
                width: 80%;
                margin-top: 2rem;
                font-size: 1.25rem;
                font-family: ${({ theme }) => { return theme.FONTS.DEFAULT; }};
                color: ${({ theme }) => { return theme.COLORS.BRANCO; }};
                line-height: 1.5rem;
            }

            a {
                display: flex;
                align-items: center;
                gap: 1.5rem;
                width: fit-content;
                margin-top: 2rem;
                padding: 1rem 4rem;
                background-color: ${({ theme }) => { return theme.COLORS.SECUNDARY; }};
                font-size: 1rem;
                color: ${({ theme }) => { return theme.COLORS.PRIMARY; }};
                font-weight: bold;
                font-family: ${({ theme }) => { return theme.FONTS.DEFAULT; }};
                border-radius: 7px;
            }
        }
    }

`;
