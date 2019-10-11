import * as React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { GlobalStyle } from '../src/shared/global';

addDecorator((story: any) => (
  <>
    <GlobalStyle />
    {story()}
  </>
));

// automatically import all files ending in *.stories.tsx
configure(require.context('../src', true, /\.stories\.tsx?$/), module)