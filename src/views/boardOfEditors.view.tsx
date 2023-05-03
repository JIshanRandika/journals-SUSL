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

function boardOfEditorsView() {
    return (
        <div className="BoardOfEditorsView">
            <Nav/>
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
                            Board of Editors
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
                            SLJMS appoints qualified and renowned researchers from the respective fields of study as Editorial Board Members (EBMs) who commit in advance to provide peer reviews for a journal or journal section.  EBMs provide structured peer reviews of a minimum of 8 to 10 manuscript submissions over the course of 1 year. Typically, EBMs review manuscripts specific to a single editor, though the need to balance workloads across areas of a journal may result in review assignments from multiple editors. EBMs typically possess a high degree of expertise in their specialty (or specialties), have experience with reviewing manuscripts, and are committed to participating in the process of providing timely, high-quality reviews for the journal on which they serve.                        </div>
                    </Container>

                </Row>
            </div>

            <div >
                <Container data-aos="fade-up" data-aos-offset="100" style={{paddingLeft: '10%', paddingRight: '10%',marginTop:80}}>
                <Table striped bordered hover size="sm">
                    <thead>
                    <tr>
                        <th>Editor Name</th>
                        <th>Department</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Professor Hiniduma Sunil Senevi</td>
                        <td>Dept. of Languages, Sabaragamuwa University of Sri Lanka</td>
                    </tr>
                    <tr>
                        <td>Professor. WM Ariyaratne</td>
                        <td>Dept. of Languages, Sabaragamuwa University of Sri Lanka</td>
                    </tr>
                    <tr>
                        <td>Professor. RGS Rathnayake</td>
                        <td>Dept. of Languages, Sabaragamuwa University of Sri Lanka</td>
                    </tr>
                    <tr>
                        <td>Profesor R A D P Weerasekara</td>
                        <td>Dept. of Languages, Sabaragamuwa University of Sri Lanka</td>
                    </tr>
                    <tr>
                        <td>Professor V Maheswaran</td>
                        <td>Department of Tamil, University of Peradeniya</td>
                    </tr>
                    <tr>
                        <td>Dr. J K C Dissanayake</td>
                        <td>Dept. of Languages, Sabaragamuwa University of Sri Lanka</td>
                    </tr>
                    <tr>
                        <td>Dr. Champa De Silva</td>
                        <td>Dept. of Languages, Sabaragamuwa University of Sri Lanka</td>
                    </tr>
                    <tr>
                        <td>Dr. Nirosha Paranavithana</td>
                        <td>Dept. of Languages, Sabaragamuwa University of Sri Lanka</td>
                    </tr>
                    <tr>
                        <td>Dr. Dilrukshi Rathnayake</td>
                        <td>Department of Foreign Languages, University of Kelaniya</td>
                    </tr>
                    <tr>
                        <td>Dr. H A M A Hapugoda</td>
                        <td>Dept. of Languages, Sabaragamuwa University of Sri Lanka</td>
                    </tr>
                    <tr>
                        <td>Dr. K W R K H Abeywickrama</td>
                        <td>Dept. of Languages, Sabaragamuwa University of Sri Lanka</td>
                    </tr>
                    <tr>
                        <td>Dr. K S N Prasangani</td>
                        <td>Dept. of Languages, Sabaragamuwa University of Sri Lanka</td>
                    </tr>
                    <tr>
                        <td>Dr. S K Kannathas</td>
                        <td>Dept. of Languages, Sabaragamuwa University of Sri Lanka</td>
                    </tr>
                    <tr>
                        <td>Mr. B NagodaVithana</td>
                        <td>Dept. of Languages, Sabaragamuwa University of Sri Lanka</td>
                    </tr>
                    <tr>
                        <td>Mr. Mahinda Pathirana</td>
                        <td>Dept. of Languages, Sabaragamuwa University of Sri Lanka</td>
                    </tr>
                    <tr>
                        <td>Dr. D.A.N.S.Y. Dassanayake </td>
                        <td>Dept. of Languages, Sabaragamuwa University of Sri Lanka</td>
                    </tr>
                    <tr>
                        <td>Mrs. M A D De Silva Weerakkody</td>
                        <td>Dept. of Languages, Sabaragamuwa University of Sri Lanka</td>
                    </tr>
                    <tr>
                        <td>Ms. S P S P  Weerasinghe</td>
                        <td>Dept. of Languages, Sabaragamuwa University of Sri Lanka</td>
                    </tr>
                    <tr>
                        <td>Ms. P D M Muthumali</td>
                        <td>Dept. of Languages, Sabaragamuwa University of Sri Lanka</td>
                    </tr>

                    </tbody>
                </Table>
                </Container>
            </div>

            <div >
                <Container data-aos="fade-up" data-aos-offset="100" style={{paddingLeft: '10%', paddingRight: '10%',marginTop:80, paddingBottom:'5%'}}>
                    <Table striped bordered hover size="sm">
                        <thead>

                        </thead>
                        <tbody>
                        <tr>
                            <td>Executive Editors</td>
                            <td>
                                Ms. SPSP Weerasinghe
                                <br/>
                                Ms. Malsha Muthumali
                                <br/>
                                Ms. Madhuka Hansani
                            </td>
                        </tr>
                        <tr>
                            <td>Text Editors</td>
                            <td>
                                Sinhala - Mr. Saman Peramuna
                                <br/>
                                English - Ms. SPSP Weerasinghe
                                <br/>
                                Tamil - Ms. Sudarshani Nagarathnam
                                <br/>
                                Japanese - Ms. Malsha Muthumali
                                <br/>
                                Chinese - Mrs. R A R P Maduwanthi
                                <br/>
                                Hindi - Mrs. W M Sewwandi
                                <br/>
                                German - Ms. Hansi Dissanayake
                                <br/>
                                Translation - Ms. Imanshi Melanka
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

export default boardOfEditorsView;
