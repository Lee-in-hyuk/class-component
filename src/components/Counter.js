import React, {Component} from "react";
class Counter extends Component {
    state = {
        counter: 0,
        fixed: 2
    }
    handleIncrease = () => {
        this.setState(state => ({
            counter: state.counter + state.fixed
        }))
    }
    handleDecrease = () => {
        this.setState(state => ({
            counter: state.counter - state.fixed
        }))
    }
    render() {
        const { counter, fixed } = this.state;
        return(
            <div>
                <h1>{counter}</h1>
                <button onClick={this.handleIncrease}>+{fixed}</button>
                <button onClick={this.handleDecrease}>-{fixed}</button>
                <p>이렇게도 쓸 수 있어요{fixed}</p>
            </div>
        )
    }
}
export default Counter;