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

function journalStructure() {
    return (
        <div className="App">
            {/*<Nav/>*/}

            <div style={{position:'relative',background:Colors.colorA}} >
                <Row data-aos="fade-up" data-aos-offset="100">
                    <Container style={{paddingLeft: '10%', paddingRight: '10%',marginTop:80}}>
                        <div style={{
                            fontSize: 60,
                            fontWeight: 'bold',
                            color: 'white',
                            textAlign:'left'
                            // fontFamily:'Itim',
                        }}>
                            Journal Structure
                        </div>
                    </Container>
                </Row>
                <Row data-aos="fade-up" data-aos-offset="100" style={{margin: 0}}>
                    <Container style={{paddingLeft: '10%', paddingRight: '10%'}}>
                        <div style={{
                            fontSize: 18,
                            textAlign: 'left',
                            wordSpacing: 3,
                            paddingTop: 25,
                            paddingBottom: 15,
                            color: 'white',
                            // fontFamily:'Itim',
                        }}>
                            The editorial board of the Sri Lanka Journal of Humanities and Language Studies comprises renowned academics and researchers in the field of language studies.
                        </div>
                        <div style={{
                            fontSize: 18,
                            textAlign: 'left',
                            wordSpacing: 3,
                            paddingTop: 5,
                            paddingBottom: 75,
                            color: 'white',
                            // fontFamily:'Itim',
                        }}>
                            Editorial structure consists of an Editor in Chief, Managing Editor (to handle the acquisition and publishing process) and two Editorial Executives, and a corpus of peer reviewers.
                        </div>
                    </Container>

                </Row>
            </div>
            <div >
                <Container data-aos="fade-up" data-aos-offset="100" style={{paddingLeft: '10%', paddingRight: '10%',marginTop:80, paddingBottom:'5%',textAlign:'left'}}>
                    <Table striped bordered hover size="sm">
                        <thead>

                        </thead>
                        <tbody>
                        <tr>
                            <td>Editor in Chief</td>
                            <td>
                                Dr. HAMA Hapugoda
                            </td>
                        </tr>
                        <tr>
                            <td>Managing Editor</td>
                            <td>
                                Dr. Noel Dasanayake
                            </td>
                        </tr>
                        <tr>
                            <td>Editorial Executive </td>
                            <td>
                                Prof. Hiniduma Sunil Senevi<br/>
                                Dept. of Languages, Sabaragamuwa University of Sri Lanka
                                <br/>
                                <br/>
                                Dr.  Rohan Abeywickrama<br/>
                                Senior Lecturer, Dept. of Languages, Sabaragamuwa University of Sri Lanka
                            </td>
                        </tr>

                        </tbody>
                    </Table>
                </Container>
            </div>



            <Footer/>

        </div>
    );
}

export default journalStructure;
