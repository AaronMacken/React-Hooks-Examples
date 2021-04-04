import React, { Component } from 'react'

export class ClassCounter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count: 0
        }

        this.incrementCount = this.incrementCount.bind(this);
    }

    incrementCount() {
        this.setState(({ count }) => {
            return { count: count + 1}
        });
    }
    
    render() {
        return (
            <button onClick={this.incrementCount}>Count { this.state.count }</button>
        )
    }
}

export default ClassCounter
