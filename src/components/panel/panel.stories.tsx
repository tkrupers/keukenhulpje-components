import React from 'react';
import { Panel } from './panel';

export default {
    title: 'Components|Panel',
    component: Panel,
};

export const standard = () => (
    <div>
        <div>
            <Panel>Default panel</Panel>
            <Panel primary>Primary panel</Panel>
            <Panel secondary>Secondary panel</Panel>
            <Panel tertiary>Tertiary Panel</Panel>
        </div>

        <div>
            <Panel showCurves>Default panel</Panel>
            <Panel primary showCurves>
                Primary panel
            </Panel>
            <Panel secondary showBottomCurve>
                Secondary panel
            </Panel>
        </div>
    </div>
);
