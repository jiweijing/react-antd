
import React, { Component } from 'react';
import dateInfo from './../../config/dateInfo'
import './index.less'
class Footer extends Component {

   componentWillMount(){
       this.setState({
           footername: dateInfo.footername,
           footermsg: dateInfo.footermsg
       })
   }


    render() {
        return (
            <div className="footer">
                版权所有: {this.state.footername} {this.state.footermsg}
            </div>
        );
    }
}

export default Footer;