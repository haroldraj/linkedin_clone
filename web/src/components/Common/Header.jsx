import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { HouseDoorFill, PeopleFill, BriefcaseFill, ChatDotsFill, BellFill } from 'react-bootstrap-icons';
import './Header.module.css';

const Header = ({ userProfile }) => {
    return (
        <Navbar bg="light" expand="lg" className="header">
            <Link to="/" className="navbar-brand">
                <img
                    src="/logo192.png"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    alt="LinkedIn logo"
                />
            </Link>
            <Form inline className="mr-auto">
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-primary">Search</Button>
            </Form>
            <Nav className="ml-auto">
                <Link to="/" className="nav-link"><HouseDoorFill size={22} /> Home</Link>
                <Link to="/network" className="nav-link"><PeopleFill size={22} /> My Network</Link>
                <Link to="/jobs" className="nav-link"><BriefcaseFill size={22} /> Jobs</Link>
                <Link to="/messaging" className="nav-link"><ChatDotsFill size={22} /> Messaging</Link>
                <Link to="/notifications" className="nav-link"><BellFill size={22} /> Notifications</Link>
                <Link to={`/profile/${userProfile.id}`} className="nav-link">
                    <img
                        src={userProfile.image}
                        width="30"
                        height="30"
                        className="rounded-circle"
                        alt="Profile"
                    />
                    Me
                </Link>
            </Nav>
        </Navbar>
    );
};

export default Header;
