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

    @media(min-width: 768px) and (max-width: 997px) {
        height: 600px;
    }

    @media(max-width: 767px) {
        height: 700px;

        img {
            display: none;
        }
    }

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

        @media(min-width: 998px) and (max-width: 1219px) {
            width: 998px;
        }

        @media(min-width: 768px) and (max-width: 997px) {
            width: 768px;
        }

        @media(max-width: 767px) {
            width: 320px;
            padding: 0;
        }

        .bannerContainer-content-education {
            width: 40%;
            z-index: 200;
            svg {
                width: 100%;

                @media(min-width: 768px) and (max-width: 997px) {
                    display: none;
                }

                @media(max-width: 767px) {
                    display: none;
                }
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

            @media(min-width: 768px) and (max-width: 997px) {
                display: none;
            }

            @media(max-width: 767px) {
                display: none;
            }
        }
    }
`;
