import React, { Component,PureComponent } from 'react';

class PureAndCommon extends PureComponent{
    constructor() {
        super();
        this.state = {
            isShow: 5
        };
        console.log('constructor');
    }
    changeState = () => {
        this.setState({
            isShow: 6
        })
    };
    render() {
        console.log('render');
        return (
            <div>
                <button onClick={this.changeState}>点击</button>
                {/*<div>{this.state.isShow.toString()}</div>*/}
            </div>
        );
    }
}
export default PureAndCommon;