import React ,{Component} from 'react';
import ReactDOM from 'react-dom';
import './common.css';
import Img from './img'
import Select from './select'
import Dleft from '../teacher/d-left'

export default class Header extends Component{
    render(){
        return(
            <div className="left">
                <Img />
                <ul className="inbox_down">
                    {
                        this.props.pathname=="/teacher/index"||this.props.pathname=="/teacher/t-content"?this.props.students.map(function (obj,index) {
                            return <Select
                                            key={index}
                                            index={index}
                                            student={obj}
                                            changeIndex={this.props.changeIndex}
                                            clickedStudent={this.props.clickedStudent}
                                            changeColorsSelect={this.props.changeColorsSelect}
                                            numbersLeft={this.props.numbersLeft}                                                      pathname={this.props.pathname}

                            />;

                        },this):<Dleft/>
                    }
                </ul>
            </div>

        )
    }
}
