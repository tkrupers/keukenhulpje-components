import React from 'react';
import { NavBar, NavBarContent } from './navbar';
import { NavLink } from './elements/navlink';

import { Link } from '../link/link';

export default {
    title: 'Design system|NavBar',
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
            <NavBar fullWidth primary>
                Full width navbar with Buttons
                <NavBarContent>
                    <NavLink>Regular link</NavLink>
                    <NavLink isDisabled>Not clickable</NavLink>
                    <NavLink isButton primary>
                        Register
                    </NavLink>
                    <NavLink isButton tertiary>
                        Log in
                    </NavLink>
                </NavBarContent>
            </NavBar>
        </div>
    </div>
);
