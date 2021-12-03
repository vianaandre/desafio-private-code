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

`;

export const CarouselDepostions = styled.div`

    width: 1220px;
    margin: 0 auto;
    margin-top: 70px;
    position: relative;

    button {
        position: absolute;
        top: calc(50% - 25px);
        padding: 17px 20px;
        border-radius: 50%;
    }

    button.prev {
        left: -50px;
    }

    button.next {
        position: absolute;
        right: -50px;

        svg {
            transform: rotate(-180deg);
        }
    }


    div.swiper-slide {
        display: flex;
        justify-content: space-between;
        padding: 10px 10px;
    }

    div.swiper-container  {    
        overflow: visible;

        .swiper-button-prev {
            display: block;
            margin-left: -50px;
            opacity: 0;
        }

        .swiper-button-next {
            display: block;
            margin-right: -50px;
            opacity: 0;
        }

        div.swiper-pagination {
            margin-bottom: -40px
        }
    }

`;
