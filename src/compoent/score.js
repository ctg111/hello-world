import React ,{Component} from 'react';
import ReactDOM from 'react-dom';
import './common.css';
import xiuchou from './img/xinchou.png'


export default class Score extends Component{
    render(){
        return(
            <div className="banner">
                <div>
                    <img src={xiuchou}/>
                    <h1>本教学周期薪酬<br/>
                        <span>The remuneration of this teaching cycle</span>
                    </h1>
                    <h1 className="renminb">
                        ￥
                        <span>{this.props.students[this.props.index].score}</span>
                    </h1>
                    <span onClick={this.props.changeThree} className="banner-span">查看详情>>></span>
                </div>
            </div>
        )
    }
}
