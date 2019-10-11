import React from 'react';
import styled from '@emotion/styled/macro';
import { typography } from '../../shared/styles';
import css from '@emotion/css';

type Props = {
    level: 1 | 2 | 3 | 4;
    children?: any;
};

const HeadingStyles = css`
    display: block;
    font-family: ${typography.type.heading};
`;

const Heading1 = styled.h1`
    ${HeadingStyles};
    font-size: ${typography.size.l3}px;
    margin-top: 16px;
`;

const Heading2 = styled.h2`
    ${HeadingStyles};
    font-size: ${typography.size.l1}px;
    margin-top: 8px;
`;

const Heading3 = styled.h3`
    ${HeadingStyles};
    font-size: ${typography.size.m2}px;
    margin-top: 4px;
`;

const Heading4 = styled.h4`
    ${HeadingStyles};
    font-size: ${typography.size.s3}px;
    margin-top: 2px;
`;

export const Heading: React.FC<Props> = ({ level, children }) => {
    switch (level) {
        case 1:
            return <Heading1>{children}</Heading1>;
        case 2:
            return <Heading2>{children}</Heading2>;
        case 3:
            return <Heading3>{children}</Heading3>;
        case 4:
            return <Heading4>{children}</Heading4>;
        default:
            return <Heading1>{children}</Heading1>;
    }
};
