import React from 'react';
import styled from '@emotion/styled/macro';
import { typography } from '../../shared/styles';
import css from '@emotion/css';

type Props = {
    level: 1 | 2 | 3 | 4;
    align?: 'left' | 'right' | 'center';
    children?: any;
};

const HeadingStyles = css`
    display: block;
    font-family: ${typography.type.heading};
`;

const Heading1 = styled.h1<Partial<Props>>`
    ${HeadingStyles};
    font-size: ${typography.size.l3}px;
    margin-top: 16px;

    ${props => `
        text-align: ${props.align === 'center' ? 'center' : props.align === 'right' ? 'right' : 'left'};
    `}
`;

const Heading2 = styled.h2<Partial<Props>>`
    ${HeadingStyles};
    font-size: ${typography.size.l1}px;
    margin-top: 8px;

    ${props => `
    text-align: ${props.align === 'center' ? 'center' : props.align === 'right' ? 'right' : 'left'};
`}
`;

const Heading3 = styled.h3<Partial<Props>>`
    ${HeadingStyles};
    font-size: ${typography.size.m2}px;
    margin-top: 4px;

    ${props => `
    text-align: ${props.align === 'center' ? 'center' : props.align === 'right' ? 'right' : 'left'};
`}
`;

const Heading4 = styled.h4<Partial<Props>>`
    ${HeadingStyles};
    font-size: ${typography.size.s3}px;
    margin-top: 2px;

    ${props => `
    text-align: ${props.align === 'center' ? 'center' : props.align === 'right' ? 'right' : 'left'};
`}
`;

export const Heading: React.FC<Props> = ({ level, align = 'left', children }) => {
    switch (level) {
        case 1:
            return <Heading1 align={align}>{children}</Heading1>;
        case 2:
            return <Heading2 align={align}>{children}</Heading2>;
        case 3:
            return <Heading3 align={align}>{children}</Heading3>;
        case 4:
            return <Heading4 align={align}>{children}</Heading4>;
        default:
            return <Heading1 align={align}>{children}</Heading1>;
    }
};
