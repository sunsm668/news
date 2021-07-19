import  React,{ Component } from "react";
import { Link, withRouter } from 'react-router-dom';
// 引入 antd 组件
import {  Modal, Button, Input, message } from 'antd';
import axios from 'axios';

class Login extends Component{
    constructor( props) {
        super ( props );
        this.state = {
            // 用户登陆状态，初始为 false
            login : false,
            // 弹窗显示状态，初始为 false
            modal : false,
            // 用户名
            user : '',
            // 密码
            password : ''
        }
        // 绑定作用域
        this.showModal = this.showModal.bind(this);
        this.logout = this.logout.bind(this);
        this.hideModal = this.hideModal.bind(this);
        this.changeUser = this.changeUser.bind(this);
        this.changePassword = this.changePassword.bind(this);
        this.checkLogin = this.checkLogin.bind(this);
    }
    // 弹出弹窗
    showModal(){
        this.setState({
            modal : true
        });
    }
    // 关闭弹窗
    hideModal(){
         this.setState({
            modal : false
        });
    }
    // 用户名输入
    changeUser( e ){
        this.setState({
            user : e.target.value
        });
    }
    // 密码输入
    changePassword( e ){
        this.setState({
            password : e.target.value
        });
    }
    checkLogin(){
        const { user, password } =this.state;
        axios.get(`http://www.dell-lee.com/react/api/Login.json?user=${user}&password=${password}`, {
            withCredentials: true
        }).then( res => {
            if(res.data.data.login){
                message.success('登陆成功');
                this.setState({
                    login : true,
                    modal : false,
                });
            }else{
                message.success('登陆失败');
            }
        })
    }
    logout(){
        axios.get('http://www.dell-lee.com/react/api/logout.json', {
            withCredentials: true
        }).then( res => {
            console.log(res.data.data.logout);
            if(res.data.data.logout){
                this.setState({
                    login: false,
                });
            }
        })
    }
    render() {
		const { login } = this.state;
		return (
			<div className='login'>
				{
					login ?
                    <Button type="primary" onClick={this.logout}>退出</Button> :
                    <Button type="primary" onClick={this.showModal}>登陆</Button>
				}
				<Link to='/vip'>
					<Button type="primary" style={{ marginLeft: 10 }}>
						Vip
					</Button>
				</Link>
                <Modal visible={ this.state.modal }
                title="登陆"
                onOk={ this.checkLogin }
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
  
    // 获取用户登陆状态
    componentDidMount(){
        axios.get('http://www.dell-lee.com/react/api/isLogin.json')
        .then( res => {
            // console.log(res.data.data.login);
            const login = res.data.data.login;
            // 修改登陆状态
            this.setState({ login });
        })
    }
}
// export default Login;
export default withRouter(Login);