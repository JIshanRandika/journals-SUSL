import React, {Component, useEffect, useState} from 'react';
// import ReactNavbar from "react-responsive-animate-navbar";
import {Navbar, Container, Nav, NavDropdown,Form,Offcanvas} from 'react-bootstrap';
import {Button, Col, NavLink, Row} from "reactstrap";
import {Link} from "react-router-dom";

export default function NavComponent() {



    return (

        <>

            <div style={{width: "100%", position: "sticky", top: 0, zIndex: 2, padding: 10}}>


                {['sm'].map((expand) => (
                    <Navbar  bg="light" expand={expand} >
                        <Container fluid>
                            <Navbar.Brand href="#">SUSL - Journals</Navbar.Brand>
                            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                            <Navbar.Offcanvas
                                id={`offcanvasNavbar-expand-${expand}`}
                                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                                placement="end"
                            >
                                <Offcanvas.Header closeButton>
                                    <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                        Offcanvas
                                    </Offcanvas.Title>
                                </Offcanvas.Header>
                                <Offcanvas.Body>
                                    <Nav className="justify-content-end flex-grow-1 pe-3">
                                        <Nav.Link href="#action1">Home</Nav.Link>
                                        <Nav.Link href="#action2">About</Nav.Link>
                                        <Nav.Link href="#action2">Current</Nav.Link>
                                        <Nav.Link href="#action2">Archives</Nav.Link>
                                        <Nav.Link href="#action2">Submission</Nav.Link>
                                        <Nav.Link href="#action2">Announcement</Nav.Link>
                                        <Nav.Link href="#action2">Contact</Nav.Link>
                                        {/*<NavDropdown*/}
                                        {/*    title="Dropdown"*/}
                                        {/*    id={`offcanvasNavbarDropdown-expand-${expand}`}*/}
                                        {/*>*/}
                                        {/*    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>*/}
                                        {/*    <NavDropdown.Item href="#action4">*/}
                                        {/*        Another action*/}
                                        {/*    </NavDropdown.Item>*/}
                                        {/*    <NavDropdown.Divider />*/}
                                        {/*    <NavDropdown.Item href="#action5">*/}
                                        {/*        Something else here*/}
                                        {/*    </NavDropdown.Item>*/}
                                        {/*</NavDropdown>*/}
                                    </Nav>

                                </Offcanvas.Body>
                            </Navbar.Offcanvas>
                        </Container>
                    </Navbar>
                ))}
            </div>
        </>



    );

}