import React ,{Component} from 'react';
import ReactDOM from 'react-dom';
import './common.css';


export default class SelectItem extends Component{
    render(){
        var colors=["#5AC76C","#DEA033","#DD3333","#5BC6BB","#5A88C6","#885AC6"];
        return(
            <div className="ss"
                 style={this.props.numbers==this.props.obj.id?{backgroundColor:colors[this.props.index%5]}:{backgroundColor:"#fff",borderBottom:"2px solid"+colors[this.props.index%5]}}
                 onClick={()=>this.props.showMask(this.props.obj)}
                 onMouseOver={()=>this.props.changeColor(this.props.obj)}
                 onMouseOut={()=>this.props.changeColor(0)}
            >
                <span style={this.props.numbers==this.props.obj.id?{color:"#fff"}:{color:colors[this.props.index%5]}}>{this.props.obj.name}</span>
                <div>
                    <span className="spantwo"
                          style={this.props.numbers==this.props.obj.id?{color:"#fff"}:{color:colors[this.props.index%5]}}
                    >+{this.props.obj.score}</span>
                    <span className="spanthree"
                          style={this.props.numbers==this.props.obj.id?{color:"#fff"}:{color:colors[this.props.index%5]}}
                    >$</span>
                </div>
            </div>
        )
    }
}
