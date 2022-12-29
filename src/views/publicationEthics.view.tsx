import React from 'react';
import logo from './logo.svg';
import '../App.css';
import Nav from '../components/nav.component'
import Footer from '../components/footer.component'
import {Row,Col,Container} from 'reactstrap';

function Home() {
    return (
        <div className="App">
            <Nav/>
            <div style={{position:'relative',background:'#520103'}} >
                <Row style={{margin: 0}}>
                    <Container style={{paddingLeft: '15%', paddingRight: '15%'}}>
                        <div style={{
                            fontSize: 18,
                            textAlign: 'left',
                            wordSpacing: 3,
                            paddingTop: 55,
                            paddingBottom: 55,
                            color: 'white',
                            // fontFamily:'Itim',
                        }}>
                            Sri Lanka Journal of Humanities and Language Studies is committed to upholding and maintaining integrity of academic record. Authors should strictly adhere to publication ethics which includes the following.
                        </div>
                    </Container>
                </Row>
            </div>
            <div style={{position:'relative'}} >
                <Row style={{margin: 0}}>
                    <Container style={{paddingLeft: '15%', paddingRight: '15%'}}>
                        <div style={{
                            fontSize: 18,
                            textAlign: 'left',
                            wordSpacing: 3,
                            paddingTop: 55,
                            paddingBottom: 55,
                        }}>
                            <div style={{fontWeight:"bold"}}>
                                01	Plagiarism
                                <br/><br/>
                            </div>
                            <div>
                                LOGOS tolerates 20% of plagiarism at an initial level and would try minimize it further at a later stage. LOGOS takes issues of breaches of academic integrity including copyright infringement and plagiarism very seriously. Every manuscript will undergo rigorous for such errors and malpractices. Sri Lanka Journal of Humanities and Language Studies seeks to protect the reputation of the journal against breaches of academic integrity and we reserve the right to implementing the following measures after investigation including but not limited to:
                                <br/><br/>
                            </div>
                            <div>
                                <ol type="a">
                                    <li>Rejection of a manuscript under review</li>
                                    <li>Retraction of a published article</li>
                                    <li>Informing the author’s institution</li>
                                </ol>
                            </div>
                            <div style={{fontWeight:"bold"}}>
                                02	Previous publication/distribution
                                <br/><br/>
                            </div>
                            <div>
                                Works that have been previously published elsewhere are generally not acceptable to be published in the Sri Lanka Journal of Humanities and Language Studies. If a manuscript has been previously presented at a research conference or seminar, particulars pertaining to such dissemination should be acknowledged on submission of the manuscript.
                                <br/><br/>
                            </div>
                            <div style={{fontWeight:"bold"}}>
                                03	Ethical Responsibilities of Authors
                                <br/><br/>
                            </div>
                            <div>
                               <ul>
                                   <li>Author(s) should ensure that all cited material outside common sense are given full credit by citations and references in the methods prescribed by the journal (see section 3.4.8 of Submission Guidelines) </li>
                                   <li>Author(s) should adhere to ethical standards of collecting and analyzing and should ensure the clarity and accuracy of all presented data </li>
                                   <li>Author(s) should ensure that they have obtained necessary permissions for tables, illustrations, figures and software published elsewhere from copyright holders.</li>
                                   <li>Author(s) should ensure that author information provided in submission are accurate and all authors are in agreement of the submission. </li>
                                   <li>Author(s) should declare any conflicts of interest where applicable.</li>
                               </ul>
                            </div>
                        </div>
                    </Container>
                </Row>
            </div>
            <Footer/>

        </div>
    );
}

export default Home;
