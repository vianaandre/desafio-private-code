import styled from 'styled-components';

export const HeaderContainer = styled.header`
    width: 1220px;
    height: 80px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .header-desktop {
        display: block;
    }

    .header-mobile {
        display: none;
    }

    @media(min-width: 998px) and (max-width: 1219px) {
        width: 998px;
    }

    @media(min-width: 768px) and (max-width: 997px) {
        width: 768px;
    }

    @media(max-width: 767px) {
        width: 320px;
        overflow: hidden;

        .header-desktop {
            display: none;
        }

        .header-mobile {
            display: block;

            svg {
                float: right;
                text-align: right;
                width: 20px;
            }
        }
    }

    svg {
        width: 200px;
    }
`;
