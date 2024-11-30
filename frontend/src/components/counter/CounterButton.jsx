import React, {Component} from 'react';
import PropTypes from 'prop-types';

// Custom function components need to start with a capital letter.
class CounterButton extends Component{

    // Define the initial state in a constructor
    // State => counter 0
    // constructor() {
    //     super();
    //     this.increment = this.increment.bind(this)
    //     this.decrement = this.decrement.bind(this)
    // }

    render() {
        return (
            <div className="counter">
            <button onClick={() => this.props.incrementMethod(this.props.by)}>+{this.props.by}</button>
            <button onClick={() => this.props.decrementMethod(this.props.by)}>-{this.props.by}</button>
            </div>
        )
    }

}

// CounterButton.defaultProps = { by : 1}

// CounterButton.propTypes = { by : PropTypes.number}

export default CounterButton