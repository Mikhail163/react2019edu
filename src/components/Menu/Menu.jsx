import './Menu.css';

import React, { Component } from 'react';

export default class Menu extends Component {
    render () {
        const { items } = this.props;
        return (
        <div className="menu">
            <ul>
                {items.map(item => <li><a href="{item.link}">{item.title}</a></li>)}
            </ul>
        </div>
        );
    }
}