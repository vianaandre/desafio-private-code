import styled from 'styled-components';

export const MethodsStudiesContainer = styled.section`

    width: 100%;
    position: relative;
    margin-top: 4rem;
    display: flex;

    div.swiper-container {
        div.swiper-pagination {
            display: none;
        }
    }

    .methodsStudies-content-information {
        width: 1220px;
        padding: 4.2rem 0;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        gap: 1rem;

        @media(min-width: 998px) and (max-width: 1219px) {
            width: 998px;
            padding: 0;
            margin-bottom: 4.2rem;
        }

        @media(min-width: 768px) and (max-width: 997px) {
            width: 768px;
        }

        @media(max-width: 767px) {
            width: 320px;
            padding: 3rem 0;
            gap: 3rem;
        }

        a {
            margin-top: 2rem;
            width: 300px;
            padding: 1rem 0;
            background-color: ${({ theme }) => { return theme.COLORS.PRIMARY; }};
            font-size: 1rem;
            color: ${({ theme }) => { return theme.COLORS.BRANCO; }};
            font-family: ${({ theme }) => { return theme.FONTS.DEFAULT; }};
            font-weight: bold;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 1.5rem;
            border-radius: 6px;
            box-shadow: 1.16px 1.16px 7px rgba(0, 0, 0, 0.26);

            svg {
                path {
                    fill: ${({ theme }) => { return theme.COLORS.BRANCO; }}
                }
            }

            &:hover {
                filter: brightness(0.9)
            }

            @media(max-width: 767px) {
                width: 100%;
            }
        }
    }
`;

export const CarouselImageMethodStudies = styled.div`

    cursor: pointer;
    height: 738px;
    overflow: hidden;
    display: flex;
    position: absolute;
    right: 0;

    @media(max-width: 1199px) and (min-width: 992px) {
        height: 540px;

        top: 30px
    }

    @media(max-width: 991px) and (min-width: 768px) {
        display: none;
    }

    img {
        width: 691px;
        background-size: cover;

        @media(max-width: 1199px) and (min-width: 992px) {
            width: 500px;
        }
    }

    div.swiper-wrapper {
        transition-duration: 0.4s;
    } 

    @media(max-width: 767px) {
        display: none;
    }

`;
