import React from 'react';
import styled from '@emotion/styled/macro';
import { color } from '../../shared/styles';

type Props = {
    primary?: boolean;
    secondary?: boolean;
    tertiary?: boolean;
    showCurves?: boolean;
    showBottomCurve?: boolean;
    children?: any;
};

const PanelStyled = styled.div<Props>`
    display: flex;
    position: relative;
    flex-direction: column;
    flex-basis: auto;
    background: ${color.lighter};

    ${props =>
        props.primary &&
        `
        background: ${color.primary};
        color: ${color.darkest};
    `}

    ${props =>
        props.secondary &&
        `
        background: ${color.secondary};
        color: ${color.lightest};
    `}

    ${props =>
        props.tertiary &&
        `
        background: ${color.tertiary};
        color: ${color.lightest};
    `}
`;

const PanelContainer = styled.section`
    position: relative;
    width: 100%;
    display: inline-block;
    margin-left: auto;
    margin-right: auto;
`;

export const Panel: React.FC<Props> = ({ children, ...rest }) => {
    return (
        <PanelStyled {...rest}>
            <PanelContainer>{children}</PanelContainer>
        </PanelStyled>
    );
};
