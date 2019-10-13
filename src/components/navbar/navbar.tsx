import React, { useState } from 'react';
import styled from '@emotion/styled/macro';
import { color, typography, breakpoint } from '../../shared/styles';
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

const StyledNavbar = styled.nav<Props>`
    display: inline-flex;
    position: relative;
    height: 80px;
    padding-left: 1em;
    padding-right: 1em;
    border: 0;
    border-top: 1px solid #dadce0;
    border-bottom: 1px solid #dadce0;
    border-radius: 0;
    align-items: center;
    justify-content: space-evenly;
    background: white;
    box-sizing: border-box;
    font-family: ${typography.type.heading};

    ${props =>
        props.primary &&
        `
        background: ${color.secondary};
        color: ${color.lightest};
    `}
    ${props =>
        props.secondary &&
        `
        background: ${color.light};
        color: ${color.darkest};
    `};

    ${props =>
        props.fullWidth &&
        `
        display: flex;
        box-shadow: 0 4px 4px ${color.medium};
        width: 100%;
        margin-bottom: 1em;
        justify-content: space-between;

        @media (max-width: ${breakpoint * 2}px) {
            padding: 0;
            flex-direction: column;
            justify-content: flex-start;
            align-items: flex-start;
        }
    `}

    ${props =>
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

export const NavBar: React.FC<Props> = ({ children, brand, fullWidth, ...rest }) => {
    const [showMenu, setShowMenu] = useState(false);
    return (
        <StyledNavbar fullWidth={fullWidth} {...rest}>
            <NavBarContainer>
                {fullWidth && (
                    <NavBarToggle onClick={() => setShowMenu(!showMenu)}>
                        <Icon icon="menu" aria-title="menu" aria-description="toggle menu" />
                    </NavBarToggle>
                )}
                {brand && <NavBarBrand>{brand}</NavBarBrand>}
                <NavBarContent showMenu={showMenu} fullWidth={fullWidth}>
                    {children}
                </NavBarContent>
            </NavBarContainer>
        </StyledNavbar>
    );
};

export { NavLink };
