import React ,{Component} from 'react';
import ReactDOM from 'react-dom';
import './common.css';


export default class Last extends Component{
    render(){
        return(
                         <div className="bb"
                              style={this.props.numbersNext==this.props.obj.id?{backgroundColor:"#544B14"}:{backgroundColor:"#fff"}}
                              onClick={()=>this.props.showMask(this.props.obj)}
                              onMouseOver={()=>this.props.changeColorsNext(this.props.obj)}
                              onMouseOut={()=>this.props.changeColorsNext(0)}
                         >
                            <div className="yuan"  style={this.props.numbersNext==this.props.obj.id?{borderColor:"#fff #fff #fff transparent"}:{borderColor:"#544B14 #544B14 #544B14 transparent"}}></div>
                            <div className="yuant">
                                <span style={this.props.numbersNext==this.props.obj.id?{color:"#fff"}:{color:"#544B14"}}>{this.props.obj.score}</span>
                                <span style={this.props.numbersNext==this.props.obj.id?{color:"#fff"}:{color:"#544B14"}}>$</span></div>
                             <div className="ps" style={this.props.numbersNext==this.props.obj.id?{color:"#fff"}:{color:"#544B14"}}>{this.props.obj.name}</div>
                        </div>
        )
    }
}
