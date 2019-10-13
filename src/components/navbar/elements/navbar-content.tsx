import React from 'react';
import styled from '@emotion/styled/macro';
import { breakpoint } from '../../../shared/styles';
import { animated } from 'react-spring';

type Props = { fullWidth?: boolean; showMenu?: boolean };

export const NavBarContent: React.FC<Props> = styled(animated.div)`
    display: flex;
    align-items: center;
    background: inherit;
    box-sizing: border-box;
    overflow: hidden;
    width: 100%;
    justify-content: space-evenly;
    will-change: transform, opacity, height;

    ${props =>
        props.fullWidth &&
        `
        justify-content: flex-end;
        width: 100%;

        @media (max-width: ${breakpoint * 2}px) {
            padding-bottom: 2em;
        }
    `}
`;
