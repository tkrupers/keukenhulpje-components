import React from 'react';
import styled from '@emotion/styled/macro';
import { breakpoint } from '../../../shared/styles';

export const NavBarBrand = styled.div`
    min-width: 200px;
    margin: auto;
    text-align: center;

    @media (max-width: ${breakpoint * 2}px) {
        position: absolute;
        top: 50%;
        left: 50%;
        margin: -10px 0 0 -100px;
    }
`;
