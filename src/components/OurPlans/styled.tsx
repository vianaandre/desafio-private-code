import styled from 'styled-components';

export const OurPlansContainer = styled.section`

    margin: 4rem auto;

    @media(min-width: 768px) and (max-width: 997px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 120px;
    }

    @media(max-width: 767px) {
        width: 320px;
        text-align: center;
    }

    .ourPlans {
        margin-top: 3rem;
        display: flex;
        justify-content: space-between;

        @media(min-width: 768px) and (max-width: 997px) {
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 2rem;
        }

        @media(max-width: 767px) {
            flex-direction: column;
            gap: 2rem;
        }
    }

    span {
        font-size: 1.25rem;
        font-family: ${({ theme }) => { return theme.FONTS.DEFAULT; }};
        color: #32B5FF;
        font-weight: bold;
        text-transform: uppercase;
    }

    h2 { 
        margin-top: 1rem;
        font-size: 2rem;
        color: ${({ theme }) => { return theme.COLORS.PRIMARY; }};
        font-family: ${({ theme }) => { return theme.FONTS.DEFAULT; }}; 
        font-weight: bold;

        @media(max-width: 767px)  {
            font-size: 1.25rem;
        }
    }

`;
