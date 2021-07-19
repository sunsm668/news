import React , { Component, Fragment }from "react";
import { Link } from "react-router-dom";

import axios from "axios";
// 引入 antd 组件
import { Menu , Icon } from 'antd';

import logo from "./logo.png";
import "./index.css";


class AppHeader extends Component {
    constructor( props ){
        super( props);
        this.state={
            list : []
        }
    }

    // 处理数据，返回菜单
    getMenuItems(){
        return this.state.list.map( item => {
            return(
                <Menu.Item key = {item.id}>
                    <Link to={`/${item.id}`}>
                        <Icon type = {item.icon}/>
                        {item.title}
                    </Link>
                </Menu.Item>
            )
        })
  
    }

    // 获取数据
    componentDidMount(){
        axios.get('http://www.dell-lee.com/react/api/header.json')
        .then((res) => {
            this.setState(
                { list : res.data.data }
            )
        })
    }
    render(){
        return(
            <Fragment>
                {/* 点击 logo 跳转至首页 */}
                <Link to = '/'>
                    <img src = { logo } className = "App-Header-logo" alt = "logo"></img>
                </Link>
                {/* 菜单 */}
                <Menu mode = "horizontal" className = "App-Header-menu">
                   { this.getMenuItems() }
                </Menu>
            </Fragment>
        )
    }
}

// 导出组件
export default AppHeader;