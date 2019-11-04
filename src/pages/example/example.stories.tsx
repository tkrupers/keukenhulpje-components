import React from 'react';
import { NavBar, NavLink } from '../../components/navbar/navbar';
import { Icon } from '../../components/icon/icon';
import { Panel } from '../../components/panel/panel';
import { Heading } from '../../components/heading/heading';
import { Text } from '../../components/text/text';
import { color } from '../../shared/styles';
import { Button } from '../../components/button/button';

export default {
    title: 'Example page',
};

export const examplePage = () => (
    <div style={{ background: color.lighter }}>
        <Panel secondary>
            <NavBar
                fullWidth
                primary
                brand={
                    <>
                        <Icon icon="user" /> My awesome app
                    </>
                }
            >
                <NavLink>Main menu</NavLink>
                <NavLink small>Register</NavLink>
                <NavLink isButton primary>
                    Login
                </NavLink>
            </NavBar>

            <div
                style={{
                    margin: '100px 0 80px',
                }}
            >
                <Heading level={1} align="center">
                    The next cool calculator <Icon icon="arrowright" />
                </Heading>
            </div>
        </Panel>

        <Panel>
            <Heading level={1} align="center">
                Wow
            </Heading>
        </Panel>

        <Panel tertiary style={{ height: '300px' }}>
            <Text align="center">Nieuwe site online!</Text>
        </Panel>

        <div style={{ height: '300px', paddingTop: '100px', display: 'flex', flexDirection: 'column' }}>
            <Heading level={3} align="center">
                Next heading
            </Heading>

            <div
                style={{
                    borderRadius: '1em',
                    margin: 'auto',
                    padding: '50px',
                    maxWidth: '50%',
                    background: 'white',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                }}
            >
                <Text>
                    Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                    Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum{' '}
                </Text>
                <br />
                <Button primary>Klik mij</Button>
            </div>
        </div>
    </div>
);
