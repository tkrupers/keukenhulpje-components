import React from 'react';
import styled from '@emotion/styled/macro';
import { breakpoint } from '../../../shared/styles';

export const NavBarToggle = styled.div`
    display: none;

    @media (max-width: ${breakpoint * 2}px) {
        display: flex;
        position: absolute;
        top: 50%;
        margin-top: -10px;
        cursor: pointer;
        left: 1em;
    }
`;
