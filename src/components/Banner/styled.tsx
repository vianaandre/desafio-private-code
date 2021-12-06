import styled from 'styled-components';

export const BannerContainer = styled.section`
    position: relative;
    width: 100%;
    height: 821px;
    display: flex;
    align-items: center;
    background-color: ${({ theme }) => { return theme.COLORS.PRIMARY; }};
    overflow: hidden;
    margin-bottom: 4rem;

    img.bannerContainer-img-background {
        right: -120px;
        top: -200px;
        z-index: 150;
        position: absolute;

        @media(max-width: 767px) {
            display: none
        }

        @media(max-width: 1199px) and (min-width: 992px) {
            right: -300px;
            top: -150px
        }
    }

    .bannerContainer-content {
        padding-left: 40px;
        padding-right: 0;
        display: flex;
        justify-content: space-between;
        align-items: center;

        @media(max-width: 767px) {
            padding-left: 0;
        }

        img {
            z-index: 200;
            margin-right: 10px;

            @media(max-width: 1199px) and (min-width: 992px) {
                width: 600px;
                margin-right: 0;
            }

            @media(min-width: 768px) and (max-width: 997px) {
                display: none;
            }

            @media(max-width: 767px) {
                display: none;
            }
        }

        .bannerContainer-boxTransparent {
            position: absolute;
            z-index: 100;
            top: 0px;
            left: 0px;
            width: 641px;
            height: 580px;
            display: block;
            background:#292663;
            border-radius: 124px;
            transform: rotate(-15.22deg);

            @media(min-width: 768px) and (max-width: 997px)  {
                display: none;
            }

            @media(max-width: 767px) {
                display: none
            }
        }
    }
`;
