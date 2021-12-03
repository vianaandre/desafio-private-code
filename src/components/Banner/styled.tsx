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
    }

    .bannerContainer-content {
        padding-left: 40px;
        padding-right: 0;
        display: flex;
        justify-content: space-between;
        align-items: center;

        @media(min-width: 768px) and (max-width: 997px)  {
            padding-left: 10px;
        }

        img {
            z-index: 200;
            margin-right: 10px;

            @media(min-width: 768px) and (max-width: 997px) {
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
        }
    }
`;
