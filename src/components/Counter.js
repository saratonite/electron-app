import React, { Component } from 'react';

export default class Counter extends Component {
    
    constructor(props) {
        super(props);
        this.timer = null;
        this.state = {
            count:20
        }
    }
    componentDidMount() {
        this.startCounter();
    }
    startCounter() {

        this.timer = setInterval(() => {
            if(this.state.count === 0) {
                clearInterval(this.timer);
                return;
            }
            this.setState({
                count: this.state.count -1 
            })
        },1000)
    
    }
    render() {

        let { count } = this.state;
        return (
            <div>
                <h1>{count}</h1>
            </div>
        );
    }
}