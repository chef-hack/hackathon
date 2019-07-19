import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, HashRouter, Link } from "react-router-dom";
import { simpleAction } from './actions/simpleAction';
import Home from './containers/HomePage';
import UpdateCourse from './containers/UpdateCourse';
import About from './containers/About';
import Goal from './containers/Goal';
import LeaderBoard from './containers/LeaderBoard';
import Profile from './containers/Profile';
import Explorer from './containers/Explorer';
import HomePage from './containers/HomePage';
import logo from './logo.svg';
import './App.css';
import {fetchToDos} from "./actions/todoAction";
import NavBar from './components/NavBar';
import Footer from './components/Footer';

class App extends Component {
    simpleAction = (event) => {
        this.props.simpleAction();
        this.props.fetchToDos();
    };

    render = () => {
        return (
            <div className="container-fluid">
                <HashRouter>
                    <div>
                        <NavBar />
                        <Route exact path="/" component={HomePage}/>
                        <Route exact path="/course/:courseId" component={UpdateCourse}/>
                        <Route path="/about" component={About}/>
                        <Route path="/goal" component={Goal}/>
                        <Route path="/leader" component={LeaderBoard}/>
                        <Route path="/profile" component={Profile}/>
                        <Route exact path="/explorer" component={Explorer}/>
                        <Footer />
                    </div>
                </HashRouter>
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


