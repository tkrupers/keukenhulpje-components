import React from 'react';
import { Icon } from './icon';
import { icons } from '../../shared/icons';

export default {
    title: 'Components|Icon',
    parameters: {
        component: Icon,
    },
};

export const standard = () => (
    <div>
        <Icon icon="menu" />
        <Icon icon="user" />
        <Icon icon="users" />
        <Icon icon="button" />
    </div>
);
