import { BrowserRouter, Route , Switch } from "react-router-dom";
import React , { Component }from "react";
import { Layout } from 'antd';
import ReactDom from "react-dom";
import AppHeader from "./componets/Header";
import list from "./containers/list"
import Detail from "./containers/Detail"
import Login from "./componets/Login"
import "antd/dist/antd.css";
import "./style.css";

const { Header, Footer, Content } = Layout;
class App extends Component {
    render(){
        return (
                <BrowserRouter>
                    <Layout style = {{ minWidth:1300 , height:"100%"}}>
                        <Header className="header">
                            <AppHeader />
                            <Login/>
                        </Header>
                        <Content className="content">
                            <Switch>
                                <Route path = '/detail/:id' component = {Detail}/>
                                <Route path = '/:id?' component = {list}/>
                            </Switch>
                        </Content>
                        <Footer className="footer">Footer</Footer>
                    </Layout>
                </BrowserRouter>
        )
    }
}
ReactDom.render(<App />, document.getElementById('root'));