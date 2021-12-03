import styled from 'styled-components';

export const Container = styled.section`

    width: 1200px;
    margin: 0 auto;
    position: relative;

    @media(max-width: 1199px) and (min-width: 992px) {
        width: 992px;
    }

    @media(max-width: 991px) and (min-width: 768px) {
        width: 768px;
    }

    @media(max-width: 767px) and (min-width: 576px) {
        width: 576px;
    }

    @media(max-width: 566px) {
        width: 320px;
    }

`;
