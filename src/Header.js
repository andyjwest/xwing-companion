import React, {PureComponent} from 'react';
import {NavLink} from "react-router-dom";
import './header.css'

class Header extends PureComponent {
    render() {
        return (
            <ul>
                <li><NavLink activeClassName="selected" to="/">Home</NavLink></li>
                <li><NavLink activeClassName="selected" to="/planning">Planning</NavLink></li>
                <li><NavLink activeClassName="selected" to="/system">System</NavLink></li>
                <li><NavLink activeClassName="selected" to="/activation">Activation</NavLink></li>
                <li><NavLink activeClassName="selected" to="/engagement">Engagement</NavLink></li>
                <li><NavLink activeClassName="selected" to="/end-phase">End</NavLink></li>
            </ul>
        )
    }
}

export default Header;