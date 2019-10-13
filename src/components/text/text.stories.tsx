import React from 'react';
import { Text } from './text';
import { Panel } from '../panel/panel';

export default {
    title: 'Components | Text',
    component: Text,
};

export const standard = () => (
    <div>
        <Text>Standard text</Text>
        <Text align="center">Centered text</Text>
        <Text align="right">Right aligned text</Text>
        <Text primary>Primary text</Text>
        <Text secondary>Secondary text</Text>
        <Text tertiary>Tertiary text</Text>
        <Panel secondary>
            <Text inverted>Inverted text</Text>
        </Panel>
    </div>
);
