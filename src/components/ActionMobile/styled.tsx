import styled from 'styled-components';

export const ActionMobileContainer = styled.section`

    width: 100%;
    background-color: ${({ theme }) => { return theme.COLORS.PRIMARY; }};
    margin-top: 150px;
    margin-bottom: 4rem;

    @media(max-width: 767px) {
        padding-top: 3rem;
    }


    .actionMobile-content {
        width: 1220px;
        margin: 0 auto;

        display: flex;
        justify-content: space-between;

        @media(min-width: 998px) and (max-width: 1219px) {
            width: 998px;
        }

        @media(min-width: 768px) and (max-width: 997px) {
            width: 768px;
        }

        @media(max-width: 767px) {
            width: 320px;
            flex-direction: column;
        }

        img { 
            margin-top: -5rem;

            @media(min-width: 768px) and (max-width: 997px) {
                width: 400px;
            }

            @media(max-width: 767px) {
                order: 2;
                margin-top: 3rem;
            }
        }

        .actionMobile-content-action {
            margin: auto 0;
            width: 50%;

            @media(min-width: 998px) and (max-width: 1219px) {
                margin-left: 3rem;
            }

            @media(min-width: 768px) and (max-width: 997px) {
                margin-left: 1.5rem;
            }

            @media(max-width: 767px) {
                width: 100%;
            }

            div { 
                display: flex;
                align-items: center;
                gap: 1rem;

                @media(max-width: 767px) {
                    flex-direction: column;
                }

                h4 {
                    margin-top: 10px;
                    font-size: 1.25rem;
                    color: ${({ theme }) => { return theme.COLORS.SECUNDARY; }};
                    font-family: ${({ theme }) => { return theme.FONTS.DEFAULT; }};
                    font-weight: bold;

                    @media(max-width: 767px) {
                        text-align: center;
                        font-size: 1rem;
                    }
                }
            }

            p {
                width: 80%;
                margin-top: 2rem;
                font-size: 1.25rem;
                font-family: ${({ theme }) => { return theme.FONTS.DEFAULT; }};
                color: ${({ theme }) => { return theme.COLORS.BRANCO; }};
                line-height: 1.5rem;

                @media(min-width: 768px) and (max-width: 997px) {
                    width: 100%;
                }

                @media(max-width: 767px) {
                    text-align: center;
                    width: 100%;
                    font-size: 0.75rem
                }
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

                &:hover {
                    filter: brightness(0.9)
                }

                @media(min-width: 768px) and (max-width: 997px) {
                    padding: 1rem 2rem
                }

                @media(max-width: 767px) {
                    padding: 1rem 2rem;
                    width: 100%
                }
            }
        }
    }

`;
