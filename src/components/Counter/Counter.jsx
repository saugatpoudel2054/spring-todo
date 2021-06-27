import React, { Component } from 'react';
import './Counter.css';
import Display from './../Display/Display';

class Counter extends Component{
    constructor() {
        super();
        this.state = {
            counter: 0,
        }
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
        this.reset = this.reset.bind(this);
    }

    render() {
        return (
            <>
                <div>
                    <CounterButton by={1} incrementMethod={this.increment}></CounterButton>
                    <CounterButton by={5} incrementMethod={this.increment}></CounterButton>
                </div>
                <div>
                    <CounterButtonD by={1} decrementMethod={this.decrement}></CounterButtonD>
                    <CounterButtonD by={5} decrementMethod={this.decrement}></CounterButtonD>
                </div>
                <Display number={this.state.counter}></Display>
                <button onClick={this.reset}>Reset</button>
            </>
        );
    }

    increment(number) {
        this.setState(
            (prevState) => {
                return {
                    counter: prevState.counter + number,
                };
            }
        );
    }

    decrement(number) {
        this.setState(
            (prevState) => {
                return {
                    counter: prevState.counter - number,
                };
            }
        );
    }

    reset() {
        this.setState(
            () => {
                return {
                    counter: 0,
                };
            }
        );
    }
}

class CounterButton extends Component{
    render() {
        return (
            <span className="CounterButton">
                <button onClick={() => this.props.incrementMethod(this.props.by)}>+{this.props.by}</button>
            </span>
        );
    }
}

class CounterButtonD extends Component{
    render() {
        return (
            <span className="CounterButton">
                <button onClick={() => this.props.decrementMethod(this.props.by)}>-{this.props.by}</button>
            </span>
        );
    }
}

export default Counter;