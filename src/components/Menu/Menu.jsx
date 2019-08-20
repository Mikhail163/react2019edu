import './Menu.css';
import classNames from 'classnames';
import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

class Menu extends Component {
    render() {
        const { location } = this.props;
        return (
            <div className="menu">
                <ul>
                    <li className={classNames({ active: location.pathname == "/"})}><Link to="/">Counter</Link></li>
                    <li className={classNames({ active: location.pathname == "/users"})}><Link to="/users">Users</Link></li>
                </ul>
            </div>
        );
    }
}

export default withRouter(Menu);