import React, { Component } from 'react'

export class ClassCounter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count: 0,
             name: ''
        }

        this.incrementCount = this.incrementCount.bind(this);
    }

    componentDidMount() {
        document.title = `Clicked ${this.state.count}`
    }

    componentDidUpdate(prevProps, prevState) {
        // conditionally log if the count is getting updated
        // (useEffect provides a shorter way of doing this)
        if (prevState.count !== this.state.count) {
            console.log('updating document title');
        }
    
        document.title = `Clicked ${this.state.count}`
    }

    incrementCount() {
        this.setState(({ count }) => {
            return { count: count + 1}
        });
    }
    
    render() {
        return (
            <>  
                <input 
                    type="text"
                    value={this.state.name}
                    onChange={e => {
                        this.setState({ name: e.target.value })
                    }}
                />
                <button onClick={this.incrementCount}>Class Count { this.state.count }</button>
            </>
        )
    }
}

export default ClassCounter
