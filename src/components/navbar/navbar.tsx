import React from 'react';
import styled from '@emotion/styled/macro';
import { color, typography } from '../../shared/styles';

type Props = {
    primary?: boolean;
    secondary?: boolean;
    fullWidth?: boolean;
    fixed?: boolean;
    children?: any;
};

const StyledNavbar = styled.nav<Props>`
    display: inline-flex;
    height: 80px;
    padding-left: 60px;
    padding-right: 60px;
    border: 0;
    border-top: 1px solid #dadce0;
    border-bottom: 1px solid #dadce0;
    border-radius: 0;
    min-width: 300px;
    align-items: center;
    justify-content: space-evenly;
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

export const NavBarContent = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 100%;
    align-items: center;
`;

export const NavBar: React.FC<Props> = ({ children, ...rest }) => {
    return <StyledNavbar {...rest}>{children}</StyledNavbar>;
};
