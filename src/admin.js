import React, { Component } from 'react';
import { Row, Col } from 'antd';
import Header from './commponts/Header';
import Navleft  from './commponts/Navleft';
import Footer from './commponts/Footer';
import Home from './pages/home/indexRe';
import './style/common.less'

class admin extends Component {
    // 后台首页

    
    render() {
        return (
          
            <Row className="container">
                <Col span={4} className="nav-left">
                    <Navleft />
                </Col>
                <Col span={20} className="main">
                    <Header />
                    <Row className="content">
                        <Home />
                        {/* {this.props.children}   */}  {/* 传入数据到右侧 */}
                    </Row>
                    <Footer />
                </Col>
            </Row>

         
        );
    }
}

export default admin;