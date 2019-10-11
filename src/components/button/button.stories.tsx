import React from 'react';
import { Button, SIZES } from './button';

export default {
    title: 'Design System|Button',
    parameters: {
        component: Button,
    },
};

export const standard = () => (
    <div>
        <div style={{ marginBottom: '2em' }}>
            <Button>Standaard button</Button>
            <Button primary>primary button</Button>
            <Button secondary>primary button</Button>
            <Button primary isDisabled>
                Disabled
            </Button>
            <Button secondary isDisabled>
                Disabled
            </Button>
            <Button isLink>anchor button</Button>
        </div>

        <div style={{ marginBottom: '2em' }}>
            <Button size={SIZES.LARGE}>Large button</Button>
            <Button size={SIZES.LARGE} primary>
                Large primary button
            </Button>
            <Button size={SIZES.LARGE} secondary>
                Large secondary button
            </Button>
            <Button size={SIZES.LARGE} isDisabled>
                Large disabled button
            </Button>
        </div>

        <div style={{ marginBottom: '2em' }}>
            <Button size={SIZES.SMALL}>Small button</Button>
            <Button size={SIZES.SMALL} primary>
                Small primary button
            </Button>
            <Button size={SIZES.SMALL} secondary>
                Small secondary button
            </Button>
            <Button size={SIZES.SMALL} isDisabled>
                Small disabled button
            </Button>
        </div>
    </div>
);
