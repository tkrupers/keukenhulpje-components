import React from 'react';
import styled from '@emotion/styled/macro';
import css from '@emotion/css/macro';
import { Icon } from '../icon/icon';
import { color, typography } from '../../shared/styles';
import { darken } from 'polished';

type Props = {
    secondary?: boolean;
    withArrow?: boolean;
    children?: any;
};

const StyledLink = styled.a<Props>`
    display: inline-block;
    transition: transform 150ms ease-out, color 150ms ease-out;
    text-decoration: none;
    color: ${color.secondary};
    font-family: ${typography.type.primary};
    font-size: ${typography.size.s3}px;

    &:hover,
    &:focus {
        cursor: pointer;
        color: ${darken(0.07, color.secondary)};
    }
    &:active {
        color: ${darken(0.1, color.secondary)};
    }

    svg {
        display: inline-block;
        height: 1em;
        width: 1em;
        vertical-align: text-top;
        position: relative;
        bottom: -0.125em;
        margin-right: 0.4em;
    }

    ${props =>
        props.secondary &&
        css`
            color: ${color.mediumdark};
            &:hover {
                color: ${color.dark};
            }
            &:active {
                color: ${color.darker};
            }
        `};
`;

const LinkInner = styled.span<Props>`
    ${props =>
        props.withArrow &&
        css`
            > svg:last-of-type {
                height: 0.7em;
                width: 0.7em;
                margin-right: 0;
                margin-left: 0.25em;
                bottom: auto;
                vertical-align: inherit;
            }
        `};
`;

export const Link: React.FC<Props> = ({ children, withArrow, ...rest }) => {
    const content = (
        <>
            <LinkInner withArrow={withArrow}>
                {children}
                {withArrow && <Icon icon="arrowright" />}
            </LinkInner>
        </>
    );

    return <StyledLink {...rest}>{content}</StyledLink>;
};
