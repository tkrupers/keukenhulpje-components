import React from 'react';
import { css, Global } from '@emotion/core';

// import { color, typography } from './styles';

export const fontUrl = 'https://fonts.googleapis.com/css?family=Roboto&display=swap';

export const bodyStyles = css`
    /* global styles */
    font-size: 32px;
    font-family: 'Roboto', sans-serif;
`;

export const GlobalStyle: React.FC = () => <Global styles={bodyStyles} />;
