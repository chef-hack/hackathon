import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Logo from '../../chef.png';
import Logo2 from '../../intelligent.png';
import Profile from '../../profile.png';
import Search from '../../search.png';

class NavBar extends Component {
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
                            <div className="ml-3"><img className="profile-img" src={Profile}/></div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default NavBar;


