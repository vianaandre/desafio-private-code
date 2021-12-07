import styled from 'styled-components';

export const FooterContainer = styled.footer`

    padding: 5rem 0 3rem 0;
    margin-bottom: 30px;

    @media(max-width: 767px) {
        padding: 0 0 3rem 0;
    }

    @media(max-width: 991px) and (min-width: 768px) {
        padding-top: 0;
    }

    .footer-information {
        display: flex;
        justify-content: space-between;
        padding-bottom: 2rem;
        border-bottom: 1px solid rgba(84, 84, 212, 0.34);
        position: relative;

        @media(max-width: 991px) and (min-width: 768px) {
            justify-content: space-between;
            padding-left: 30px;
            padding-right: 30px;
        }

        .img-mobile {
            display: none;
        }

        @media(min-width: 768px) and (max-width: 997px) {
            flex-wrap: wrap;
            justify-content: baseline;
            gap: 2rem;
        }

        @media(max-width: 767px) {
            flex-direction: column;
            align-items: center;
            gap: 2rem;

            .img-mobile {
                display: block;
            }
        }

        .footer-information-app {
            display: flex;
            flex-direction: column;
            justify-content: flex-start;

            @media(max-width: 767px) {
                align-items: center;
            }

            svg {
                width: 200px;
                margin-top: 0;
            }

            img {
                margin-top: auto;

                @media(max-width: 767px) {
                    display: none;
                }
            }
        }

        div { 
            @media(max-width: 767px) {
                width: 100%;
            }

            h4 {
                font-size: 1.25rem;
                font-family: ${({ theme }) => { return theme.FONTS.DEFAULT; }};
                color: ${({ theme }) => { return theme.COLORS.PRIMARY; }};

                @media(max-width: 767px) {
                    text-align: center;
                }
            }

            ul {
                margin-top: 1rem; 

                li {
                    font-size: 1rem;
                    color: ${({ theme }) => { return theme.COLORS.GRAY_200; }};
                    font-family: ${({ theme }) => { return theme.FONTS.DEFAULT; }};
                    line-height: 2rem;

                    @media(max-width: 767px) {
                        text-align: center;
                    }
                }
            }
        }
    }
    

    .footer-direitos {
        display: flex;
        justify-content: space-between;
        margin-top: 2rem;

        @media(min-width: 768px) and (max-width: 997px)  {
            padding: 0 30px;
        }

        @media(max-width: 767px) {
            flex-direction: column;
            gap: 3rem;
            align-items: center;
        }

        .footer-direitos-copy {
            display: flex;
            align-items: center;
            gap: 1rem;

            @media(max-width: 767px) {
                order: 2;
                flex-direction: column;
            }

            p {
                font-size: 1rem;
                font-family: ${({ theme }) => { return theme.FONTS.DEFAULT; }};
                color: ${({ theme }) => { return theme.COLORS.GRAY_200; }};
            }
        }

        .footer-direitos-social {
            ul {
                display: flex;
                gap: 2rem;
            }
        }
    }
`;
