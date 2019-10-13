import React from 'react';
import { NavBar, NavLink } from './navbar';

import { Link } from '../link/link';
import { Icon } from '../icon/icon';

export default {
    title: 'Components|NavBar',
    component: NavBar,
};

export const standard = () => (
    <div>
        <div style={{ marginBottom: '3em' }}>
            <NavBar>default navbar</NavBar>
            <NavBar primary>primary navbar</NavBar>
            <NavBar secondary>secondary navbar</NavBar>
            <NavBar>
                Navbar with links
                <Link>Link 1</Link>
                <Link>Link 2</Link>
                <Link>Link 3</Link>
            </NavBar>
        </div>

        <div style={{ marginBottom: '3em' }}>
            <NavBar fullWidth>Full width navbar</NavBar>
            <NavBar fullWidth primary>
                Full width primary navbar
            </NavBar>
            <NavBar fullWidth secondary>
                Full width secondary navbar
            </NavBar>
        </div>

        <div style={{ marginBottom: '3em' }}>
            <NavBar
                fullWidth
                primary
                brand={
                    <>
                        <Icon icon="user" /> Mooie titel
                    </>
                }
            >
                <NavLink>Nav link</NavLink>
                <NavLink isDisabled>Not clickable</NavLink>
                <NavLink isButton primary>
                    Register
                </NavLink>
                <NavLink small>small link</NavLink>
            </NavBar>
        </div>
    </div>
);
