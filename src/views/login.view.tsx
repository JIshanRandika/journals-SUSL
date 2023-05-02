import React from 'react';
import logo from './logo.svg';
import '../App.css';
import Nav from '../components/nav.component';
import Footer from '../components/footer.component'
import {Row,Col,Container} from 'reactstrap';
import {Button, Card, Form} from "react-bootstrap";
import {Colors} from '../constants/colors'

function Home() {
    return (
        <div className="App">
            <Nav/>

            <div style={{margin:"10%"}}>
                <Card className="text-center">
                    <Card.Header>Please Enter the Following</Card.Header>
                    <Card.Body style={{paddingLeft:'15%',paddingRight:'15%'}}>
                        <Form style={{textAlign:"left"}}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Check me out" />
                            </Form.Group>
                            <Row style={{display:"flex",justifyContent:"center"}}>
                                <Col style={{display:"flex",justifyContent:"center"}}>
                                    <Button href='/mySubmission' style={{background:Colors.colorA, border:"none"}}  type="submit">
                                        Author Login
                                    </Button>
                                </Col>
                                <Col style={{display:"flex",justifyContent:"center"}}>
                                    <Button href='/mySubmission' style={{background:Colors.colorA, border:"none"}} type="submit">
                                        Reviewer Login
                                    </Button>
                                </Col>
                                <Col>
                                    <Button href='/mySubmission' style={{background:Colors.colorA, border:"none"}} type="submit">
                                        Editor Login
                                    </Button>
                                </Col>
                                <Col>
                                    <Button href='/mySubmission' style={{background:Colors.colorA, border:"none"}} type="submit">
                                        Publisher Login
                                    </Button>
                                </Col>
                            </Row>

                        </Form>
                    </Card.Body>
                    <Card.Footer className="text-muted">
                        <Row>
                            <Col>
                                <a href="#">Send Login Details</a>
                            </Col>
                            <Col>
                                <a href="#">Register Now</a>
                            </Col>
                            <Col>
                                <a href="#">Login Help</a>
                            </Col>
                        </Row>
                    </Card.Footer>
                </Card>
            </div>

            <Footer/>

        </div>
    );
}

export default Home;
