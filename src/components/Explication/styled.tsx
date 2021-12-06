import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const ExplicationContainer = styled.section`
    width: 100%;
    background-color: ${({ theme }) => { return theme.COLORS.GRAY_100; }};

    .explication-content {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        padding: 77px 10px;

        @media(max-width: 767px) {
            padding: 0 10px;
            padding-top: 56px;
        }

        .explication-content-block {
            display: flex;
            justify-content: space-between;
            width: 100%;

            @media(min-width: 768px) and (max-width: 997px) {
                flex-direction: column;

                img {
                    width: 500px;
                    order: 2;
                    margin: 0 auto;
                }
            }

            @media(max-width: 767px) {
                flex-direction: column;
                align-items: center;

                img {
                    width: 320px;
                    order: 2
                }
            }

            div { 
                width: 50%;

                @media(min-width: 768px) and (max-width: 997px) {
                    width: 100%;
                    order: 1;
                    margin-bottom: 2rem;
                }

                @media(max-width: 767px) {
                    width: 320px;
                    text-align: center;
                    margin-bottom: 4rem;
                }

                span { 
                    font-size: 1.25rem;
                    color: ${({ theme }) => { return theme.COLORS.SECUNDARY; }};
                    font-family: ${({ theme }) => { return theme.FONTS.DEFAULT; }};
                    font-weight: bold;
                    color: #32B5FF
                }

                h2 {
                    margin-top: 1rem;
                    font-size: 3rem;
                    color: ${({ theme }) => { return theme.COLORS.PRIMARY; }};
                    font-family: ${({ theme }) => { return theme.FONTS.DEFAULT; }};
                    font-weight: bold;

                    @media(max-width: 767px)  {
                        text-align: center;
                        font-size: 1.5rem;
                    }
                }

                p {
                    margin-top: 1rem;
                    font-size: 1.25rem;
                    color: ${({ theme }) => { return theme.COLORS.GRAY_200; }};
                    font-family: ${({ theme }) => { return theme.FONTS.DEFAULT; }};
                    line-height: 2.25rem;

                    @media(max-width: 767px) {
                        font-size: .75rem;
                        line-height: 1.25rem;
                    }
                }
            }

            .explication-content-block-two-img {
                margin-top: -12rem;

                @media(min-width: 998px) and (max-width: 1219px) {
                    margin-top: -5rem;
                }

                @media(min-width: 768px) and (max-width: 997px) {
                    margin-top: -1rem;
                }

                @media(max-width: 767px) {
                    margin-top: -2rem;
                }
            }

            div.explication-content-img-shadow {
                display: flex;
                flex-direction: column;
                align-items: center;

                img {
                    margin-top: -10rem;
                }
                
                div {
                    order: 2;
                    width: 229px;
                    height: 14px;
                    border-radius: 50%;

                    background: rgba(196, 196, 196, 0.25);
                    transform: rotate(-3.05deg);

                    @media(max-width: 767px) {
                        display: none;
                    }
                }
            }
        }
    }

`;
