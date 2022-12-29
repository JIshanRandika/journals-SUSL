import React from 'react';
import logo from './logo.svg';
import '../App.css';
import Nav from '../components/nav.component';
import Footer from '../components/footer.component'
import {Row,Col,Container} from 'reactstrap';

function submissionPreparationChecklist() {
    return (
        <div className="SubmissionPreparationChecklist">
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
                            As part of the submission process, authors are required to check off their submission's compliance with all of the following items, and submissions may be returned to authors that do not adhere to these guidelines.
                        </div>
                    </Container>
                </Row>
            </div>
            <div>
                <Row style={{paddingBottom: 80}}>
                    <Container style={{paddingLeft: '15%', paddingRight: '15%'}}>
                        <div style={{
                            fontSize: 18,
                            textAlign: 'left',
                            wordSpacing: 3,
                            paddingTop: 25,
                            // color: 'white',
                            // fontFamily:'Itim',
                        }}>
                            <ul>
                                <li style={{paddingBottom:30}}>
                                    The submission has not been previously published, nor is it before another journal for consideration (or an explanation has been provided in Comments to the Editor).
                                </li>
                                <li style={{paddingBottom:30}}>
                                    The submission file is in OpenOffice, Microsoft Word, or RTF document file format
                                </li>
                                <li style={{paddingBottom:30}}>
                                    Where available, URLs for the references have been provided.
                                </li>
                                <li style={{paddingBottom:30}}>
                                    The text is single-spaced; uses a 12-point font; employs italics, rather than underlining (except with URL addresses); and all illustrations, figures, and tables are placed within the text at the appropriate points, rather than at the end.
                                </li>
                                <li style={{paddingBottom:30}}>
                                    The text adheres to the stylistic and bibliographic requirements outlined in the Author Guidelines.
                                </li>

                            </ul>
                        </div>

                    </Container>
                </Row>
            </div>
            <Footer/>

        </div>
    );
}

export default submissionPreparationChecklist;
