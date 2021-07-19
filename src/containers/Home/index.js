import  React,{ Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { List } from 'antd';

class Home extends Component{
    constructor( props) {
        super( props);
        this.state = {
            data : []
        }
    }
    // 切换菜单项，获取数据
    componentWillReceiveProps( nextProps ){
        const id = this.props.match.params.id;
        let url = 'http://www.dell-lee.com/react/api/list.json';
        if( id ){
            url = `${url}?id=${id}`;
        }
        axios.get(url).then(res => {
            this.setState({
                list : res.data.data
            })
        })
    }
    render(){
        return (
            <List
            bordered
            style = {{background : "#fff"}}
            dataSource={this.state.list}
            renderItem={item => 
                <List.Item>
                    <Link to={`/detail/${item.id}`}>
                        { item.title }
                    </Link>
                </List.Item>
        }
          />
        ) 
    }

    // 页面挂载时获取数据
    componentDidMount(){
        const id = this.props.match.params.id;
        let url = 'http://www.dell-lee.com/react/api/list.json';
        if( id ){
            url = `${url}?id=${id}`;
        }
        axios.get(url).then(res => {
            this.setState({
                list : res.data.data
            })
        })
    }
}
export default Home;