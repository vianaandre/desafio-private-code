import styled from 'styled-components';

export const ActionContainer = styled.div`

    width: 50%;
    min-width: 350px;
    background: transparent;
    z-index: 1000;
    margin: auto 0;

    @media(max-width: 1199px) and (min-width: 992px)  {
        min-width: 500px
    }

    @media(max-width: 991px) and (min-width: 768px) {
        width: 100%;
        min-width: 500px
    }

    @media(max-width: 767px) {
        width: 100%;
        min-width: 320px;
    }


    .bannerContaienr-content-callEnem {
        display: flex;
        align-items: flex-end;
        gap: 1.25rem;  

        p {
            font-size: 1.25rem;
            color: ${({ theme }) => { return theme.COLORS.SECUNDARY; }};
            font-weight: bold;
            font-family: ${({ theme }) => { return theme.FONTS.DEFAULT; }};

            @media(max-width: 767px) {
                font-size: 1rem
            }
        }

        @media(max-width: 767px) {
            flex-direction: column;
            align-items: center;
            text-align: center;
        }
    }

    .bannerContaienr-content-action {
        margin-top: 2rem;

        @media(max-width: 767px) {
            text-align: center
        }

        h2 {
            font-size: 4rem;
            color: ${({ theme }) => { return theme.COLORS.BRANCO; }};
            font-family: 'Fredoka One', 'Inter', sans-serif;

            .bannerContaienr-content-action-mobile {
                display: none;
            }

            span {
                font-size: 4rem;
                color: ${({ theme }) => { return theme.COLORS.SECUNDARY; }}
            }

            @media(max-width: 767px) {
                font-size: 2.5rem;
                text-align: center;
                margin-top: 3.5rem;

                .bannerContaienr-content-action-mobile  {
                    display: block;
                    font-size: 2.5rem;
                    color: ${({ theme }) => { return theme.COLORS.BRANCO; }};
                    line-height: .8rem;
                }
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

            @media(max-width: 767px) {
                font-size: 1rem;
                text-align: center;
                width: 100%;
                padding: 0 1rem;

                span {
                    font-size: 1rem;

                    @media(max-width: 566px) {
                        font-size: 0.75rem;
                    }
                }
            }

            @media(max-width: 566px) {
                font-size: 0.75rem;
            }
        }

        button {
            background: none;

            @media(max-width: 767px) {
                margin-top: 92px;
            }

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
                    filter: brightness(0.9);

                    @media(max-width: 767px) {
                        filter: none;
                    }
                }

                @media(max-width: 767px) {
                    font-size: 1rem;

                    @media(max-width: 566px) {
                        font-size: 0.75rem;
                    }
                }
            }
        }
    }

`;
