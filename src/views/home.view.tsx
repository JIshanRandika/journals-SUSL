import React from 'react';
import logo from './logo.svg';
import '../App.css';
import Nav from '../components/nav.component';
import Header from '../components/header.component'
import {Row,Col,Container} from 'reactstrap';

function Home() {
    return (
        <div className="App">
            <Nav/>
            <Header/>
            <div style={{position:'relative',background:'#520103'}} >
                <Row>
                    <Container style={{paddingLeft: '15%', paddingRight: '15%',marginTop:80}}>
                        <div style={{
                            fontSize: 60,
                            fontWeight: 'bold',
                            color: 'white',
                            textAlign:'left'
                            // fontFamily:'Itim',
                        }}>
                            About
                        </div>
                    </Container>
                </Row>
                <Row style={{margin: 0}}>
                    <Container style={{paddingLeft: '15%', paddingRight: '15%'}}>
                        <div style={{
                            fontSize: 18,
                            textAlign: 'left',
                            wordSpacing: 3,
                            paddingTop: 25,
                            color: 'white',
                            // fontFamily:'Itim',
                        }}>
                            he Advances in Technology, founded in 2021, is an international journal aims to promote emerging technological advances and innovations in Applied Sciences, Engineering, and Technology.
                        </div>
                    </Container>


                </Row>


                <Row style={{margin: 0}}>
                    <Container style={{paddingLeft: '15%', paddingRight: '15%'}}>
                        <div style={{
                            fontSize: 60,
                            fontWeight: 'bold',
                            color: 'white',
                            textAlign:'left'
                            // fontFamily:'Itim',
                        }}>
                            Aim
                        </div>
                    </Container>
                </Row>
                <Row style={{paddingBottom: 80}}>
                    <Container style={{paddingLeft: '15%', paddingRight: '15%'}}>
                        <div style={{
                            fontSize: 18,
                            textAlign: 'left',
                            wordSpacing: 3,
                            paddingTop: 25,
                            color: 'white',
                            // fontFamily:'Itim',
                        }}>
                            Advances in Technology journal welcomes articles, communications and reviews that identify and examine technology advancements. The journal focuses on research in the following main fields, but not limited to, Advanced Materials, Agriculture Technology, Automation, Automobile, Aquatic and Marine, Biotechnology, Biomedical, Building Services, Civil and Construction Technology, Computer Networks, Data Science, Deep Learning, Electrical and Electronics, Energy, Environmental Technology, Field Crop Management, Emerging Food Technology, Food Preservation Technology, Food Engineering Technology, Geotechnology, Information and Communication Technology, Industrial Bioprocessing, Mechatronics, Mechanical Technology, Multimedia Technology, Nanotechnology, Robotics, Science for Technology, Transportation, Technolgy Education, Technology Management, Polymer Technology, and Waste Management Technology. The journal provides a platform for publishing technology research papers that straddles the boundaries separating two or more disciplines.                        </div>
                    </Container>


                </Row>
            </div>
        </div>
    );
}

export default Home;
