import React, { Component } from 'react';
import Cup from '../goal-cup.png';
import { NavLink } from "react-router-dom";
import Avatar from 'react-avatar';

class Goal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: '',
            goal1: false ,
            goal2: false ,
            goal3: false,
            goal4: false,
        };
    }

    handleSelect = (e) => {
        console.log(e.target.id)
        this.setState({
            [e.target.id]: true,
        })
    };

    render() {

        const { goal1, goal2, goal3, goal4 } = this.state;
        return (
            <div className="container-wrap">
                <div className="mb-5 mt-2">
                    <NavLink exact activeClassName="active" to="/goal">
                        <span>goal</span>
                    </NavLink>
                    <span> / </span>
                    <NavLink exact activeClassName="active" to="/leader">
                        <span>Leader board</span>
                    </NavLink>
                </div>
                <h1>Goal Setting</h1>

                <div className="d-flex mt-3 justify-content-around">
                    <div className="">
                        <div className="goal-card">
                            <div className="goal-img"> <img src={Cup}/></div>
                            <div className="goal-text m-auto ml-2">Designer</div>
                        </div>
                    </div>
                    <div>
                        <div className="goal-card goal-selected">
                            <div className="goal-img"> <img src={Cup}/></div>
                            <div className="goal-text m-auto ml-2">Designer</div>
                        </div>
                    </div>
                    <div className="">
                        <div className="goal-card">
                            <div className="goal-img"> <img src={Cup}/></div>
                            <div className="goal-text m-auto ml-2">Designer</div>
                        </div>
                    </div>
                    <div className="">
                        <div className="goal-card">
                            <div className="goal-img"> <img src={Cup}/></div>
                            <div className="goal-text m-auto ml-2">Designer</div>
                        </div>
                    </div>
                    <div className="">
                        <div className="goal-card">
                            <div className="goal-img"> <img src={Cup}/></div>
                            <div className="goal-text m-auto ml-2">Designer</div>
                        </div>
                    </div>
                    <div className="">
                        <div className="goal-card">
                            <div className="goal-img"> <img src={Cup}/></div>
                            <div className="goal-text m-auto ml-2">Designer</div>
                        </div>
                    </div>
                </div>

                <div className="mt-5">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" onChange={this.handleSelect} className="custom-control-input" id="goal1"/>
                        <label className="custom-control-label mr-2" htmlFor="customCheck1"> able to correct colors.</label>
                        {goal1 &&<div> <Avatar round size="40" name="Pat A" /> <Avatar round size="40" name="Bow B" /> <Avatar round size="40" name="May C" /> <Avatar round size="40" name="Muey D" /></div>}
                    </div>
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" onChange={this.handleSelect}  className="custom-control-input" id="goal2"/>
                        <label className="custom-control-label" htmlFor="customCheck1">able to paint.</label>
                        {goal2 &&<div> <Avatar round size="40" name="Pat A" /> <Avatar round size="40" name="Bow B" /> <Avatar round size="40" name="Muey D" /></div>}
                    </div>
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" onChange={this.handleSelect}  className="custom-control-input" id="goal3"/>
                        <label className="custom-control-label" htmlFor="customCheck1">able to create special effects.</label>
                        {goal3 &&<div> <Avatar round size="40" name="Pat A" /> <Avatar round size="40" name="May C" /> <Avatar round size="40" name="Muey D" /></div>}
                    </div>

                </div>

            </div>);
    }
}

export default Goal;