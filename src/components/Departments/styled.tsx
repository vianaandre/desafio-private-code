import styled from 'styled-components';

export const DepartmentsContainer = styled.section`

    overflow: hidden;

    img {
        margin-left: -40px;
    }

    @media(max-width: 1199px) {
        overflow-x: scroll;

        &::-webkit-scrollbar {
            background-color: #f1f1f1;
            height: 10px;
            border-radius: 5px;
        }

        &::-webkit-scrollbar-thumb {
            background-color: #DEDEDE;
            border-radius: 5px;
        }
    }

    @media(max-width: 1199px) and (min-width: 992px) {

        overflow-x: scroll;

        &::-webkit-scrollbar {
            background-color: #f1f1f1;
            height: 10px;
            border-radius: 5px;
        }

        &::-webkit-scrollbar-thumb {
            background-color: #DEDEDE;
            border-radius: 5px;
        }
    }

`;
