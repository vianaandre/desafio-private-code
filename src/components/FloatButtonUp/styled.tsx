import styled from 'styled-components';

export const FloatButtonUpContainer = styled.button`

    cursor: pointer;
    position: fixed;
    bottom: 10px;
    right: 10px;
    padding: 1rem;
    background-color: ${({ theme }) => { return theme.COLORS.PRIMARY; }};
    border-radius: 50%;
    z-index: 1000;

    &:hover {
        filter: brightness(0.9)
    }

`;
