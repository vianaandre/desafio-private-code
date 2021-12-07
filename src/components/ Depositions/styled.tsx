import styled from 'styled-components';

export const DepositionsContainer = styled.section`

    .depositions-title {
        overflow: visible;
        position: relative;

        @media(max-width: 991px) and (min-width: 768px) {
            text-align: center;
        }

        @media(max-width: 767px) {
            text-align: center;
        }

        span {
            font-size: 1.25rem;
            color: ${({ theme }) => { return theme.COLORS.SECUNDARY; }};
            font-weight: bold;
            font-family: ${({ theme }) => { return theme.FONTS.DEFAULT; }};
            text-transform: uppercase;
            color: #32B5FF;
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
                font-size: 24px
            }

            @media(max-width: 767px) {
                font-size: 1.25rem;
                width: 100%;
            }
        }
    }

`;

export const CarouselDepostions = styled.div`

    width: 1140px;
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

        .carouselDesktop {

            div.swiper-container {
                width: 872px;
            }
        }
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
                width: 660px;
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
        left: -60px;

        @media(max-width: 1199px) and (min-width: 992px) {
            z-index: 0;
            left: 0;
        }

        @media(max-width: 991px) and (min-width: 768px) {
            left: 0px;
        }

        @media(max-width: 767px) {
            left: calc(50% - 53px)
        }
    }

    button.next {
        position: absolute;
        right: -60px;

        svg {
            transform: rotate(-180deg);
        }

        @media(max-width: 1199px) and (min-width: 992px) {
            z-index: 0;
            right: 0;
        }

        @media(max-width: 991px) and (min-width: 768px) {
            right: 0px;
        }

        @media(max-width: 767px) {
            right: calc(50% - 53px);
        }
    }


    div.swiper-slide {
        display: flex;
        justify-content: space-between;
        padding: 20px 5px;
        

        @media(max-width: 1199px) and (min-width: 992px) {
            justify-content: space-around;
            padding: 20px 2px;
            width: 872px;
        } 

        @media(max-width: 991px) and (min-width: 768px) {
            justify-content: space-between;
            padding: 10px 2px;
            width: 660px;
        }
    }

    div.swiper-container  {    
        overflow: visible;

        .swiper-button-prev {
            display: block;
            margin-left: -60px;
            opacity: 0;
            z-index: 40000;

            @media(max-width: 1199px) and (min-width: 992px) {
                opacity: 0;
                z-index: 10000;
                margin-left: -60px;
            }

            @media(max-width: 991px) and (min-width: 768px) {
                margin-left: -55px;
                opacity: 0;
            }

            @media(max-width: 767px) {
                opacity: 0;
                margin-left: 110px;
                margin-top: 134px;
            }
        }

        .swiper-button-next {
            display: block;
            margin-right: -60px;
            opacity: 0;
            z-index: 40000;

            @media(max-width: 1199px) and (min-width: 992px) {
                z-index: 40000;
                opacity: 0;
                margin-right: -60px;
            }

            @media(max-width: 991px) and (min-width: 768px) {
                margin-right: -55px;
                opacity: 0;
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
