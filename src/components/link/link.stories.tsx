import React from 'react';
import { Link } from './link';

export default {
    title: 'Design system|Link',
    component: Link,
};

export const standard = () => (
    <div>
        <div>
            <Link>Default link</Link>
            <Link secondary>Secondary link</Link>
            <Link withArrow>Link with arrow</Link>
            <Link secondary withArrow>
                Secondary link with arrow
            </Link>
        </div>
    </div>
);
