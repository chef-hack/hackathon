import React, { Component } from 'react';
import Cup from '../goal-cup.png';
import { NavLink } from "react-router-dom";
import Banner from "../banner-goal.png";

class LeaderBoard extends Component {
    render() {
        return (
            <div className="bg-blue">
            <div className="container-wrap">
                <div className="mb-5 mt-2">
                    <NavLink className="text-secondary text-small" exact activeClassName="active" to="/goal">
                        <span>goal</span>
                    </NavLink>
                    <span> / </span>
                    <NavLink className="text-secondary text-small" exact activeClassName="active" to="/leader">
                        <span>Leader board</span>
                    </NavLink>
                </div>
                <h1 className="mt-5">Leader board</h1>
                <div><img className="img-fluid" src={Banner}/></div>
                <div className="mt-3 range-table">
                    <table className="table table-hover">
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Total scroll</th>
                            <th></th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td>200</td>
                            <td width="400">
                                <div className="d-flex text-center level">
                                    <div className="mr-4"><span className="font-weight-bold">Design</span> <span>Level <span className="font-weight-bold">20</span></span></div>
                                    <div className="mr-4"><span className="font-weight-bold">Management</span> <span>Level <span className="font-weight-bold">5</span></span></div>
                                    <div className="mr-4"><span className="font-weight-bold">Technical </span> <span>Level <span className="font-weight-bold">20</span></span></div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Jacob</td>
                            <td>180</td>
                            <td>
                                <div className="d-flex text-center level">
                                    <div className="mr-4"><span className="font-weight-bold">Design</span> <span>Level <span className="font-weight-bold">10</span></span></div>
                                    <div className="mr-4"><span className="font-weight-bold">Management</span> <span>Level <span className="font-weight-bold">5</span></span></div>
                                    <div className="mr-4"><span className="font-weight-bold">Technical </span> <span>Level <span className="font-weight-bold">20</span></span></div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Larry the Bird</td>
                            <td>170</td>
                            <td>
                                <div className="d-flex text-center level">
                                    <div className="mr-4"><span className="font-weight-bold">Design</span> <span>Level <span className="font-weight-bold">10</span></span></div>
                                    <div className="mr-4"><span className="font-weight-bold">Management</span> <span>Level <span className="font-weight-bold">5</span></span></div>
                                    <div className="mr-4"><span className="font-weight-bold">Technical </span> <span>Level <span className="font-weight-bold">15</span></span></div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Larry the Bird1</td>
                            <td>170</td>
                            <td>
                                <div className="d-flex text-center level">
                                    <div className="mr-4"><span className="font-weight-bold">Design</span> <span>Level <span className="font-weight-bold">10</span></span></div>
                                    <div className="mr-4"><span className="font-weight-bold">Management</span> <span>Level <span className="font-weight-bold">5</span></span></div>
                                    <div className="mr-4"><span className="font-weight-bold">Technical </span> <span>Level <span className="font-weight-bold">15</span></span></div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>Larry the Bird2</td>
                            <td>170</td>
                            <td>
                                <div className="d-flex text-center level">
                                    <div className="mr-4"><span className="font-weight-bold">Design</span> <span>Level <span className="font-weight-bold">10</span></span></div>
                                    <div className="mr-4"><span className="font-weight-bold">Management</span> <span>Level <span className="font-weight-bold">5</span></span></div>
                                    <div className="mr-4"><span className="font-weight-bold">Technical </span> <span>Level <span className="font-weight-bold">15</span></span></div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>Larry the Bird3</td>
                            <td>170</td>
                            <td>
                                <div className="d-flex text-center level">
                                    <div className="mr-4"><span className="font-weight-bold">Design</span> <span>Level <span className="font-weight-bold">10</span></span></div>
                                    <div className="mr-4"><span className="font-weight-bold">Management</span> <span>Level <span className="font-weight-bold">5</span></span></div>
                                    <div className="mr-4"><span className="font-weight-bold">Technical </span> <span>Level <span className="font-weight-bold">15</span></span></div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>7</td>
                            <td>Larry the Bird4</td>
                            <td>170</td>
                            <td>
                                <div className="d-flex text-center level">
                                    <div className="mr-4"><span className="font-weight-bold">Design</span> <span>Level <span className="font-weight-bold">10</span></span></div>
                                    <div className="mr-4"><span className="font-weight-bold">Management</span> <span>Level <span className="font-weight-bold">5</span></span></div>
                                    <div className="mr-4"><span className="font-weight-bold">Technical </span> <span>Level <span className="font-weight-bold">15</span></span></div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>8</td>
                            <td>Larry the Bird5</td>
                            <td>170</td>
                            <td>
                                <div className="d-flex text-center level">
                                    <div className="mr-4"><span className="font-weight-bold">Design</span> <span>Level <span className="font-weight-bold">10</span></span></div>
                                    <div className="mr-4"><span className="font-weight-bold">Management</span> <span>Level <span className="font-weight-bold">5</span></span></div>
                                    <div className="mr-4"><span className="font-weight-bold">Technical </span> <span>Level <span className="font-weight-bold">15</span></span></div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>9</td>
                            <td>Larry the Bird6</td>
                            <td>170</td>
                            <td>
                                <div className="d-flex text-center level">
                                    <div className="mr-4"><span className="font-weight-bold">Design</span> <span>Level <span className="font-weight-bold">10</span></span></div>
                                    <div className="mr-4"><span className="font-weight-bold">Management</span> <span>Level <span className="font-weight-bold">5</span></span></div>
                                    <div className="mr-4"><span className="font-weight-bold">Technical </span> <span>Level <span className="font-weight-bold">15</span></span></div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>10</td>
                            <td>Larry the Bird7</td>
                            <td>170</td>
                            <td>
                                <div className="d-flex text-center level">
                                    <div className="mr-4"><span className="font-weight-bold">Design</span> <span>Level <span className="font-weight-bold">10</span></span></div>
                                    <div className="mr-4"><span className="font-weight-bold">Management</span> <span>Level <span className="font-weight-bold">5</span></span></div>
                                    <div className="mr-4"><span className="font-weight-bold">Technical </span> <span>Level <span className="font-weight-bold">15</span></span></div>
                                </div>
                            </td>
                        </tr>
                        <tr className="my-range">
                            <td>20</td>
                            <td>Larry the Bird8</td>
                            <td>170</td>
                            <td>
                                <div className="d-flex text-center level">
                                    <div className="mr-4"><span className="font-weight-bold">Design</span> <span>Level <span className="font-weight-bold">10</span></span></div>
                                    <div className="mr-4"><span className="font-weight-bold">Management</span> <span>Level <span className="font-weight-bold">5</span></span></div>
                                    <div className="mr-4"><span className="font-weight-bold">Technical </span> <span>Level <span className="font-weight-bold">15</span></span></div>
                                </div>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            </div>);
    }
}

export default LeaderBoard;