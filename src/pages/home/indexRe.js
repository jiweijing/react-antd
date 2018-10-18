
import React, { Component } from 'react';
import dateInfo from '../../config/dateInfo'
import './indexRe.less'
class Home extends Component {

    componentWillMount(){
        this.setState({
            footername: dateInfo.footername
        })
    }

    render() {
        return (
            <div className="home">
                欢迎进入: {this.state.footername}  新零售系统！~_~
            </div>
        );
    }
}

export default Home;