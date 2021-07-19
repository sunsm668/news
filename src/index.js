import React , { Component } from "react";
import ReactDom from "react-dom";
import { BrowserRouter, Route , Switch } from "react-router-dom";

// 引入组件
import Login from "./componets/Login";
import AppHeader from "./componets/Header";
import Home from "./containers/Home";
import Detail from "./containers/Detail";
import Vip from './containers/Vip';

// 引入antd
import { Layout } from 'antd';
import "antd/dist/antd.css";

import "./style.css";

// 使用 antd 组件
const { Header, Footer, Content } = Layout;

class App extends Component {
    render(){
        return (
                <BrowserRouter>
                    <Layout style = {{ minWidth: 1300 , height: "100%"}}>
                        <Header className="header">
                            {/* AppHeader 组件中的 Link 标签必须在 BrowserRouter 标签里 */}
                            <AppHeader />
                            <Login/>
                        </Header>
                        <Content className="content">
                            <Switch>
                                <Route path='/vip' component = {Vip} />
                                {/* 使用Switch选择器可以防止访问 /detail 时，命中 / */}
                                <Route path = '/detail/:id' component = {Detail}/>
                                {/* /:id? 后面的问号，可以使 / 跟路由能够命中 */}
                                <Route path = '/:id?' component = {Home}/>
                            </Switch>
                        </Content>
                        <Footer className="footer">@copyright  Easy-VOA  2020</Footer>
                    </Layout>
                </BrowserRouter>
        )
    }
}
ReactDom.render(<App />, document.getElementById('root'));