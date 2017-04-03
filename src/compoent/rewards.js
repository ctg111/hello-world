import React ,{Component} from 'react';
import ReactDOM from 'react-dom';
import './common.css';


export default class Rewards extends Component{
    render(){
        return(
            <div className="xinchou" style={this.props.selectC==0?{marginTop:"2%",backgroundColor:this.props.backgroundColor}:{backgroundColor:this.props.backgroundColor}}>
                <img src={this.props.img}/>
                <span style={{color:this.props.color}}>{this.props.name}</span>
            </div>
        )
    }
}
