import React, {Component} from 'react';
import {Container, Row, Col} from "reactstrap";
import {Button} from "react-bootstrap";
import Carousel from '../components/homeCarousel.component'


export default class HeaderComponent extends Component {
    render() {

        return (

            <>
                <div style={{position:'relative',background:'#520103'}} >
                    <Row style={{margin: 0}}>
                        <Container style={{paddingLeft: '15%', paddingRight: '15%'}}>
                            <div style={{
                                fontSize: 18,
                                textAlign: 'left',
                                wordSpacing: 3,
                                paddingTop: 65,
                                color: 'white',
                                // fontFamily:'Itim',
                            }}>
                                Sri Lanka Journal of Humanities and Language Studies is a premier multilingual journal which publishes double-blind peer reviewed research and commentary open access in fields related to English, Sinhala, Tamil, Japanese, Chinese, Hindi and German languages. It aims to provide a discursive platform for academics and researchers to publish their findings in the above languages. This journal addresses to the need of non-availability of a language journal in Sri Lanka, especially for the young researchers to publish their findings in their own languages. The journal is published biannually by the Department of Languages of Sabaragamuwa University of Sri Lanka.                            </div>
                        </Container>


                    </Row>
                    <Row>
                        <Container style={{paddingLeft: '15%', paddingRight: '15%',marginTop:80}}>
                            <div style={{
                                fontSize: 60,
                                fontWeight: 'bold',
                                color: 'white',
                                textAlign:'left'
                                // fontFamily:'Itim',
                            }}>
                                About The Journal
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
                                Sri Lanka Journal of Humanities and Language Studies is a premier multilingual journal which publishes double-blind peer reviewed research and commentary open access in fields related to English, Sinhala, Tamil, Japanese, Chinese, Hindi and German languages. It aims to provide a discursive platform for academics and researchers to publish their findings in the above languages. This journal addresses to the need of non-availability of a language journal in Sri Lanka, especially for the young researchers to publish their findings in their own languages. The journal is published biannually by the Department of Languages of Sabaragamuwa University of Sri Lanka.                            </div>
                        </Container>


                    </Row>


                    <Row style={{margin: 0}}>
                        <Container style={{paddingLeft: '15%', paddingRight: '15%',marginTop:80}}>
                            <div style={{
                                fontSize: 60,
                                fontWeight: 'bold',
                                color: 'white',
                                textAlign:'left'
                                // fontFamily:'Itim',
                            }}>
                                Scope and Coverage
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
                                Sri Lanka Journal of Humanities and Language Studies (LOGOS) is a multilinguistic journal committed to provide an integrative approach to understanding language literature and linguistics. It welcomes submissions from historical linguists, sociolinguists, dialectologists and scholars in the field of languages. Topics covered by this journal include (but are not limited to) the following: Pedagogy of Foreign Languages, Translation Studies, Language and Literature, Literary Theory, Socio-linguistics, Applied Linguistics, Language Philosophy, Semiotics, Language for Special Purposes, Discourse Studies and Film Studies. Submissions may take the form of original research papers, peer-reviewed articles, book reviews, editorials, essays on contemporary issues or perspectives from the field of languages. We also encourage interdisciplinary submissions that discover the relationship between language such cognate subjects and disciplines such as philosophy, history and social sciences.                             </div>
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
                                Objectives
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
                                <ul>
                                    <li>
                                        To provide a platform for language researchers to publish their research findings in their respective languages
                                    </li>
                                    <li>
                                        To promote language research in the Department, Faculty, and University as well as in the country
                                    </li>
                                    <li>
                                        To promote undergraduates to engage in language researches which are of publishable and international nature
                                    </li>
                                    <li>
                                        To promote collaborative research in Sri Lanka and Asia
                                    </li>
                                    <li>
                                        To enhance and uplift intercultural studies, interlingual studies, interculrual communicative studies and sociolinguistic studies
                                    </li>
                                    <li>
                                        To promote discursive engagement, theoretical articulations, language pragmatics, historical linguistics, cultural studies, language pedagogy in Sri Lanka and in Asia
                                    </li>
                                </ul>
                            </div>

                        </Container>
                    </Row>
                </div>

            </>



        );
    }
}
