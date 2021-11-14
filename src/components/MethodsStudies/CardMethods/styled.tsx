import styled from 'styled-components';

export const CardMethodsContainer = styled.div`

    display: flex;
    width: 45%;

    .informationPlans-content-cardMethods-icon {
        display: flex;
        flex-direction: column;
        align-items: center;

        img {
            padding: 1.25rem;
            border-radius: 50%;
            border: solid 2px;
            border-color: ${({ theme }) => { return theme.COLORS.SECUNDARY; }};
        } 

        .informationPlans-content-cardMethods-icon-effect {
            display: flex;
            flex-direction: column;
            gap: 6px;
            margin-top: 1rem;

            div {
                width: 5px;
                height: 5px;
                border-radius: 50%;
                background-color: #C8C8C8
            }

            div:nth-child(2) {
                opacity: 0.8
            }

            div:nth-child(3) {
                opacity: 0.6
            }

            div:nth-child(4) {
                opacity: 0.4
            } 

            div:nth-child(5) {
                opacity: 0.35
            }

            div:nth-child(6) {
                opacity: 0.3
            }
            div:nth-child(7) {
                opacity: 0.2
            }

        }
    }

    .informationPlans-content-cardMethods-explication {
        margin-left: 2rem;
        h3 {
            font-size: 1.25rem;
            color: ${({ theme }) => { return theme.COLORS.PRIMARY; }};
            font-family: ${({ theme }) => { return theme.FONTS.DEFAULT; }};
            font-weight: 600;
        }

        p {
            margin-top: 1rem;
            font-size: 1.25rem;
            color: ${({ theme }) => { return theme.COLORS.GRAY_200; }};
            font-family: ${({ theme }) => { return theme.FONTS.DEFAULT; }}
        }
    }

`;
