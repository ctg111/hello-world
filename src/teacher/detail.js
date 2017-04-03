/**
 * Created by Administrator on 2017/3/20 0020.
 */
import React, {Component} from 'react';
import './teacher.css';
import Dlist from './d-list'
import Dpop from './d-pop-box'
import jia from '../compoent/img/7-1.png'
import leave from '../compoent/img/xiuxue_03.png'
                                                                                     
export default class Detail extends Component {
    constructor(props) {
        super(props);
        // this.state={
        //     val:"",
        //     arr:[]
        // }
    }
    render() {
        return (
            <div className="middle">
                <div className="color-box">
                    {
                        this.props.students.map(function(obj,index){
                            return(
                                <Dlist key={index} index={index} obj={obj} showMask={this.props.showMask} />
                            )
                        },this)
                    }
                    <div className="small"  showMask={this.props.showMask}  onClick={()=>{this.props.showMask(this.props.students)}} >
                        <img src={jia} alt=""/>
                    </div>
                </div>
            </div>
        );
    }


}


