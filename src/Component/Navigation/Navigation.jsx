import React from 'react';
import {  Nav, Navbar } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import logo from '../image/logo-with-tag.png';
import './Navigation.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus, faHeart, faSearch } from '@fortawesome/free-solid-svg-icons';


// const items = [
//     {
//         id: 1,
//         value: 'Mobile',
//     },
//     {
//         id: 2,
//         value: 'Laptop',
//     },
//     {
//         id: 3,
//         value: 'Cloths',
//     },
//     {
//         id: 4,
//         value: 'Foods',
//     },
// ]

const Navigation = () => {
    return (
        <>
            <div className="">
                
                <Navbar expand="lg" sticky="top">
                    <Navbar.Brand href="#home" className="main-logo">
                        <img src={logo} alt="Yaali" srcset=""/>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <div className="search-group">
                            <div className="dropdown">
                                <div className="default-option">All Categories</div>
                                <div className="dropdown-list">
                                    <ul>
                                        <li>Mobile</li>
                                        <li>Laptop</li>
                                        <li>Cloths</li>
                                        <li>Foods</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="search">
                                <input type="text" className="search-input" placeholder="Search item" />
                            </div>
                            <button className="btn" type="submit"><FontAwesomeIcon className="search-icon" icon={faSearch} /></button>
                        </div>
                        <Nav className="ml-auto">
                            <Nav.Link href="#heart"><FontAwesomeIcon className="mt-3" icon={faHeart} /></Nav.Link>
                            <Nav.Link href="#cart"><FontAwesomeIcon className="mt-3" icon={faCartPlus} /></Nav.Link>
                            <Nav.Link href="#login">
                                <button className="login-btn">Login/Register</button>
                            </Nav.Link>
                             
                        </Nav>
                        
                    </Navbar.Collapse>
                </Navbar>
                
            </div>
        </>
    );
};

export default Navigation;