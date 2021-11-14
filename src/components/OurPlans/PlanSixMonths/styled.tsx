import styled from 'styled-components';

export const PlanSixMonthsContainer = styled.div`

    width: 570px;
    background-color: ${({ theme }) => { return theme.COLORS.BRANCO; }};
    border-radius: 18px;
    border: solid 1px;
    border-color: rgb(32, 30, 84, 18%);
    padding: 2.5rem 2rem;

    .plans-plansSixMonths-boxHeader {
        display: flex;
        flex-direction: column;
        margin-top: 2rem;
        span { 
            font-size: 1.25rem;
            color: #3C5882;
            font-family: ${({ theme }) => { return theme.FONTS.DEFAULT; }};
            font-weight: bold;
        }

        h2 { 
            font-size: 2rem;
            color: ${({ theme }) => { return theme.COLORS.PRIMARY; }};
            font-family: ${({ theme }) => { return theme.FONTS.DEFAULT; }}
        }
    }

    .plans-plansSixMonths-benefits {
        margin-top: 2.75rem;
        h4 {
            font-size: 1.25rem;
            font-family: ${({ theme }) => { return theme.FONTS.DEFAULT; }};
            color: ${({ theme }) => { return theme.COLORS.SECUNDARY; }};
            font-weight: bold;
        }

        ul {
            margin-top: 2rem;
            padding-left: 2rem;
            display: flex;
            flex-direction: column;
            gap: 1rem;

            li {
                display: flex;
                gap: 1rem;

                svg {
                    margin-top: 8px;
                    path {
                        fill: ${({ theme }) => { return theme.COLORS.PRIMARY; }}
                    }
                }

                p {
                    font-size: 1;
                    font-family: ${({ theme }) => { return theme.FONTS.DEFAULT; }};
                    font-weight: 400;
                    color: ${({ theme }) => { return theme.COLORS.PRIMARY; }};
                    line-height: 1.75rem;
                }
            }
        }
    }

    .ourPlans-plansSixMonths-prices {
        margin-top: 4.2rem;
        display: flex;
        justify-content: space-between;

        div {
            display: flex;
            span {
                font-size: 1.25rem;
                font-weight: 400;
                margin-right: .5rem;
                color: ${({ theme }) => { return theme.COLORS.SECUNDARY; }};
                opacity: 1;
            }
            h4 {
                padding-top: .2rem;
                font-size: 2rem;
                color: ${({ theme }) => { return theme.COLORS.PRIMARY; }};
                font-family: ${({ theme }) => { return theme.FONTS.DEFAULT; }};
                font-weight: 600;

                span {
                    font-size: 1rem;
                    color: ${({ theme }) => { return theme.COLORS.PRIMARY; }};
                    text-transform: none;
                    font-weight: 600;
                }
            }
        }
        a {
            margin-top: auto;
            float: right;
            height: fit-content;
            padding: 1.10rem 4rem;
            background-color: ${({ theme }) => { return theme.COLORS.PRIMARY; }};
            box-shadow: -1.16333px 1.16333px 6.98px rgba(0, 0, 0, 0.26);
            border-radius: 6px;
            color: ${({ theme }) => { return theme.COLORS.BRANCO; }};
            font-weight: bold;
            font-family: ${({ theme }) => { return theme.FONTS.DEFAULT; }};

            &:hover {
                filter: brightness(0.9)
            }
        }
    }

`;
