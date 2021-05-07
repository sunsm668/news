import React , { Component, Fragment }from "react";
import logo from "./logo.png";
import "./index.css";
import { Menu , Icon } from 'antd';
import axios from "axios";
import { Link } from "react-router-dom";





class AppHeader extends Component {
    constructor( props ){
        super( props);
        this.state={
            list : []
        }
    }
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
    componentDidMount(){
        // axios.get("http://www.dell-lee.com/react/api/header.json")
        // const id = this.props.match.params.id;
 
        axios.get('https://www.fastmock.site/mock/a660319589c1010a2775705c6620a93c/news/api/header')
        .then((res) => {
            this.setState(
                { list : res.data.data }
            )
        })
    }
    render(){
        return(
            <Fragment>
                <Link to = '/'>
                    <img src = { logo } className = "App-Header-logo" alt = "logo"></img>
                </Link>
                <Menu 
                mode = "horizontal"
                className = "App-Header-menu"
                >
                   { this.getMenuItems() }
                </Menu>
            </Fragment>
        )
    }
}
export default AppHeader;