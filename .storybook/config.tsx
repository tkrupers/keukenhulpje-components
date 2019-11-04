import * as React from 'react';
import { configure, addDecorator } from '@storybook/react';

addDecorator((story: any) => (
  <>
    {story()}
  </>
));

// automatically import all files ending in *.stories.tsx
configure(require.context('../src', true, /\.stories\.tsx?$/), module)