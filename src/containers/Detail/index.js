import  React,{ Component } from "react";
import axios from 'axios';
// 引入 Card 组件
import { Card } from 'antd';
import './style.css'
class Detail extends Component{
    constructor( props ){
        super( props );
        this.state = {
            title : '',
            content : ''
        }
    }
    render(){
        return (
            // 使用 Card 组件
            <Card title={ this.state.title}>
                {/* 使用 dangerouslySetInnerHTML 将获取的HTML代码转译 */}
                <div className="detail" dangerouslySetInnerHTML={{__html : this.state.content }}></div>
            </Card>
        )
    }
    // 获取数据
    componentDidMount(){
        const id = this.props.match.params.id;
        axios.get('http://www.dell-lee.com/react/api/detail.json?id=' + id)
        .then( res => {
            // console.log(res);
            const data = res.data.data;
            this.setState( data );
        })
    }
}
export default Detail; 