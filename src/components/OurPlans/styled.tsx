import styled from 'styled-components';

export const OurPlansContainer = styled.section`

    width: 1220px;
    margin: 4rem auto;

    .ourPlans {
        margin-top: 3rem;
        display: flex;
        justify-content: space-between;
    }

    span {
        font-size: 1.25rem;
        font-family: ${({ theme }) => { return theme.FONTS.DEFAULT; }};
        color: ${({ theme }) => { return theme.COLORS.SECUNDARY; }};
        font-weight: bold;
        text-transform: uppercase;
    }

    h2 { 
        margin-top: 1rem;
        font-size: 2rem;
        color: ${({ theme }) => { return theme.COLORS.PRIMARY; }};
        font-family: ${({ theme }) => { return theme.FONTS.DEFAULT; }}; 
        font-weight: bold;
    }

`;
