// import React from 'react';
// import logo from './logo.svg';
// import '../App.css';
// import Nav from '../components/nav.component';
// import Header from '../components/header.component'
// import About from '../components/about.component'
// import Footer from '../components/footer.component'
// import {Row,Col,Container} from 'reactstrap';
//
// function Home() {
//     return (
//         <div className="App">
//             <Nav/>
//             <Header/>
//             <About/>
//             <Footer/>
//
//         </div>
//     );
// }
//
// export default Home;

import React from 'react';
import logo from './logo.svg';
import '../App.css';
import Nav from '../components/nav.component';
import Footer from '../components/footer.component'
import {Row,Col,Container} from 'reactstrap';
import {Table} from "react-bootstrap";
import {Colors} from '../constants/colors'
// @ts-ignore
import AOS from 'aos';
import 'aos/dist/aos.css';

function Home() {
    AOS.init({
        duration: 2000,
    })
    // const mystyle = {
    //     homeBtn: "green"
    // };
    return (

        <div className="Home">

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
                            <Row >
                                <Container>
                                    <div data-aos="fade-up" data-aos-offset="100" style={{
                                        fontSize: 25,
                                        textAlign: 'left',
                                        wordSpacing: 3,
                                        paddingTop: 75,
                                        color: 'black',
                                        fontWeight:'bold'
                                        // marginTop:10
                                        // fontFamily:'Itim',
                                    }}>
                                        Sri Lanka Journal of Humanities and Language Studies (LOGOS)
                                    </div>
                                    <div data-aos="fade-up" data-aos-offset="100"
                                         style={{
                                             fontSize: 20,
                                             textAlign: 'left',
                                             wordSpacing: 3,
                                             paddingTop: 5,
                                             paddingBottom: 15,
                                             color: 'gray'
                                             // marginTop:10
                                             // fontFamily:'Itim',
                                         }}>
                                        Editor in Chief: Dr. Mahesh Hapugoda
                                    </div>
                                    <div data-aos="fade-up" data-aos-offset="100" style={{
                                        fontSize: 15,
                                        textAlign: 'left',
                                        wordSpacing: 3,
                                        paddingTop: 5,
                                        paddingBottom: 5,
                                        color: 'black'
                                        // marginTop:10
                                        // fontFamily:'Itim',
                                    }}>
                                        <a style={{fontStyle:'italic'}}>Sri Lanka Journal of Humanities and Language Studies (LOGOS)</a> is a multilinguistic journal committed to provide an integrative approach to understanding language literature and linguistics. It welcomes submissions from historical linguists, sociolinguists, dialectologists, and scholars in the field of languages. Topics covered by this journal include (but are not limited to) the following: Pedagogy of Foreign Languages, Translation Studies, Language and Literature, Literary Theory, Sociolinguistics, Applied Linguistics, Language Philosophy, Semiotics, Language for Special Purposes, Discourse Studies, and Film Studies. Submissions may take the form of original research papers, peer-reviewed articles, book reviews, editorials, essays on contemporary issues or perspectives from the field of languages. We also encourage interdisciplinary submissions that discover the relationship between language such cognate subjects and disciplines such as philosophy, history, and social sciences.
                                    </div>
                                    <div data-aos="fade-up" data-aos-offset="100" style={{
                                        fontSize: 15,
                                        textAlign: 'left',
                                        wordSpacing: 3,
                                        paddingTop: 5,
                                        paddingBottom: 5,
                                        color: 'black'
                                        // marginTop:10
                                        // fontFamily:'Itim',
                                    }}>
                                        The journal accepts manuscripts written in English, Sinhala, Tamil, Japanese, Chinese, Hindi, and German languages.
                                    </div>
                                    <div data-aos="fade-up" data-aos-offset="100" style={{
                                        fontSize: 15,
                                        textAlign: 'left',
                                        wordSpacing: 3,
                                        paddingTop: 5,
                                        paddingBottom: 15,
                                        color: 'black'
                                        // marginTop:10
                                        // fontFamily:'Itim',
                                    }}>
                                        LOGOS is published biannually in July and December each year.
                                    </div>
                                </Container>

                            </Row>
                        </Container>

                    </Col>
                    <Col md="3" xs="12" style={{background:"white"}}>
                        <Container>
                            <div data-aos="fade-up" data-aos-offset="100" style={{
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
                        <Container>
                            <div data-aos="fade-up" data-aos-offset="100" style={{
                                fontSize: 25,
                                textAlign: 'left',
                                wordSpacing: 3,
                                paddingTop: 5,
                                paddingBottom: 15,
                                color: 'black',
                                fontWeight:"bold"
                                // marginTop:10
                                // fontFamily:'Itim',
                            }}>
                                Volume I | Issue I
                            </div>
                            <hr data-aos="fade-up" data-aos-offset="100" />
                            <div data-aos="fade-up" data-aos-offset="100" style={{
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
                            <div data-aos="fade-up" data-aos-offset="100" style={{
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



                            <hr data-aos="fade-up" data-aos-offset="100" />
                            <div data-aos="fade-up" data-aos-offset="100" style={{
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
                            <div data-aos="fade-up" data-aos-offset="100" style={{
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



                            <hr data-aos="fade-up" data-aos-offset="100" />
                            <div data-aos="fade-up" data-aos-offset="100" style={{
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
                            <div data-aos="fade-up" data-aos-offset="100" style={{
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


                            <hr data-aos="fade-up" data-aos-offset="100" />
                            <div data-aos="fade-up" data-aos-offset="100" style={{
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
                            <div data-aos="fade-up" data-aos-offset="100" style={{
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
                        </Container>


                    </Col>
                </Row>
            </div>
            <Footer/>

        </div>
    );
}

export default Home;
