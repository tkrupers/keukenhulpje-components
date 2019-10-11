import React from 'react';
import styled from '@emotion/styled/macro';
import { darken } from 'polished';
import { color, typography } from '../../shared/styles';
import { easing } from '../../shared/animation';

export enum SIZES {
    SMALL = 'small',
    LARGE = 'large',
}

const Text = styled.span`
    display: inline-block;
    vertical-align: top;
`;

const Loading = styled.span`
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    opacity: 0;
`;

export interface ButtonProps {
    isLoading?: boolean;
    primary?: boolean;
    secondary?: boolean;
    tertiary?: boolean;
    size?: SIZES;
    isDisabled?: boolean;
    disabled?: boolean;
    isLink?: boolean;
    loadingText?: string;
    children?: any;
}

const StyledButton = styled.button<ButtonProps>`
	border: 0;
	border-radius: 3em;
	cursor: pointer;
	display: inline-block;
	overflow: hidden;
	padding: ${props => (props.size === SIZES.SMALL ? '12px 24px' : '18px 36px')};
	position: relative;
	text-align: center;
	text-decoration: none;
	transition: all 150ms ease-out;
	transform: translate3d(0, 0, 0);
	vertical-align: top;
	white-space: nowrap;
	user-select: none;
	opacity: 1;
	margin: 0;
    background: transparent;
    font-family: ${typography.type.heading};

	font-size: ${props => (props.size === SIZES.SMALL ? typography.size.s1 : typography.size.s2)}px;
	font-weight: ${typography.weight.extrabold};
	line-height: 1;

	${props =>
        !props.isLoading &&
        `
        &:hover {
            background: ${darken(0.05, '#fff')}
        }
          &:active {
            outline: 0;
            background: ${darken(0.2, '#fff')}
          }
          &:focus {
            outline: 0;
          }
        `} 
        
    ${props =>
        props.disabled &&
        `
              cursor: not-allowed !important;
              opacity: 0.5;
              &:hover {
                transform: none;
              }
            `} 
    ${props =>
        props.primary &&
        `
            background: ${color.primary};
            color: ${color.darkest};
            ${!props.isLoading &&
                `
                &:hover {
                    background: ${darken(0.05, color.primary)};
                }
                &:active {
                     background: ${darken(0.2, color.primary)};
                }
                `}
            `}

    ${props =>
        props.secondary &&
        `
            background: ${color.secondary};
            color: ${color.lightest};
            ${!props.isLoading &&
                `
                &:hover {
                background: ${darken(0.05, color.secondary)};
                }
                &:active {
                 background: ${darken(0.2, color.secondary)};
                }
            `}
        `}

    ${props =>
        props.tertiary &&
        `
            background: ${color.tertiary};
            color: ${color.lightest};
            ${!props.isLoading &&
                `
                &:hover {
                background: ${darken(0.05, color.tertiary)};
                }
                &:active {
                 background: ${darken(0.2, color.tertiary)};
                }
            `}
        `}

    ${props =>
        props.isLoading &&
        `
            cursor: progress !important;
            opacity: 0.7;

            ${Loading} {
                transition: transform 700ms ${easing.rubber};
                transform: translate3d(0, -50%, 0);
                opacity: 1;
            }
            ${Text} {
                transform: scale3d(0, 0, 1) translate3d(0, -100%, 0);
                opacity: 0;
            }
            &:hover {
                transform: none;
            }
        `}
                    
    ${Text} {
        transform: scale3d(1, 1, 1) translate3d(0, 0, 0);
        transition: transform 700ms ${easing.rubber};
        opacity: 1;
    }

    ${Loading} {
        transform: translate3d(0, 100%, 0);
        }
            
`;

const ButtonLink = StyledButton.withComponent('a');

export const Button: React.FC<ButtonProps> = ({ isDisabled, isLoading, isLink, loadingText, children, ...props }) => {
    const buttonInner = (
        <>
            <Text>{children}</Text>
            {isLoading && <Loading>{loadingText || 'Loading...'}</Loading>}
        </>
    );

    let SelectedButton: any = StyledButton;

    if (isLink) {
        SelectedButton = ButtonLink;
    }

    return (
        <SelectedButton isLoading={isLoading} disabled={isDisabled} {...props}>
            {buttonInner}
        </SelectedButton>
    );
};
