import  React,{ Component } from "react";
import { List } from 'antd';
import axios from "axios";
import { Link } from "react-router-dom";

class list extends Component{
    constructor( props) {
        super( props);
        this.state = {
            data : []
        }
    }
    componentWillReceiveProps( nextProps){
        const id = this.props.match.params.id;
        // let url = 'https://www.fastmock.site/mock/a660319589c1010a2775705c6620a93c/news/api/list';
        let url = 'http://www.dell-lee.com/react/api/list.json';
        if( id  ){
            url = url + '?id=' + id;
        }
        axios.get(url)
        .then(res => {
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
    componentDidMount(){
        const id = this.props.match.params.id;
        // let url = 'https://www.fastmock.site/mock/a660319589c1010a2775705c6620a93c/news/api/list';
        let url = 'http://www.dell-lee.com/react/api/list.json';
        if( id  ){
            url = url + '?id=' + id;
        }
        axios.get(url)
        .then(res => {
            this.setState({
                list : res.data.data
            })
        })
    }
}
export default list;