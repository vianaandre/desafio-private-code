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

    .carouselMobile {
        display: none;
    }

    .carouselTablet {

        div.swiper-container {
            display: none;
        }

    }

    @media(max-width: 1199px) and (min-width: 992px) {
        width: 992px;
    } 

    @media(max-width: 991px) and (min-width: 768px) {
        width: 768px;

        .carouselDesktop {
            display: none;

            div.swiper-container {
                display: none;
            }
        }

        .carouselTablet {
            div.swiper-container {
                display: block;
            }
        }
    }

    .carouselDesktop {
        display: block;
    }

    @media(max-width: 767px) {
        width: 320px;

        .carouselDesktop {
            display: none;
        }

        .carouselMobile {
            display: block;
            width: 320px;
        }

    }

    button {
        position: absolute;
        top: calc(50% - 25px);
        padding: 17px 20px;
        border-radius: 50%;
        background: transparent;
        border: solid 1px;
        border-color: #252160;

        @media(max-width: 767px) {
            top: 260px;
        }
    }

    button.prev {
        left: -50px;

        @media(max-width: 1199px) and (min-width: 992px) {
            left: -30px;
            z-index: 0
        }

        @media(max-width: 991px) and (min-width: 768px) {
            left: 0;
        }

        @media(max-width: 767px) {
            left: calc(50% - 52px)
        }
    }

    button.next {
        position: absolute;
        right: -50px;

        svg {
            transform: rotate(-180deg);
        }

        @media(max-width: 1199px) and (min-width: 992px) {
            right: -30px;
            z-index: 0
        }

        @media(max-width: 991px) and (min-width: 768px) {
            right: 0;
        }

        @media(max-width: 767px) {
            right: calc(50% - 52px);
        }
    }


    div.swiper-slide {
        display: flex;
        justify-content: space-between;
        padding: 20px 10px;


        @media(max-width: 1199px) and (min-width: 992px) {
            justify-content: space-around;
            padding: 20px 20px;
        } 

        @media(max-width: 991px) and (min-width: 768px) {
            justify-content: space-around;
            padding: 0 40px;
        }
    }

    div.swiper-container  {    
        overflow: visible;

        .swiper-button-prev {
            display: block;
            margin-left: -50px;
            opacity: 0;
            z-index: 40000;

            @media(max-width: 1199px) and (min-width: 992px) {
                margin-left: -30px;
                opacity: 0;
                z-index: 10000
            }

            @media(max-width: 991px) and (min-width: 768px) {
                margin-left: 0;
            }

            @media(max-width: 767px) {
                opacity: 0;
                margin-left: 110px;
                margin-top: 134px;
            }
        }

        .swiper-button-next {
            display: block;
            margin-right: -50px;
            opacity: 0;
            z-index: 40000;

            @media(max-width: 1199px) and (min-width: 992px) {
                margin-right: -30px;
                z-index: 40000;
                opacity: 0;
            }

            @media(max-width: 991px) and (min-width: 768px) {
                margin-right: 0;
            }

            @media(max-width: 767px) {
                opacity: 0;
                margin-right: 110px;
                margin-top: 134px;
            }
        }

        div.swiper-pagination {
            margin-bottom: -40px;

            @media(max-width: 767px) {
                display: none;
            }
        }
    }

`;
