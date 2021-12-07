import styled from 'styled-components';

export const PlanOneYearContainer = styled.div`

    background-color: ${({ theme }) => { return theme.COLORS.PRIMARY; }};
    width: 570px;
    padding: 2.5rem 2rem;
    border-radius: 18px;

    @media(max-width: 1199px) and (min-width: 992px) {
        width: 49%;
    }

    @media(max-width: 991px) and (min-width: 768px) {
        width: 550px;
    }

    @media(max-width: 767px) {
        width: 100%;
        padding: 1rem 1.5rem;
    }

    .ourPlans-plansOneYear-boxHeader {
        display: flex;
        align-items: center;

        @media(max-width: 767px) {
            justify-content: space-between;
            height: 100px;
        }

        div { 
            display: flex;
            flex-direction: column;
            margin-right: 2rem;

            @media(max-width: 767px) {
                margin-right: 0;
            }

            span { 
                font-size: 1.25rem;
                font-weight: bold;
                font-family: ${({ theme }) => { return theme.FONTS.DEFAULT; }};
                color: #3C5882;

                @media(max-width: 767px) {
                    font-size: .75rem;
                }
            }
            h2 {
                font-size: 2rem;
                color: #fff;

                @media(max-width: 767px) {
                    font-size: 1rem;
                    font-weight: 400;
                }
            }
        }
        
        @media(max-width: 767px) {
            svg {
                width: 80px;
            }
        }
    }

    .ourPlans-plansOneYear-benefits {
        h4 {
            font-size: 1.25rem;
            color: ${({ theme }) => { return theme.COLORS.SECUNDARY; }};
            font-family: ${({ theme }) => { return theme.FONTS.DEFAULT; }};
            font-weight: bold;
            width: fit-content;

            @media(max-width: 767px) {
                font-size: 1rem;
            }
        }

        ul {
            margin-top: 2rem;
            width: 100%;
            display: flex;
            flex-direction: column;
            gap: 1rem;
            padding-left: 1rem;

            @media(max-width: 767px) {
                margin-top: 1.5rem;
                padding-left: .5rem
            }

            li {
                display: flex;
                align-items: flex-start;
                gap: 1rem;

                @media(max-width: 767px) {
                    gap: .5rem
                }

                img {
                    margin-top: 8px;
                }

                p {
                    font-size: 1rem;
                    color: #fff;
                    font-family: ${({ theme }) => { return theme.FONTS.DEFAULT; }};
                    line-height: 1.75rem;

                    @media(max-width: 767px) {
                        font-size: .6rem;
                        line-height: 1.25rem;
                        text-align: left;
                    }
                }
            }
        }
    }

    .ourPlans-plansOneYear-prices {

        margin-top: 2.5rem;
        display: flex;
        justify-content: space-between;

        @media(max-width: 767px) {
            margin-top: 1.5rem
        }

        .ourPlans-plansOneYear-prices-valuePlan-de {
            color: #fff;
            font-size: 1rem;
            opacity: 0.45;
            font-weight: 400;
            text-transform: none;
            margin-left: 2rem;

            @media(max-width: 767px) {
                font-size: .6rem;
                margin-left: -1.4rem;
            }
        }

        .ourPlans-plansOneYear-prices-valuePlan-value {
            display: flex;
            span {
                font-size: 1.25rem;
                font-weight: 400;
                margin-right: .5rem;
                color: ${({ theme }) => { return theme.COLORS.SECUNDARY; }};
                opacity: 1;

                @media(max-width: 767px) {
                    font-size: .6rem;
                }
            }
            h4 {
                padding-top: .2rem;
                font-size: 2rem;
                color: ${({ theme }) => { return theme.COLORS.BRANCO; }};
                font-family: ${({ theme }) => { return theme.FONTS.DEFAULT; }};
                font-weight: 600;

                span {
                    font-size: 1rem;
                    color: ${({ theme }) => { return theme.COLORS.BRANCO; }};
                    opacity: 0.45;
                    text-transform: none;
                    font-weight: 600;

                    @media(max-width: 767px) {
                        font-size: .6rem;
                    }
                }

                @media(max-width: 767px) {
                    font-size: 1.25rem;
                }
            }
        }

        span {
            font-size: .75rem;
            color: ${({ theme }) => { return theme.COLORS.BRANCO; }};
            opacity: 0.45;
            text-transform: none;
            font-weight: 400;

            @media(max-width: 767px) {
                font-size: .6rem
            }
        }

        a {
            margin-top: auto;
            float: right;
            height: fit-content;
            padding: 1.10rem 4rem;
            background: linear-gradient(145.09deg, #26E9CF 11.81%, #25CDE1 95.89%);
            box-shadow: -1.16333px 1.16333px 6.98px rgba(0, 0, 0, 0.26);
            border-radius: 6px;
            color: ${({ theme }) => { return theme.COLORS.BRANCO; }};
            font-weight: bold;
            font-family: ${({ theme }) => { return theme.FONTS.DEFAULT; }};

            &:hover {
                filter: brightness(0.9);

                @media(max-width: 767px) {
                    filter: none;
                }
            }

            @media(max-width: 767px) {
                padding: .8rem 1.5rem;
                font-size: .7rem;
            }
        }
    }

`;
