import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Counter.css'
import CounterButton from './CounterButton'

class Counter extends Component {

    // Define the initial state in a constructor
    // State => counter 0
    constructor() {
        super();
        
        this.state = {
            counter : 0
        }

        this.increment = this.increment.bind(this)
        this.decrement = this.decrement.bind(this)
        this.reset = this.reset.bind(this)
    }

    render() {
        return (
          <div className="counter">
            <CounterButton by = {1} incrementMethod = {this.increment} decrementMethod = {this.decrement}/>
            <CounterButton by = {5} incrementMethod = {this.increment} decrementMethod = {this.decrement}/>
            <CounterButton by = {10} incrementMethod = {this.increment} decrementMethod = {this.decrement}/>
            <span className="count">{this.state.counter}</span>
            <div><button className="reset" onClick={this.reset}>Reset</button></div>
          </div>
        );
    }

    reset () {
        this.setState(
            () => {
                return {counter : 0}
            }
        );
    }

    increment(by) { // Update state - counter++
        console.log(`increment from parent - ${by}`)
        this.setState(
            (prevState) => {
                return {counter : prevState.counter + by}
            }
        );
    }

    decrement(by) { // Update state - counter++
        console.log(`increment from parent - ${by}`)
        this.setState(
            (prevState) => {
                return {counter : prevState.counter - by}
            }
        );
    }
}

export default Counter