import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const ExplicationContainer = styled.section`
    width: 100%;
    background-color: ${({ theme }) => { return theme.COLORS.GRAY_100; }};

    .explication-content {
        width: 1220px;
        margin: 0 auto;
        padding: 5rem 0;
        display: flex;
        flex-direction: column;
        gap: 2rem;

        .explication-content-block {
            display: flex;
            justify-content: space-between;
            width: 100%;

            div { 
                width: 50%;

                span { 
                    font-size: 1.25rem;
                    color: ${({ theme }) => { return theme.COLORS.SECUNDARY; }};
                    font-family: ${({ theme }) => { return theme.FONTS.DEFAULT; }};
                    font-weight: bold;
                }

                h2 {
                    margin-top: 1rem;
                    font-size: 3rem;
                    color: ${({ theme }) => { return theme.COLORS.PRIMARY; }};
                    font-family: ${({ theme }) => { return theme.FONTS.DEFAULT; }};
                    font-weight: bold;
                }

                p {
                    margin-top: 1rem;
                    font-size: 1.25rem;
                    color: ${({ theme }) => { return theme.COLORS.GRAY_200; }};
                    font-family: ${({ theme }) => { return theme.FONTS.DEFAULT; }};
                    line-height: 2.25rem;
                }
            }

            .explication-content-block-two-img {
                margin-top: -12rem;
            }
        }
    }

`;
