import React from 'react';
import { Heading } from './heading';

export default {
    title: 'Components|Heading',
    component: Heading,
};

export const standard = () => (
    <div>
        <Heading level={1}>Heading 1</Heading>
        <Heading level={2}>Heading 2</Heading>
        <Heading level={3}>Heading 3</Heading>
        <Heading level={4}>Heading 4</Heading>
    </div>
);
