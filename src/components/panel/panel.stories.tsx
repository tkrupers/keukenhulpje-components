import React from 'react';
import { Panel } from './panel';

export default {
    title: 'Components|Panel',
    component: Panel,
};

export const standard = () => (
    <div>
        <Panel>Default panel</Panel>
        <Panel primary>Primary panel</Panel>
        <Panel secondary>Secondary panel</Panel>
        <Panel tertiary>Tertiary Panel</Panel>
    </div>
);
