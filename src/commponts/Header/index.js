

import React, { Component } from 'react';
import { Row, Col } from 'antd';
import './index.less';
import Util from './../../utils/utils'
import axios from './../../axios/index'

class Header extends Component {

    componentWillMount(){
        this.setState({
            username:"姬寅总经理"
        })

        setInterval(()=>{
            let sysTime = Util.formateDate(new Date().getTime());
            this.setState({
                sysTime
            })
        }, 1000)
        this.getWeatherAPI()
    }

    getWeatherAPI(){
        let city = "扬州";
        axios.jsonp({
            url:'http://api.map.baidu.com/telematics/v3/weather?location='+encodeURIComponent(city)+'&output=json&ak=3p49MVra6urFRGOT9s8UBWr2'
        }).then((res)=>{
            if (res.status === 'success') {
                let data = res.results[0].weather_data[0];
                this.setState({
                    dayPictureUrl:data.dayPictureUrl,
                    weather:data.weather,
                    temperature:data.temperature
                })
            }

        })
    }

    render() {
        return (
            <div className="header">
               <Row className="header-top">
                   <Col span={24}>
                    
                    <span>
                    欢迎, {this.state.username}
                    </span>
                    <a href="www.baidu.com">退出</a>

                   </Col>
               </Row>



                  <Row className="breadcrumbs">
                   <Col span="4" className="breadcrumbs-title">
                    首页
                   </Col>
                   <Col span="20" className="weather">
                   <span className="date">{this.state.sysTime}</span>
                   <span className="weather-img">
                   <img  src={this.state.dayPictureUrl} alt="天气图片"/>
                   </span>
                   <span  className="weather-weather">
                   {this.state.weather}
                   </span>
                   <span  className="weather-temperature">
                   温度: {this.state.temperature}
                   </span>
                   </Col>
                </Row>

            </div>
        );
    }
}

export default Header;