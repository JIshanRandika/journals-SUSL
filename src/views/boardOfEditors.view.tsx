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
                        <td>Prof. Hiniduma Sunil Senevi</td>
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
                        <td>Prof. V Maheswaran</td>
                        <td>Dept. of Tamil, University of Peradeniya</td>
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
                        <td>Dr. Champa De Silva</td>
                        <td>Dept. of Languages, Sabaragamuwa University of Sri Lanka</td>
                    </tr>
                    <tr>
                        <td>Dr. Nirosha Paranavithana</td>
                        <td>Dept. of Languages, Sabaragamuwa University of Sri Lanka</td>
                    </tr>

                    <tr>
                        <td>Dr. HAMA Hapugoda</td>
                        <td>Dept. of Languages, Sabaragamuwa University of Sri Lanka</td>
                    </tr>
                    <tr>
                        <td>Dr. KWRKH Abeywickrama</td>
                        <td>Dept. of Languages, Sabaragamuwa University of Sri Lanka</td>
                    </tr>
                    <tr>
                        <td>Dr. KSN Prasangani</td>
                        <td>Dept. of Languages, Sabaragamuwa University of Sri Lanka</td>
                    </tr>
                    <tr>
                        <td>Dr. SK Kannathas</td>
                        <td>Dept. of Translation Studies, University of Jaffna</td>
                    </tr>
                    <tr>
                        <td>Dr. DANSY Dassanayake </td>
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
                        <td>Ms. MAD De Silva Weerakkody</td>
                        <td>Dept. of Languages, Sabaragamuwa University of Sri Lanka</td>
                    </tr>
                    <tr>
                        <td>Ms. SPSP  Weerasinghe</td>
                        <td>Dept. of Languages, Sabaragamuwa University of Sri Lanka</td>
                    </tr>
                    <tr>
                        <td>Ms. PDM Muthumali</td>
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
                                Ms. PDM Muthumali
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
                                Japanese - Ms. PDM Muthumali
                                <br/>
                                Chinese - Mr. RARP Maduwanthi
                                <br/>
                                Hindi - Ms. WM Sewwandi
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
