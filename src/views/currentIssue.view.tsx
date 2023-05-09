import React from 'react';
import logo from './logo.svg';
import '../App.css';
import Nav from '../components/nav.component';
import Footer from '../components/footer.component'
import {Row,Col,Container} from 'reactstrap';
import {Table} from "react-bootstrap";
import {Colors} from '../constants/colors'

function currentIssue() {
    return (
        <div className="CurrentIssue">
            {/*<Nav/>*/}
            <div style={{position:'relative'}} >
                <Row>
                    <Col md="4" xs="12" style={{alignItems:'center'}}>
                        <div data-aos="fade-up" data-aos-offset="100" style={{alignContent:"center",alignItems:'center',display:"flex",justifyContent:"center",padding:100}}>
                            <img src="assets/img/cover.png" width='300px' style={{boxShadow: '0px 0px 6px #115b84'}}/>
                        </div>
                    </Col>
                    <Col md="5" xs="12" style={{background:"white"}}>
                        <Container>
                            <Row>
                                <div data-aos="fade-up" data-aos-offset="100"
                                     style={{
                                         fontSize: 25,
                                         textAlign: 'left',
                                         wordSpacing: 3,
                                         paddingTop: 75,
                                         paddingBottom: 15,
                                         color: 'black',
                                         fontWeight:"bold"
                                         // marginTop:10
                                         // fontFamily:'Itim',
                                     }}>
                                    Volume I | Issue I
                                </div>
                                <hr data-aos="fade-up" data-aos-offset="100"/>
                                <div data-aos="fade-up" data-aos-offset="100"
                                     style={{
                                         fontSize: 15,
                                         textAlign: 'left',
                                         wordSpacing: 3,
                                         paddingTop: 5,
                                         paddingBottom: 0,
                                         color: 'black',
                                         fontWeight:"bold"
                                         // marginTop:10
                                         // fontFamily:'Itim',
                                     }}>
                                    <a href='https://www.sab.ac.lk/' target='_blank'>
                                        Wildlife Tourism Resources Development: A Case Study of Beijing Wildlife Park
                                    </a>
                                </div>
                                <div data-aos="fade-up" data-aos-offset="100"
                                     style={{
                                         fontSize: 15,
                                         textAlign: 'left',
                                         wordSpacing: 3,
                                         paddingTop: 3,
                                         paddingBottom: 15,
                                         color: 'black',
                                         // fontWeight:"bold"
                                         // marginTop:10
                                         // fontFamily:'Itim',
                                     }}>
                                    Duoduo Wang and Michael Luck
                                </div>



                                <hr data-aos="fade-up" data-aos-offset="100"/>
                                <div data-aos="fade-up" data-aos-offset="100"
                                     style={{
                                         fontSize: 15,
                                         textAlign: 'left',
                                         wordSpacing: 3,
                                         paddingTop: 5,
                                         paddingBottom: 0,
                                         color: 'black',
                                         fontWeight:"bold"
                                         // marginTop:10
                                         // fontFamily:'Itim',
                                     }}>
                                    <a href='https://www.sab.ac.lk/' target='_blank'>
                                        Wildlife Tourism Resources Development: A Case Study of Beijing Wildlife Park
                                    </a>
                                </div>
                                <div data-aos="fade-up" data-aos-offset="100"
                                     style={{
                                         fontSize: 15,
                                         textAlign: 'left',
                                         wordSpacing: 3,
                                         paddingTop: 3,
                                         paddingBottom: 15,
                                         color: 'black',
                                         // fontWeight:"bold"
                                         // marginTop:10
                                         // fontFamily:'Itim',
                                     }}>
                                    Duoduo Wang and Michael Luck
                                </div>



                                <hr data-aos="fade-up" data-aos-offset="100"/>
                                <div data-aos="fade-up" data-aos-offset="100"
                                     style={{
                                         fontSize: 15,
                                         textAlign: 'left',
                                         wordSpacing: 3,
                                         paddingTop: 5,
                                         paddingBottom: 0,
                                         color: 'black',
                                         fontWeight:"bold"
                                         // marginTop:10
                                         // fontFamily:'Itim',
                                     }}>
                                    <a href='https://www.sab.ac.lk/' target='_blank'>
                                        Wildlife Tourism Resources Development: A Case Study of Beijing Wildlife Park
                                    </a>
                                </div>
                                <div data-aos="fade-up" data-aos-offset="100"
                                     style={{
                                         fontSize: 15,
                                         textAlign: 'left',
                                         wordSpacing: 3,
                                         paddingTop: 3,
                                         paddingBottom: 15,
                                         color: 'black',
                                         // fontWeight:"bold"
                                         // marginTop:10
                                         // fontFamily:'Itim',
                                     }}>
                                    Duoduo Wang and Michael Luck
                                </div>


                                <hr data-aos="fade-up" data-aos-offset="100"/>
                                <div data-aos="fade-up" data-aos-offset="100"
                                     style={{
                                         fontSize: 15,
                                         textAlign: 'left',
                                         wordSpacing: 3,
                                         paddingTop: 5,
                                         paddingBottom: 0,
                                         color: 'black',
                                         fontWeight:"bold"
                                         // marginTop:10
                                         // fontFamily:'Itim',
                                     }}>
                                    <a href='https://www.sab.ac.lk/' target='_blank'>
                                        Wildlife Tourism Resources Development: A Case Study of Beijing Wildlife Park
                                    </a>
                                </div>
                                <div data-aos="fade-up" data-aos-offset="100"
                                     style={{
                                         fontSize: 15,
                                         textAlign: 'left',
                                         wordSpacing: 3,
                                         paddingTop: 3,
                                         paddingBottom: 15,
                                         color: 'black',
                                         // fontWeight:"bold"
                                         // marginTop:10
                                         // fontFamily:'Itim',
                                     }}>
                                    Duoduo Wang and Michael Luck
                                </div>
                            </Row>
                        </Container>

                    </Col>
                    <Col md="3" xs="12" style={{background:"white"}}>
                        <Container>
                            <div data-aos="fade-up" data-aos-offset="100"
                                 style={{
                                     fontSize: 15,
                                     textAlign: 'left',
                                     wordSpacing: 3,
                                     paddingTop: 80,
                                     paddingBottom: 2,
                                     color: 'black'
                                     // marginTop:10
                                     // fontFamily:'Itim',
                                 }}>
                                p-ISSN: 2961-5828
                            </div>
                            <div data-aos="fade-up" data-aos-offset="100"
                                 style={{
                                     fontSize: 15,
                                     textAlign: 'left',
                                     wordSpacing: 3,
                                     paddingTop: 5,
                                     paddingBottom: 15,
                                     color: 'black'
                                     // marginTop:10
                                     // fontFamily:'Itim',
                                 }}>
                                e-ISSN: 2989-0527
                            </div>
                            <div data-aos="fade-up" data-aos-offset="100"
                                 style={{
                                     fontSize: 15,
                                     textAlign: 'left',
                                     wordSpacing: 3,
                                     paddingTop: 5,
                                     paddingBottom: 15,
                                     color: 'black'
                                     // marginTop:10
                                     // fontFamily:'Itim',
                                 }}>
                                Publisher: Department of Languages, Sabaragamuwa University of Sri Lanka
                            </div>
                        </Container>

                    </Col>
                </Row>
                <Row style={{paddingBottom:50}}>
                    <Col md="4" xs="12" style={{alignItems:'center'}}>
                    </Col>
                    <Col md="5" xs="12" style={{alignItems:'center'}}>


                    </Col>
                </Row>
            </div>
            <Footer/>

        </div>
    );
}

export default currentIssue;
