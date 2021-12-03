import styled from 'styled-components';

export const DepartmentsContainer = styled.section`

    width: 1220px;
    margin: 0 auto;
    overflow: hidden;

    img {
        margin-left: -40px;
    }

    @media(min-width: 998px) and (max-width: 1219px) {
        width: 998px
    }

    @media(min-width: 768px) and (max-width: 997px) {
        width: 768px;
    }

    @media(max-width: 767px) {
        width: 320px;
    }

`;
