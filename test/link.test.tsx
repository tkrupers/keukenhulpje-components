import * as React from 'react';
import renderer from 'react-test-renderer';

import { Link } from '../src/components/link/link';

test('Link component', () => {
    expect(renderer.create(<Link>Default link</Link>).toJSON()).toMatchSnapshot();
});
