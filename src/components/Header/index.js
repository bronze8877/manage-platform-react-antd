import React from 'react'
import './index.less'
import { Row,Col } from "antd"
export default class Footer extends React.Component {
    render() {
        return (
            <div className="header">
              <Row className="header-top">
                    <Col span={6} className="logo">
                        <img src="./logo-ant.svg" alt=""/>
                        <span>IMooc 通用管理系统</span>
                    </Col>
                    <Col span={18}>
                        <span>欢迎你小明</span>
                        <a href="#">退出</a>
                    </Col>
                </Row>
            </div>
        );
    }
}