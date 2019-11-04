import React from 'react';
import styled from '@emotion/styled/macro';
import { breakpoint } from '../../../shared/styles';

export const NavBarContainer = styled.div`
    max-width: 1440px;
    width: 100%;
    display: flex;
    background: inherit;

    @media (max-width: ${breakpoint * 2}px) {
        flex-direction: column;
    }
`;
