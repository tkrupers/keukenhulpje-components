import React from 'react';
import styled from '@emotion/styled/macro';
import { breakpoint } from '../../../shared/styles';

export const NavBarContent = styled.div<{ fullWidth?: boolean; showMenu?: boolean }>`
    display: flex;
    align-items: center;
    background: inherit;
    box-sizing: border-box;

    ${props =>
        props.fullWidth &&
        `
        justify-content: flex-end;
        width: 100%;

        @media (max-width: ${breakpoint * 2}px) {
            transform: translate(0, 78px);
            display: ${!props.showMenu ? 'none' : 'flex'};
            align-items: flex-start;
            flex-direction: column;
            padding-left: 1em;
            padding-bottom: 1em;
        }
    `}
`;
