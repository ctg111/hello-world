import React ,{Component} from 'react';
import ReactDOM from 'react-dom';
import './common.css';
import Score from './score'
import Rewards from './rewards'
import SelectItem from './selectItem'
import Last from './last.js'
import fl from './img/add.png';
import messages from './img/messags.png'

export default class Contnet extends Component{
    constructor(props) {
        super(props);
    }
    render(){
        return(
            <div className="middle">
                <div>
                    <Score students={this.props.students} changeThree={this.props.changeThree} index={this.props.index}/>
                    <Rewards name={"奖励加薪项目"} backgroundColor="#EFD63B" img={fl} color="#333"/>
                    <div className="flex_top">
                        {
                            this.props.rewards.map((obj,index)=>{
                                if(obj.type==1){
                                    return <SelectItem  
                                                key={index}
                                                index={index}
                                                obj={obj}
                                                showMask={this.props.showMask}
                                                rewards={this.props.rewards}
                                                changeColor={this.props.changeColor}
                                                numbers={this.props.numbers}
                                    />;
                                }
                            },this)
                        }
                    </div>
                    <Rewards name={"奖励加薪项目"} backgroundColor="#544B14" img={messages} color="#fff"/>
                    <div className="flex_down">
                        {
                            this.props.rewards.map((obj,index)=>{
                                if(obj.type==2){
                                    return <Last  key={index} 
                                                  index={index}
                                                  obj={obj}
                                                  showMask={this.props.showMask}
                                                  changeColorsNext={this.props.changeColorsNext}
                                                  numbersNext={this.props.numbersNext}
                                            />
                                }
                            },this)
                        }
                    </div>
                </div>
            </div>
        )
    }
}
