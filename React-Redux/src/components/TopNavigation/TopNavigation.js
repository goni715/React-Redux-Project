import React, {Fragment} from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";
import {NavLink} from "react-router-dom";


const TopNavigation = () => {
    return (

        <Fragment>


            <Navbar  bg="light" expand="lg">
                <Container>
                    <Navbar.Brand>Osman Goni </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link><NavLink to="/"> Counter App </NavLink> </Nav.Link>
                            <Nav.Link><NavLink to="/Todo"> Todo App </NavLink>< /Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>


        </Fragment>



    );
};

export default TopNavigation;