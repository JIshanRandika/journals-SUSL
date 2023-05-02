import React, {Component, useEffect, useState} from 'react';
// import ReactNavbar from "react-responsive-animate-navbar";
import {Navbar, Container, Nav, NavDropdown,Form,Offcanvas} from 'react-bootstrap';
import {Button, Col, NavLink, Row} from "reactstrap";
import {Link} from "react-router-dom";
import {Colors} from '../constants/colors'

export default function NavComponent() {



    return (

        <>

            <div style={{width: "100%", position: "sticky", top: 0, zIndex: 2, padding: 0}}>


                {['sm'].map((expand) => (
                    <Navbar  style={{background:Colors.colorA}} expand={expand} >
                        <Container fluid>
                            <Navbar.Brand href="/">
                                <img src="assets/img/logo.png" width='70px' style={{paddingLeft:15}}/>
                            </Navbar.Brand>
                            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                            <Navbar.Offcanvas
                                id={`offcanvasNavbar-expand-${expand}`}
                                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                                placement="end"
                            >
                                <Offcanvas.Header closeButton>
                                    <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                        LOGOS
                                    </Offcanvas.Title>
                                </Offcanvas.Header>
                                <Offcanvas.Body>
                                    <Nav className="justify-content-end flex-grow-1 pe-3">
                                        <Nav.Link style={{fontWeight:"bold"}} href="/">Home</Nav.Link>
                                        {/*<Nav.Link href="#action2">Current</Nav.Link>*/}
                                        <NavDropdown style={{fontWeight:"bold"}} title="Issues" id="navbarScrollingDropdown">
                                            <NavDropdown.Item href="/currentIssue">
                                                Current Issue
                                            </NavDropdown.Item>
                                        </NavDropdown>
                                        <NavDropdown style={{fontWeight:"bold"}} color='white' title="Editorial Board" id="navbarScrollingDropdown">
                                            <NavDropdown.Item href="/boardOfEditorsView">
                                                Board of Editors
                                            </NavDropdown.Item>
                                            <NavDropdown.Item href="/editorAdvisoryBoard">
                                                Editorial Advisory Board
                                            </NavDropdown.Item>
                                            <NavDropdown.Divider/>
                                            <NavDropdown.Item href="/journalStructure">
                                                Journal Structure
                                            </NavDropdown.Item>
                                        </NavDropdown>
                                        <NavDropdown style={{fontWeight:"bold"}} title="Author Guideline" id="navbarScrollingDropdown">
                                            <NavDropdown.Item href="/submissionPreparationChecklist">
                                                Submission Preparation Checklist
                                            </NavDropdown.Item>
                                            <NavDropdown.Item href="/authorGuidelines">
                                                Author Guidelines
                                            </NavDropdown.Item>
                                            <NavDropdown.Item href="/publicationEthics">
                                                Publication Ethics
                                            </NavDropdown.Item>
                                        </NavDropdown>
                                        {/*<NavDropdown title="Submission" id="navbarScrollingDropdown">*/}
                                        {/*    <NavDropdown.Item href="/login">*/}
                                        {/*        Submit*/}
                                        {/*    </NavDropdown.Item>*/}
                                        {/*</NavDropdown>*/}
                                        {/*<Nav.Link href="#action2">Announcement</Nav.Link>*/}
                                        <Nav.Link style={{fontWeight:"bold"}} href="#action2">Contact</Nav.Link>

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
