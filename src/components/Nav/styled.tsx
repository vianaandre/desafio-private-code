import styled from 'styled-components';

export const NavContainer = styled.nav`
    ul {
        width: 611px;
        display: flex;
        justify-content: space-between;

        @media(min-width: 768px) and (max-width: 997px) {
            width: 500px;
        }

        li {
            cursor: pointer;
            a {
                font-size: 1rem;
                color: ${({ theme }) => { return theme.COLORS.GRAY_200; }};
                font-family: ${({ theme }) => { return theme.FONTS.DEFAULT; }};
                font-weight: 500;

                &:hover {
                    color: ${({ theme }) => { return theme.COLORS.PRIMARY; }};

                    @media(max-width: 767px) {
                        color: ${({ theme }) => { return theme.COLORS.GRAY_200; }}
                    }
                }
            }

            .active {
                color: ${({ theme }) => { return theme.COLORS.PRIMARY; }}
            }
        }

         .nav-actionEntrar {
                a {
                    padding: 0.75rem 2.75rem;
                    background-color: ${({ theme }) => { return theme.COLORS.PRIMARY; }};
                    border-radius: 0.375rem;
                    color: ${({ theme }) => { return theme.COLORS.BRANCO; }};

                    &:hover {
                        color: ${({ theme }) => { return theme.COLORS.BRANCO; }};
                        filter: brightness(0.9);

                        @media(max-width: 767px) {
                            color: ${({ theme }) => { return theme.COLORS.BRANCO; }};
                            filter: brightness(1)
                        }
                    }
                }

                @media(max-width: 767px) {
                    margin-top: 1rem;
                }
            }
    }
`;
