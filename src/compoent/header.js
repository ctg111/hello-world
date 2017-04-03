import React ,{Component} from 'react';
import './common.css';
import set from './img/shezhi.png';
import back from './img/fh.png';
import {hashHistory} from 'react-router';

export default class Header extends Component{
    constructor(props) {
        super(props);
        this.changeStatus = this.changeStatus.bind(this);
        this.changeSet = this.changeSet.bind(this);
    }
    changeStatus(){
        let aa;
        this.props.courseList.map(function(ele,index){
            if(ele.cname==this.props.grade.course){
                return aa = `第${index+1}教学周期`
            }
        },this);
        return aa
    }
    render(){
        return(
            <div className="nav" >
                <div className="inernav">
                    <a href="">数字媒体学院</a>
                    <ul className="navLeft">
                        <li><a href="">{new Date().getYear()+1900}</a></li>
                        <li><a href="">
                            {
                                this.changeStatus()
                            }
                        </a></li>
                        <li><a href="" className="spns">|</a></li>
                        <li><a href="">
                            {
                                this.props.courseList.map(function(ele){
                                        return ele.cname==this.props.grade.course?ele.cname:""
                                },this)
                            }
                        </a></li>
                    </ul>
                    <a>
                        <img src={this.props.pathname=='/teacher/index'?set:back} onClick={this.changeSet}/>
                    </a>
                    <ul className="navRight">
                        <li><a href="">任课老师：{this.props.grade.teacher}</a></li>
                        <li><a href="" className="spans">|</a></li>
                        <li><a href="">班主任：{this.props.grade.header}</a></li>
                    </ul>
                </div>
            </div>
        )
    }
    changeSet(){
        if(this.props.pathname=="/teacher/index"){
            hashHistory.push("/teacher/detail");
        }else{
            hashHistory.push("/teacher/index");
        }
    }
}
