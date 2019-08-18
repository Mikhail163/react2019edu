import React, { Component } from 'react';

const initialState = {
    counter: 1,
}

export default class Counter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            counter: 1,
        }
    }

    handleResetClick = (e) => {
        const { counter } = initialState;

        this.updateCounter(counter);
        e.preventDefault();
    }

    handlePlusClick = (e) => {
        const { counter } = this.state;
        this.updateCounter(counter + 1);
        
        e.preventDefault();
    }

    handleMinusClick = (e) => {
        const { counter } = this.state;
        this.updateCounter(counter - 1);
        e.preventDefault();
    }

    updateCounter(newValue) {
        const { onChange } = this.props;
        this.setState({
            counter: newValue,
        });
        if (typeof(onChange) === 'function') {
            onChange(newValue);
        }
    }

    render() {
        const { counter } = this.state;
        return (
            <div>
                <button onClick={this.handleMinusClick}>-</button>
                {counter}
                <button onClick={this.handlePlusClick}>+</button>
                <button onClick={this.handleResetClick}>Перезагрузить</button>
            </div>
        );
    }
}