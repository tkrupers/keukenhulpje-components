import React from 'react';
import styled from '@emotion/styled/macro';
import { typography, color } from '../../shared/styles';

type Props = {
    align?: 'left' | 'center' | 'right';
    primary?: boolean;
    secondary?: boolean;
    tertiary?: boolean;
    inverted?: boolean;
    children?: any;
};

const TextStyled = styled.p<Props>`
    display: inline-block;
    font-family: ${typography.type.primary};
    font-size: ${typography.size.s3}px;
    width: 100%;
    color: ${props =>
        props.primary
            ? color.primary
            : props.secondary
            ? color.secondary
            : props.tertiary
            ? color.tertiary
            : props.inverted
            ? color.lightest
            : color.darkest};
    margin: 0;
    padding: 0;
    text-align: ${props => (props.align === 'center' ? 'center' : props.align === 'right' ? 'right' : 'left')};
`;

export const Text: React.FC<Props> = ({ align, children, ...rest }) => (
    <TextStyled align={align} {...rest}>
        {children}
    </TextStyled>
);
