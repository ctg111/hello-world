import React ,{Component} from 'react';
import ReactDOM from 'react-dom';
import './common.css';


export default class Mask extends Component{
    render(){
        return(
            <div className="hide" style={{display:this.props.flag==false?"none":"block"}}>
                <div className="inner">
                    <h3>{this.props.flag.type==2?"惩罚减薪项目":"奖励加薪项目"}</h3>
                    <div className="sss">
                        <span>{this.props.flag.name}</span>
                        <div>
                            <span>{this.props.flag.type==1?"+"+this.props.flag.score:this.props.flag.score}</span>
                            <span className="smalls">$</span>
                        </div>
                    </div>
                    <div className="btn">
                        <button  onClick={this.props.cancelMask}>取消</button>
                        <button  onClick={()=>this.props.changeScore(this.props.flag)}>确定</button>
                    </div>
                </div>
            </div>
        )
    }
}
