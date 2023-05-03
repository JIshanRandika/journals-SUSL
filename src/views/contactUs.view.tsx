import React from 'react';
import logo from './logo.svg';
import '../App.css';
import Nav from '../components/nav.component';
import Header from '../components/header.component'
import About from '../components/about.component'
import Footer from '../components/footer.component'
import {Row,Col,Container} from 'reactstrap';
import {Table} from "react-bootstrap";
import {Colors} from '../constants/colors'

function contactUsView() {
    return (
        <div className="ContactUsView">
            <Nav/>
            <div style={{position:'relative',background:Colors.colorA}} >
                <Row data-aos="fade-up" data-aos-offset="100">
                    <Container style={{paddingLeft: '10%', paddingRight: '10%',marginTop:80,paddingBottom:40}}>
                        <div style={{
                            fontSize: 60,
                            fontWeight: 'bold',
                            color: 'white',
                            textAlign:'left'
                            // fontFamily:'Itim',
                        }}>
                            Contact Us
                        </div>
                    </Container>
                </Row>

            </div>

            <div >
                <Container style={{paddingLeft: '10%', paddingRight: '10%',paddingBottom:80,paddingTop:80}}>
                    <Row data-aos="fade-up" data-aos-offset="100">
                        <Col md="6" xs="12">
                            <div style={{
                                fontSize: 18,
                                textAlign: 'left',
                                wordSpacing: 3,
                                paddingTop: 5,
                                paddingBottom: 15,
                                color: 'black'
                                // marginTop:10
                                // fontFamily:'Itim',
                            }}>
                                <a style={{fontWeight:"bold"}}>Editor in Chief</a><br/>
                                Dr. Mahesh Hapugoda<br/>
                                Department of Languages,<br/>
                                Faculty of Social Sciences and Languages,<br/>
                                Sabaragamuwa University of Sri Lanka<br/>
                                Email: hapu@ssl.sab.ac.lk<br/>
                                Tel: +94 45 22 800 17
                            </div>
                        </Col>
                        <Col md="6" xs="12">
                            <div style={{
                                fontSize: 18,
                                textAlign: 'left',
                                wordSpacing: 3,
                                paddingTop: 5,
                                paddingBottom: 15,
                                color: 'black'
                                // marginTop:10
                                // fontFamily:'Itim',
                            }}>
                                <a style={{fontWeight:"bold"}}>Managing Editor</a><br/>
                                Dr. Noel Dassanayake,<br/>
                                Department of Languages,<br/>
                                Faculty of Social Sciences and Languages,<br/>
                                Sabaragamuwa University of Sri Lanka<br/>
                                Email: noel@ssl.sab.ac.lk<br/>
                                Tel: +94 45 22 800 17
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>



            <Footer/>

        </div>
    );
}

export default contactUsView;
