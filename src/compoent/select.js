import React ,{Component} from 'react';
import ReactDOM from 'react-dom';
import './common.css';

export default class Select extends Component{
    render(){
        return(
                <li style = {{backgroundColor:this.props.clickedStudent==this.props.index?"#eed63b":""}}
                    onClick = {()=>this.props.changeIndex(this.props.index)}
                >
                    <a style={{color:this.props.clickedStudent==this.props.index?"#333":""}}>
                        {
                            this.props.student.sname
                        }
                    </a>
                </li>
        )
    }
}
