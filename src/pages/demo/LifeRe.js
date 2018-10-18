
import React, { Component } from 'react';
import {Button} from 'antd'
import './1.less'

class LifeRe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count:0
        }
    }

    componentWillMount() {

    }

    componentDidMount() {

    }

    componentWillReceiveProps(nextProps) {

    }

 

    componentWillUpdate(nextProps, nextState) {

    }

    componentDidUpdate(prevProps, prevState) {

    }

    componentWillUnmount() {

    }

    handleAdd(){
        this.setState({
            count: this.state.count + 1
        })
    }

    render() {
        return (
            <div className='add'>
                <Button onClick={this.handleAdd.bind(this)}>点击一下</Button>
                <p>
                    {this.state.count}
                </p>
            </div>
        );
    }
}


export default LifeRe;