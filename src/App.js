import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { simpleAction } from './actions/simpleAction';
import Home from './containers/Home';
import About from './containers/About';
import logo from './logo.svg';
import './App.css';
import {fetchToDos} from "./actions/todoAction";

class App extends Component {
    simpleAction = (event) => {
        this.props.simpleAction();
        this.props.fetchToDos();
    };

    render = () => {
        return (
            <Router>
                <div>
                    <button onClick={this.simpleAction}>Test redux action</button>
                    <Route exact path="/" component={Home}/>
                    <Route path="/about" component={About}/>
                </div>
            </Router>
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


