import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Container from './container/container'
import Content from './compoent/content';
import Detail from './teacher/detail';
import Login from './container/login';
import {createStore} from "redux";
import {Provider} from 'react-redux';
import Totalreducers from './reducers';
import Tcontent from './three/t-content';
import Super from"./container/super"
import {Router, Route, hashHistory, Redirect, IndexRedirect, IndexRoute} from 'react-router';
let store=createStore(Totalreducers);


ReactDOM.render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/" component={Login}/>
            <Route path="/super" component={Super}/>
            <Route path="/teacher" component={Container}>
                <IndexRoute component={Detail}/>
                <Route path="index" component={Content}/>
                <Route path="detail" component={Detail}/>
                <Route path="t-content" component={Tcontent}/>
            </Route>
        </Router>
    </Provider>,
    document.getElementById('root')
);