import React, { Component } from 'react';
import Cup from '../goal/994796.svg';
import { NavLink } from "react-router-dom";
import Avatar from 'react-avatar';
import Banner from '../banner-goal.png';
import Img1 from '../goal/994796.svg';
import Img2 from '../goal/994797.svg';
import Img3 from '../goal/994805.svg';
import Img4 from '../goal/994809.svg';
import Img5 from '../goal/994805.svg';
import Img6 from '../goal/994814.svg';
import Img7 from '../goal/994820.svg';
import Img8 from '../goal/994822.svg';

class Goal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: '',
            goal1: false ,
            goal2: false ,
            goal3: false,
            goal4: false,
            goal5: false,
        };
    }

    handleSelect = (e) => {
        console.log(e.target.id)
        this.setState({
            [e.target.id]: !this.state[e.target.id],
        })
    };

    render() {

        const { goal1, goal2, goal3, goal4, goal5 } = this.state;
        return (
            <div className="bg-blue">
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
                    <div><img className="img-fluid" src={Banner}/></div>
                    <div className="mx-5 overflow-auto">
                        <div className="d-flex mt-3 justify-content-around">
                            <div className="">
                                <div className="goal-card">
                                    <div className="goal-img"> <img src={Img1}/></div>
                                    <div className="goal-text m-auto ml-2">Marketing</div>
                                </div>
                            </div>
                            <div>
                                <div className="goal-card goal-selected">
                                    <div className="goal-img"> <img src={Img2}/></div>
                                    <div className="goal-text m-auto ml-2">Design UX/UI</div>
                                </div>
                            </div>
                            <div className="">
                                <div className="goal-card">
                                    <div className="goal-img"> <img src={Img3}/></div>
                                    <div className="goal-text m-auto ml-2">Management</div>
                                </div>
                            </div>
                            <div className="">
                                <div className="goal-card">
                                    <div className="goal-img"> <img src={Img4}/></div>
                                    <div className="goal-text m-auto ml-2">Helpful Skils</div>
                                </div>
                            </div>
                            <div className="">
                                <div className="goal-card">
                                    <div className="goal-img"> <img src={Img5}/></div>
                                    <div className="goal-text m-auto ml-2">Digital</div>
                                </div>
                            </div>
                            <div className="">
                                <div className="goal-card">
                                    <div className="goal-img"> <img src={Img6}/></div>
                                    <div className="goal-text m-auto ml-2">Communication</div>
                                </div>
                            </div>
                            <div className="">
                                <div className="goal-card">
                                    <div className="goal-img"> <img src={Img7}/></div>
                                    <div className="goal-text m-auto ml-2">Sales</div>
                                </div>
                            </div>
                            <div className="">
                                <div className="goal-card">
                                    <div className="goal-img"> <img src={Img8}/></div>
                                    <div className="goal-text m-auto ml-2">Leadership</div>
                                </div>
                            </div>

                        </div>
                        <div className="option-goal mt-5">

                            <div className="checkbox-box">
                                <input onClick={this.handleSelect} type="checkbox" id="goal1"/>
                                <label className="ml-2 text-capitalize mr-2" htmlFor="customCheck1">ABILITY TO DO WIREFRAMING</label>
                                {goal1 &&<div className="d-inline"> <Avatar round size="40" name="Pat A" /> <Avatar round size="40" name="Bow B" /> <Avatar round size="40" name="May C" /> <Avatar round size="40" name="Muey D" /></div>}
                            </div>
                            <div className="checkbox-box">
                                <input onClick={this.handleSelect} type="checkbox" id="goal2"/>
                                <label className="ml-2 text-capitalize mr-2" htmlFor="customCheck1">PERFORM RAPID PROTOTYPING</label>
                                {goal2 &&<div className="d-inline"> <Avatar round size="40" name="Pat A" /> <Avatar round size="40" name="Bow B" /> <Avatar round size="40" name="Muey D" /></div>}
                            </div>
                            <div className="checkbox-box">
                                <input onClick={this.handleSelect} type="checkbox" id="goal3"/>
                                <label className="ml-2 text-capitalize mr-2" htmlFor="customCheck1">KNOW HOW TO DELIGHT USERS</label>
                                {goal3 &&<div className="d-inline"> <Avatar round size="40" name="Pat A" /> <Avatar round size="40" name="May C" /> <Avatar round size="40" name="Muey D" /></div>}
                            </div>
                            <div className="checkbox-box">
                                <input onClick={this.handleSelect} type="checkbox" id="goal4"/>
                                <label className="ml-2 text-capitalize mr-2" htmlFor="customCheck1">HANDLE RESPONSIVE DESIGN</label>
                                {goal4 &&<div className="d-inline"> <Avatar round size="40" name="Pat A" /> <Avatar round size="40" name="May C" /> <Avatar round size="40" name="Muey D" /></div>}
                            </div>
                            <div className="checkbox-box">
                                <input onClick={this.handleSelect} type="checkbox" id="goal5"/>
                                <label className="ml-2 text-capitalize mr-2" htmlFor="customCheck1">IMPLEMENT USER-CENTERED DESIGNS</label>
                                {goal5 &&<div className="d-inline"> <Avatar round size="40" name="Pat A" /> <Avatar round size="40" name="May C" /> <Avatar round size="40" name="Muey D" /></div>}
                            </div>
                        </div>
                    </div>

                </div>
            </div>);
    }
}

export default Goal;