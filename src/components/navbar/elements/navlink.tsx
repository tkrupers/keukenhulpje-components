import React from 'react';
import styled from '@emotion/styled/macro';
import { darken } from 'polished';
import { color } from '../../../shared/styles';
import { Button, ButtonProps } from '../../button/button';

interface NavLinkProps extends ButtonProps {
    isDisabled?: boolean;
    primary?: boolean;
    isButton?: boolean;
    children?: any;
}

export const NavLinkStyled = styled.a<NavLinkProps>`
    display: inline-flex;
    margin-right: 1em;
    cursor: pointer;

    ${props =>
        !props.isDisabled &&
        `
        &:hover {
            color: ${darken(0.05, color.lightest)}
        }
    `}

    ${props =>
        !props.isDisabled &&
        props.primary &&
        `
        color: ${color.primary};  

        &:hover {
            color: ${darken(0.05, color.primary)}
        }
    `}

    ${props =>
        props.isDisabled &&
        `
        cursor: not-allowed !important;
        opacity: 0.5;
        &:hover {
          transform: none;
        }
    `}
`;

const ButtonStyled = styled(Button)`
    margin-right: 1em;
`;

export const NavLink: React.FC<NavLinkProps> = ({ isButton, children, ...rest }) => {
    return isButton ? (
        <ButtonStyled {...rest}>{children}</ButtonStyled>
    ) : (
        <NavLinkStyled {...rest}>{children}</NavLinkStyled>
    );
};
