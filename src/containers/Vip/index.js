import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import './index.css';

class Vip extends Component {

	constructor(props) {
		super(props);
		this.state = {
			login: true,
			fetchFinish: false
		}
	}

	render() {
		if (this.state.login) {
			if (this.state.fetchFinish) {
				return <div className='vip'>Vip</div>
			}else {
				return <div className='vip'>正在判断用户登陆状态...</div>
			}
		}else {
			return <Redirect to='/' />
		}
	}
    //获取用户登陆状态
	componentDidMount() {
		axios.get('http://www.dell-lee.com/react/api/isLogin.json', {
			withCredentials: true
		})
			.then(res => {
				const login = res.data.data.login;
				this.setState({
					login,
					fetchFinish: true
				})
			})
	}

}

export default Vip;