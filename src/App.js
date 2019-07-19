import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { simpleAction } from './actions/simpleAction';
import Home from './containers/Home';
import UpdateCourse from './containers/UpdateCourse';
import About from './containers/About';

import Goal from './containers/Goal';
import LeaderBoard from './containers/LeaderBoard';
import Explorer from './containers/Explorer';
import logo from './logo.svg';
import './App.css';
import {fetchToDos} from "./actions/todoAction";
import NavBar from './components/NavBar';

class App extends Component {
    simpleAction = (event) => {
        this.props.simpleAction();
        this.props.fetchToDos();
    };

    render = () => {
        return (
            <div className="container-fluid">
                <Router>
                    <div>
                        <NavBar />
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/course/:courseId" component={UpdateCourse}/>
                        <Route path="/about" component={About}/>
                        <Route path="/goal" component={Goal}/>
                        <Route path="/leader" component={LeaderBoard}/>
                        <Route exact path="/explorer" component={Explorer}/>
                    </div>
                </Router>
            </div>
        );
    }

}

const mapStateToProps = state => ({
    ...state
});

const mapDispatchToProps = dispatch => ({
    simpleAction: () => dispatch(simpleAction()),
    fetchToDos: () => dispatch(fetchToDos()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);


