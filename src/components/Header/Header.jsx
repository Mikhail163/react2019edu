import './Header.scss';

import classNames from 'classNames';
import React, { Component } from 'react';

export default class Header extends Component {
    render () {
        const { size } = this.props;
        const className = classNames('header',
        {
            'header_small': size === 'small',
            'header_big': size === 'big',
        })
        return (
        <h1 className={className}>Заголовок</h1>
        );
    }
}