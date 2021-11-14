import styled from 'styled-components';

export const MethodsStudiesContainer = styled.section`
    width: 100%;
    position: relative;
    margin-top: 4rem;

    img.methodsStudies-student {
        position: absolute;
        right: 0;
        top: 0;
    }

    .methodsStudies-content-information {
        width: 1220px;
        padding: 4.2rem 0;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        a {
            margin-top: 2rem;
            width: 300px;
            padding: 1rem 0;
            background-color: ${({ theme }) => { return theme.COLORS.PRIMARY; }};
            font-size: 1rem;
            color: ${({ theme }) => { return theme.COLORS.BRANCO; }};
            font-family: ${({ theme }) => { return theme.FONTS.DEFAULT; }};
            font-weight: bold;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 1.5rem;
            border-radius: 6px;
            box-shadow: 1.16px 1.16px 7px rgba(0, 0, 0, 0.26);

            svg {
                path {
                    fill: ${({ theme }) => { return theme.COLORS.BRANCO; }}
                }
            }

            &:hover {
                filter: brightness(0.9)
            }
        }
    }
`;
