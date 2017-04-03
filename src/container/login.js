import React, {Component} from 'react';
import {connect} from'react-redux'
import ReactDOM from 'react-dom'
import fetch from 'isomorphic-fetch'
import {teacherLoginData} from './actions'
import {hashHistory} from 'react-router';
import InputItem from '../login/inputItem'
import Identifying from '../login/identifying'
import SelectItem from '../login/selectItem'
import '../login/login.css';
class Login extends Component {
    constructor(props) {
        super(props);
        this.login = this.login.bind(this);
        this.saveLocation = this.saveLocation.bind(this);
        this.saveLoginMessage = this.saveLoginMessage.bind(this);
        this.getIden = this.getIden.bind(this);
        this.getTrueCollege = this.getTrueCollege.bind(this);
        this.state = {
            college: "数字媒体web",
            authority: "教师",
            username: "admin",
            password: "admin",
            id: "",
            url: "http://192.168.60.110:8080",
            laissezPasser: false
        };
    }
    saveLocation(username, password, authority, college) {
        localStorage.username = username;
        localStorage.password = password;
        localStorage.authority = authority;
        localStorage.college = college;
    }
    getTrueCollege(value) {
        this.setState({
            college: value
        })
    }
    saveLoginMessage() {
        let college = parseInt(ReactDOM.findDOMNode(this.refs.college).value) + 1;
        let authority = ReactDOM.findDOMNode(this.refs.authority).value;
        let username = ReactDOM.findDOMNode(this.refs.username).value;
        let password = ReactDOM.findDOMNode(this.refs.password).value;
        let identify = ReactDOM.findDOMNode(this.refs.identify).children[0].value;
        let laissezPasser = false;
        this.login(college, authority, username, password, identify, laissezPasser);
    }
    render() {
        return (
            <div style={{height:"100%"}}>{
                this.state.laissezPasser ? <div></div> : <div className="login-bg">
                    <div className="login-box">
                        <SelectItem prompt={['数字媒体web','数字媒体ui']}
                                    ref="college"
                        />
                        <SelectItem prompt={['学生','教师','超级管理员']}
                                    ref="authority"
                        />
                        <InputItem prompt="用户名" ref="username" name=""/>
                        <InputItem prompt="密码" ref="password" name=""/>
                        <Identifying ref="identify" getId={this.getIden}/>
                        <InputItem prompt="登陆" login={this.saveLoginMessage} color="yellow"/>
                    </div>
                </div>
            }</div>
        );
    }
    getIden(value) {
        this.setState({
            id: value
        })
    }
    login() {
        let user = ReactDOM.findDOMNode(this.refs.username).value;
        let password = ReactDOM.findDOMNode(this.refs.password).value;
        fetch(`http://192.168.60.110:8080/cms/login/login.do?roleName=${user}&password=${password}&roleType=1&officeType=1`)
            .then(json=>json.json())
            .then(json=> {
                if (json.status == 201) {
                    alert(json.message);
                } else if (json.status == 200) {
                    this.props.onSuper(json);
                    // console.log(this.props);
                    this.props.onSuper(teacherLoginData(json))
                    hashHistory.push("/super");
                }

            }, err=> {
                alert("服务器异常");
            })

    }

}

function maneger(state) {

    return {}
}
const mapDispatchToProps = {
    onSuper:teacherLoginData
};
export default connect(maneger,mapDispatchToProps)(Login);
// export default connect(select)(login);

