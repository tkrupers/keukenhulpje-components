import React from 'react';
import styled from '@emotion/styled/macro';
import { color } from '../../shared/styles';

type Props = {
    primary?: boolean;
    secondary?: boolean;
    tertiary?: boolean;
    showCurves?: boolean;
    children?: any;
};

const PanelStyled = styled.div<Props>`
    display: flex;
    position: relative;
    flex-direction: column;
    flex-basis: auto;

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

const CurveTop = styled.svg`
    position: absolute;
    top: -1px;
    left: 0;
    width: 100%;
`;

const CurvePath = styled.path<Props>`
    box-sizing: border-box;
    fill: ${props =>
        props.primary
            ? color.primary
            : props.secondary
            ? color.secondary
            : props.tertiary
            ? color.tertiary
            : color.lighter};
`;

export const Panel: React.FC<Props> = ({ children, showCurves = false, ...rest }) => {
    return (
        <PanelStyled {...rest}>
            {showCurves && (
                <CurveTop>
                    <CurvePath
                        {...rest}
                        d="M932.526 100C609.446 144 198.254 112 0 56V0H1564V132C1461.2 106.667 1190.99 64.8 932.526 100Z"
                        transform="translate(1531) scale(-1 1)"
                        fill="#3126C9"
                    />
                </CurveTop>
            )}
            <PanelContainer>{children}</PanelContainer>
        </PanelStyled>
    );
};
