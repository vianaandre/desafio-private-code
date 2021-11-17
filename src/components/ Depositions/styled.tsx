import styled from 'styled-components';

export const DepositionsContainer = styled.section`

    .depositions-title {
        width: 1220px;
        margin: 0 auto;
        overflow: visible;
        position: relative;

        @media(min-width: 998px) and (max-width: 1219px) {
            width: 998px;
        }

        @media(min-width: 768px) and (max-width: 997px) {
            width: 768px;
        }

        @media(max-width: 767px) {
            width: 320px;
            text-align: center;
        }

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

            @media(min-width: 998px) and (max-width: 1219px) {
                width: 100%;
            }

            @media(min-width: 768px) and (max-width: 997px) {
                width: 100%;
            }

            @media(max-width: 767px) {
                font-size: 1.25rem;
                width: 100%;
            }
        }
    }

    .depositions-carousel {
        width: 100%;
        display: flex;
        justify-content: center;

        .depositions-carousel-items {
            width: 1220px;
            margin: 0 auto;
            overflow: hidden;
            overflow-y: hidden;
            scroll-behavior: smooth;

            @media(min-width: 998px) and (max-width: 1219px) {
                width: 998px
            }

            @media(max-width: 767px) {
                width: 320px;
                margin: 0 20px;
            }


            ul {
                padding: 0 10px;
                margin-top: 4rem;
                margin-bottom: 4rem;
                display: flex;
                justify-content: space-between;
                gap: 40px;
                width: fit-content;

                @media(min-width: 998px) and (max-width: 1219px) {
                    gap: 20px;
                }

                @media(min-width: 768px) and (max-width: 997px) {
                    padding-left: 20px;
                    padding-right: 15px;
                }

                @media(max-width: 767px) {
                    gap: 10px;
                    padding: 5px;
                }

                li {
                    width: 370px;

                    @media(min-width: 998px) and (max-width: 1219px) {
                        width: 300px;
                    }

                    @media(max-width: 767px) {
                        width: 310px;
                    }
                }

                li:nth-child(3) {
                    margin-right: 40px;

                    @media(min-width: 768px) and (max-width: 997px) {
                        margin-right: 10px;
                    }
                }

                @media(min-width: 768px) and (max-width: 997px) {
                    li:nth-child(5), li:nth-child(6) {
                        display: none;
                    }
                }
            }
        }

        button {
            padding: 1rem 1.25rem;
            height: fit-content;
            border-radius: 50%;
            border: 1px solid;
            border-color: ${({ theme }) => { return theme.COLORS.PRIMARY; }};
            margin: auto 0;
            cursor: pointer;
        }

        .left {
            margin-left: 20px;
        }

        .right {
            margin-right: 20px;

            svg {
                transform: rotate(180deg);
            }
        }
    }

`;
