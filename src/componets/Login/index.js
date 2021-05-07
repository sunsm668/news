import  React,{ Component } from "react";
import {  Modal, Button, Input } from 'antd';
// import { Card } from 'antd';
import axios from 'axios';

class Login extends Component{
    constructor( props) {
        super ( props );
        this.state = {
            login : false,
            modal : true,
            user : '',
            password : ''
        }
        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
        this.changeUser = this.changeUser.bind(this);
        this.changePassword = this.changePassword.bind(this);
    }
    showModal(){
        console.log(this)
        this.setState({
            modal : true
        })
    }
    hideModal(){
         this.setState({
            modal : false
        })
    }
    changeUser( e ){
        this.setState({
            user : e.target.value
        })
    }
    changePassword( e ){
        this.setState({
            password : e.target.value
        })
    }
    render(){
        const { login } = this.state; 
        return (
        <div>
            {
                login ?
                <
                Button type="primary"
                onClick={ this.showModal }
                >
                    登陆
                </Button> :
                <Button 
                type="primary"
                >退出</Button> 
            }
            <Modal
            visible={ this.state.modal }
            title="登陆"
            onOk={()=>{}}
            onCancel={ this.hideModal } 
  
        >
            <Input 
            placeholder="请输入用户名" 
            style={{ marginBottom :10 }}
            value={ this.state.user }
            onChange={ this.changeUser }
            />
            <Input 
            placeholder="请输入密码" 
            type="password" 
            value={ this.state.password}
            onChange={ this.changePassword }
            />
        </Modal>
        </div>
        )
    }
    componentDidMount(){
        axios.get('http://www.dell-lee.com/react/api/isLogin.json')
        .then( res => {
            const login = res.data.data.login;
            this.setState({
                login
            })
        })
    }
}
export default Login;