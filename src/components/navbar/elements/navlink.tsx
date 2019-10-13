import React from 'react';
import styled from '@emotion/styled/macro';
import { darken } from 'polished';
import { color, typography, breakpoint } from '../../../shared/styles';
import { Button, ButtonProps } from '../../button/button';
import underline from './underline.svg';

interface NavLinkProps extends ButtonProps {
    isDisabled?: boolean;
    primary?: boolean;
    isButton?: boolean;
    small?: boolean;
    children?: any;
}

export const NavLinkStyled = styled.a<NavLinkProps>`
    display: inline-flex;
    margin-right: 1em;
    font-size: ${typography.size.m2}px;
    cursor: pointer;

    ${props =>
        !props.isDisabled &&
        `
        &:hover {
            background: url(${underline});
            background-position: 0 62px;
            background-size: 144px 29px;
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
        props.small &&
        `
        font-size: ${typography.size.s3}px;

        &:hover {
            background: none;
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

    @media (max-width: ${breakpoint * 2}px) {
        margin-bottom: 8px;
    }
`;

const ButtonStyled = styled(Button)`
    margin-right: 1em;

    @media (max-width: ${breakpoint * 2}px) {
        margin-bottom: 8px;
    }
`;

export const NavLink: React.FC<NavLinkProps> = ({ isButton, children, ...rest }) => {
    return isButton ? (
        <ButtonStyled {...rest}>{children}</ButtonStyled>
    ) : (
        <NavLinkStyled {...rest}>{children}</NavLinkStyled>
    );
};
