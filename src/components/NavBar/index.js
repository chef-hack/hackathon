import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Logo from '../../chef.png';
import Logo2 from '../../intelligent.png';
import Profile from '../../profile.png';
import Search from '../../search.png';

import './index.css';

class NavBar extends Component {
    state = {
        isShowMenu: false,
    };

    toggleMenu = () => {
        this.setState({
            isShowMenu: !this.state.isShowMenu
        });
    };

    render() {
        return (
            <div className="nav-bar">
                <div className="nav-content d-flex">
                    <div className="logo">
                        <a href="https://marvelapp.com/953c4f8/screen/59442047"> <img src={Logo}/></a>
                        <img className="ml-3 mt-2" src={Logo2} width="111"/>
                    </div>

                    <div className="d-flex">
                        <div className="search mr-5">
                            <Form inline>
                                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                                <div className="search-icon" variant="outline-info"><img src={Search} width="19px"/> </div>
                            </Form>
                        </div>
                        <div className="profile d-flex">
                            <div className="text-right">Hi Jason Dunlop<br/><span className="text-secondary text-small">Genaral Manager</span></div>
                            <div className="ml-3" onClick={() => this.toggleMenu()}><img className="profile-img" src={Profile}/></div>
                            {
                                this.state.isShowMenu &&
                                <div className="all-menu">
                                    <div className="each-nav"><Link to={'/profile/'}>My Profile</Link></div>
                                    <div className="each-nav"><a href="https://marvelapp.com/953c4f8/screen/59442047">My feed</a></div>
                                    <div className="each-nav"><Link to={'/explorer/'}>Explore feed</Link></div>
                                    <div className="each-nav"><Link to={'/goal/'}>Goal challenge</Link></div>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default NavBar;


