import styled from 'styled-components';

export const BannerContainer = styled.section`
    position: relative;
    width: 100%;
    height: 800px;
    display: flex;
    align-items: center;
    background-color: ${({ theme }) => { return theme.COLORS.PRIMARY; }};
    overflow: hidden;
    margin-bottom: 4rem;

    img {
        right: -250px;
        top: -400px;
        position: absolute;
    }

    .bannerContainer-content {
        position: relative;
        width: 1220px;
        margin: 0 auto;
        padding: 0 3.5rem;
        display: flex;
        justify-content: space-between;

        .bannerContainer-content-education {
            width: 50%;
            z-index: 200;
            svg {
                width: 100%;
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
        }
    }
`;
