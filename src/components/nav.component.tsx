import React, {Component, useEffect, useState} from 'react';
// import ReactNavbar from "react-responsive-animate-navbar";
import {Navbar, Container, Nav, NavDropdown,Form,Offcanvas} from 'react-bootstrap';
import {Button, Col, NavLink, Row} from "reactstrap";
import {Link} from "react-router-dom";
import {Colors} from '../constants/colors'
import '../constants/styles.css'
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
                            <Navbar.Offcanvas style={{background:Colors.colorA}}
                                id={`offcanvasNavbar-expand-${expand}`}
                                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                                placement="end"
                            >
                                <Offcanvas.Header closeButton>
                                    <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                        <img src="assets/img/logo.png" width='70px' style={{paddingLeft:15}}/>
                                    </Offcanvas.Title>
                                </Offcanvas.Header>
                                <Offcanvas.Body>
                                    <Nav className="justify-content-end flex-grow-1 pe-3">
                                        <Nav.Link style={{fontWeight:"bold"}} >
                                            <Link to="/" style={{textDecoration:'none',color:"#ffffff"}}>
                                                Home
                                            </Link>
                                        </Nav.Link>
                                        {/*<Nav.Link href="#action2">Current</Nav.Link>*/}
                                        <NavDropdown style={{fontWeight:"bold",color:"#ffffff"}} title="Issues" id="navbarScrollingDropdown">
                                            <NavDropdown.Item>
                                                <Link to="/currentIssue" style={{textDecoration:'none',color:"#524930"}}>
                                                    Current Issue
                                                </Link>
                                            </NavDropdown.Item>
                                        </NavDropdown>
                                        <NavDropdown style={{fontWeight:"bold"}} color='white' title="Editorial Board" id="navbarScrollingDropdown">
                                            <NavDropdown.Item>
                                                <Link to="/boardOfEditorsView" style={{textDecoration:'none',color:"#524930"}}>
                                                    Board of Editors
                                                </Link>
                                            </NavDropdown.Item>
                                            <NavDropdown.Item>
                                                <Link to="/editorAdvisoryBoard" style={{textDecoration:'none',color:"#524930"}}>
                                                    Editorial Advisory Board
                                                </Link>

                                            </NavDropdown.Item>
                                            <NavDropdown.Divider/>
                                            <NavDropdown.Item >
                                                <Link to="/journalStructure" style={{textDecoration:'none',color:"#524930"}}>
                                                    Journal Structure
                                                </Link>

                                            </NavDropdown.Item>
                                        </NavDropdown>
                                        <NavDropdown style={{fontWeight:"bold"}} title="Author Guideline" id="navbarScrollingDropdown">
                                            <NavDropdown.Item>
                                                <Link to="/submissionPreparationChecklist" style={{textDecoration:'none',color:"#524930"}}>
                                                    Submission Preparation Checklist
                                                </Link>

                                            </NavDropdown.Item>
                                            <NavDropdown.Item href="/authorGuidelines">
                                                <Link to="/authorGuidelines" style={{textDecoration:'none',color:"#524930"}}>
                                                    Author Guidelines
                                                </Link>

                                            </NavDropdown.Item>
                                            <NavDropdown.Item>
                                                <Link to="/publicationEthics" style={{textDecoration:'none',color:"#524930"}}>
                                                    Publication Ethics
                                                </Link>

                                            </NavDropdown.Item>
                                        </NavDropdown>
                                        {/*<NavDropdown title="Submission" id="navbarScrollingDropdown">*/}
                                        {/*    <NavDropdown.Item href="/login">*/}
                                        {/*        Submit*/}
                                        {/*    </NavDropdown.Item>*/}
                                        {/*</NavDropdown>*/}
                                        {/*<Nav.Link href="#action2">Announcement</Nav.Link>*/}
                                        <Nav.Link style={{fontWeight:"bold",color:"#ffffff"}}>
                                            <Link to="/aboutUs" style={{textDecoration:'none',color:"#ffffff"}}>
                                                About
                                            </Link>
                                        </Nav.Link>
                                        <Nav.Link style={{fontWeight:"bold"}}>
                                            <Link to="/contactUs" style={{textDecoration:'none',color:"#ffffff"}}>
                                                Contact Us
                                            </Link>
                                        </Nav.Link>

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
