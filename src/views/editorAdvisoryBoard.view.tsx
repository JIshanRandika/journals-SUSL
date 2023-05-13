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

function editorAdvisoryBoard() {
    return (
        <div className="EitorAdvisoryBoard">
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
                            Editorial Advisory Board
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
                            paddingBottom: 75,
                            color: 'white',
                            // fontFamily:'Itim',
                        }}>
                            Need to recruit the initial editorial board from our most interested and flexible colleagues across Sri Lanka and outside, for quality and reputation from the beginning, and to develop a rigorous peer review process. The board is absolutely crucial. Academic journals work on a system of academic capital - therefore we need respected individuals who are willing to sit on the board, even if they are only lending their name and we end up doing most of the legwork. The suggested names are:                        </div>
                    </Container>

                </Row>
            </div>
            <div >
                <Container data-aos="fade-up" data-aos-offset="100" style={{paddingLeft: '10%', paddingRight: '10%',marginTop:80, paddingBottom:'5%'}}>
                    <Table striped bordered hover size="sm">
                        <thead>
                        <tr>
                            <th>Editor Name</th>
                            <th>Department/Designation</th>
                        </tr>
                        </thead>
                        <tbody>

                        <tr>
                            <td>Prof. Cen Haibing</td>
                            <td>Dean, School of Foreign Languages, Huanggang Normal University, China</td>
                        </tr>
                        <tr>
                            <td>Prof. Zheng Youjie</td>
                            <td>Vice Dean, School of Foreign Languages , Huanggang Normal University, China</td>
                        </tr>
                        <tr>
                            <td>Prof. Indika Liyanage </td>
                            <td>Faculty of Arts and Education, Deakin University, Australia</td>
                        </tr>

                        <tr>
                            <td>Prof. Rajiva Wijesinha</td>
                            <td>Emeritus Professor in Languages, Sabaragamuwa University of Sri Lanka</td>
                        </tr>
                        <tr>
                            <td>Prof. Hiniduma Sunil Senevi </td>
                            <td>Dept. of Languages, Sabaragamuwa University of Sri Lanka</td>
                        </tr>
                        <tr>
                            <td>Prof. WM Ariyaratne</td>
                            <td>Dept. of Languages, Sabaragamuwa University of Sri Lanka</td>
                        </tr>
                        <tr>
                            <td>Prof. RGS Rathnayake</td>
                            <td>Dept. of Languages, Sabaragamuwa University of Sri Lanka</td>
                        </tr>
                        <tr>
                            <td>Prof. RADP Weerasekara</td>
                            <td>Dept. of Languages, Sabaragamuwa University of Sri Lanka</td>
                        </tr>
                        <tr>
                            <td>Prof. Upul Hewawithanagamage</td>
                            <td>Dept. of Hindi, University of Kelaniya</td>
                        </tr>
                        <tr>
                            <td>Prof. V Maheswaran</td>
                            <td>Dept. of Tamil, University of Peradeniya</td>
                        </tr>
                        <tr>
                            <td>Prof. T Manoharan</td>
                            <td>Retired Professor, University of Peradeniya</td>
                        </tr>
                        <tr>
                            <td>Prof. Dilrukshi Rathnayake</td>
                            <td>Dept. of Foreign Languages, University of Kelaniya</td>
                        </tr>

                        <tr>
                            <td>Dr. JKC Dissanayake</td>
                            <td>Dept. of Languages, Sabaragamuwa University of Sri Lanka</td>
                        </tr>
                        <tr>
                            <td>Dr. Nirosha Paranavithana</td>
                            <td>Dept. of Languages, Sabaragamuwa University of Sri Lanka</td>
                        </tr>

                        <tr>
                            <td>Dr. SK Kannathas</td>
                            <td>Dept. of Translation Studies, University of Jaffna</td>
                        </tr>

                        </tbody>
                    </Table>
                </Container>
            </div>
            <Footer/>

        </div>
    );
}

export default editorAdvisoryBoard;
