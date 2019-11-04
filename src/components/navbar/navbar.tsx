import React, { useState, useCallback, useEffect } from 'react';
import styled from '@emotion/styled/macro';
import { useSpring, animated, config } from 'react-spring';
import { color, typography, breakpoint, spacing } from '../../shared/styles';
import { Icon } from '../icon/icon';
import { NavLink } from './elements/navlink';
import { NavBarToggle } from './elements/navbar-toggle';
import { NavBarContent } from './elements/navbar-content';
import { NavBarBrand } from './elements/navbar-brand';
import { NavBarContainer } from './elements/navbar-container';

type Props = {
    brand?: string | React.ReactElement;
    primary?: boolean;
    secondary?: boolean;
    fullWidth?: boolean;
    showMenu?: boolean;
    fixed?: boolean;
    children?: any;
};

const StyledNavbar = styled(animated.nav)`
    display: flex;
    position: relative;
    flex-wrap: wrap;
    height: 70px;
    padding-left: ${spacing.padding.large}px;
    padding-right: ${spacing.padding.large}px;
    border-top: 1px solid ${color.medium};
    border-bottom: 1px solid ${color.medium};
    border-radius: 0;
    align-items: center;
    justify-content: center;
    background: white;
    box-sizing: border-box;
    font-family: ${typography.type.heading};

    ${(props: Props) =>
        props.primary &&
        `
        background: ${color.secondary};
        color: ${color.lightest};
    `}
    ${(props: Props) =>
        props.secondary &&
        `
        background: ${color.light};
        color: ${color.darkest};
    `};

    ${(props: Props) =>
        props.fullWidth &&
        `
        display: flex;
        width: 100%;
        border: 0;
        margin-bottom: 1em;
        justify-content: space-between;

        @media (max-width: ${breakpoint * 2}px) {
            padding: 0;
            flex-direction: column;
        }
    `}

    ${(props: Props) =>
        props.fixed &&
        `
        position: fixed;
        left: 0;
        margin: 0 auto;
        right: 0;
        top: 0;
        z-index: 80;
    `}
`;

const NavBarBlock = styled.div`
    display: flex;
    height: 70px;
`;

export const NavBar: React.FC<Props> = ({ children, brand, fullWidth, primary, secondary, ...rest }) => {
    const [showMenu, setShowMenu] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const barAnimation = useSpring({
        from: { transform: 'translate3d(0, -100%, 0)' },
        transform: 'translate3d(0, 0, 0)',
        config: config.stiff,
    });

    const isMobile = windowWidth <= breakpoint * 2;

    const contentAnimation = useSpring({
        from: {
            transform: isMobile ? 'translate3d(-100%,0,0)' : 'translate3d(0,20px,0)',
            height: 0,
            opacity: 0,
            display: 'flex',
            width: '100%',
        },
        transform: isMobile ? (showMenu ? 'translate3d(0,0,0)' : 'translate3d(-100%,0,0)') : 'translate3d(0,0,0)',
        opacity: isMobile ? (showMenu ? 1 : 0) : 1,
        height: isMobile ? (showMenu ? 'auto' : 0) : 'auto',
        delay: isMobile ? 0 : 600,
        config: config.wobbly,
    });

    const heightAnimation = useSpring({
        height: isMobile ? (showMenu ? 'auto' : 0) : 'auto',
        flexDirection: isMobile ? 'column' : 'row',
    });

    const toggleNavBar = useCallback(() => {
        setShowMenu(!showMenu);
    }, [showMenu]);

    const handleWindowResize = () => {
        setWindowWidth(window.innerWidth);
    };

    useEffect(() => {
        (window as any).addEventListener('resize', handleWindowResize);
        console.log(windowWidth, breakpoint * 2);
        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);

    return (
        <StyledNavbar
            style={fullWidth ? barAnimation : {}}
            fullWidth={fullWidth}
            showMenu={showMenu}
            primary={primary}
            secondary={secondary}
            {...rest}
        >
            <NavBarContainer>
                <NavBarBlock>
                    {fullWidth && (
                        <NavBarToggle onClick={toggleNavBar}>
                            <Icon icon="menu" />
                        </NavBarToggle>
                    )}
                    {brand && <NavBarBrand>{brand}</NavBarBrand>}
                </NavBarBlock>
                {fullWidth ? (
                    <animated.div style={contentAnimation}>
                        <NavBarContent style={heightAnimation} showMenu={showMenu} fullWidth={fullWidth}>
                            {children}
                        </NavBarContent>
                    </animated.div>
                ) : (
                    <NavBarContent fullWidth={fullWidth}>{children}</NavBarContent>
                )}
            </NavBarContainer>
        </StyledNavbar>
    );
};

export { NavLink };
