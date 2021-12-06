import styled from 'styled-components';

export const HeaderContainer = styled.header<{
    active: boolean
}>`
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

    @media(max-width: 767px) {

        .header-mobile {
            display: block;
            display: flex;

            .header-hamburguer {

                position: relative;
                width: fit-content; 
                display: flex;
                flex-direction: column;
                height: 22px;
                z-index: 5000;
                cursor: pointer;

                div {
                    position: absolute;
                    right: 0;
                    width: 30px;
                    height: 4px;
                    background-color: ${({ theme }) => { return theme.COLORS.BLACK; }};
                    display: block;
                    background-color: ${({ theme }) => { return theme.COLORS.PRIMARY; }};
                }

                @keyframes menuTop {
                    from {
                        top: 9px;
                    }

                    to {
                        top: 0
                    }
                }

                @keyframes menuBottom {
                    from {
                        bottom: 9px;
                    }

                    to {
                        bottom: 0
                    }
                }

                div:nth-child(1) {
                    animation: menuTop 0.2s;
                    animation-fill-mode: forwards;                    
                }

                div:nth-child(2) {
                    top: 9px;
                    transition: 0.2s;
                }

                div:nth-child(3) {
                    animation: menuBottom 0.2s;
                    animation-fill-mode: forwards;
                }

                @keyframes topArrow {

                    from {
                        top: 0;
                    }

                    to {
                        top: 9px;
                    }
                }
                @keyframes bottomArrow {
                    from {
                        bottom: 0;
                    }

                    to {
                        bottom: 9px
                    }
                }

                div.activeMidlle {
                    
                }

                div.activeTop {
                    position: absolute;
                    animation: topArrow 0.2s;
                    animation-fill-mode: forwards;
                }

                div.activeBottom {
                    position: absolute;
                    animation: bottomArrow 0.2s;
                    animation-fill-mode: forwards;
                }
            }

            ul {
                width: 100%;
                padding: 120px;
                height: 100vh;
                background-color: ${({ theme }) => { return theme.COLORS.BRANCO; }};
                flex-direction: column;
                align-items: center;
                justify-content: space-around;
                position: fixed;
                z-index: 2000;
                right: ${({ active }) => { return (active ? 0 : '-100%'); }};
                transition: 300ms;
                top: 0;

            }
        }

        .header-desktop {
            display: none;
        } 

    }

    svg {
        width: 200px;
    }
`;
