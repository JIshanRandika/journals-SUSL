import React from 'react';
import logo from './logo.svg';
import '../App.css';
import Nav from '../components/nav.component';
import Footer from '../components/footer.component'
import {Row,Col,Container} from 'reactstrap';
import {Colors} from '../constants/colors'

function Home() {
    return (
        <div className="App">
            {/*<Nav/>*/}
            <div style={{position:'relative',background:Colors.colorA}} >
                <Row data-aos="fade-up" data-aos-offset="100" style={{margin: 0}}>
                    <Container style={{paddingLeft: '15%', paddingRight: '15%'}}>
                        <div  style={{
                            fontSize: 18,
                            textAlign: 'left',
                            wordSpacing: 3,
                            paddingTop: 55,
                            paddingBottom: 55,
                            color: 'white',
                            // fontFamily:'Itim',
                        }}>
                            Submission of a manuscript implies that the study is an original work carried out by the author(s) and it has not been published elsewhere or being considered for publication elsewhere at the time of submission.
                        <br/><br/>
                            It is highly recommended that authors read ‘Submission Guidelines’ before submitting their manuscripts.
                        </div>
                    </Container>
                </Row>
            </div>
            <div style={{position:'relative'}} >
                <Row data-aos="fade-up" data-aos-offset="100" style={{margin: 0}}>
                    <Container style={{paddingLeft: '15%', paddingRight: '15%'}}>
                        <div style={{
                            fontSize: 18,
                            textAlign: 'left',
                            wordSpacing: 3,
                            paddingTop: 55,
                            paddingBottom: 55,
                        }}>
                            <div style={{fontWeight:"bold"}}>
                                01	Online Submission<br/><br/>
                            </div>
                            <div>
                                The manuscripts should preferably be submitted through the manuscript submission portal of the journal or via email to (Journal e-mail)
                                <br/><br/>
                            </div>
                            <div style={{fontWeight:"bold"}}>
                                02	Manuscript Types and Length
                                <br/><br/>
                            </div>
                            <div>
                                <ol type="i">
                                    <li>Research articles (7000-8000 words)</li>
                                    <li>Book Review (2000-3000 words)</li>
                                    <li>Review Essay (6000-7000 words)</li>
                                </ol>
                            </div>
                            <div>
                                *Length of each manuscript type includes abstract, main text, footnotes, endnotes and references                                <br/><br/>
                            </div>
                            <div style={{fontWeight:"bold"}}>
                                03		Manuscript Structure
                                <br/><br/>
                            </div>
                            <div>
                                Designing of Manuscripts submitted to the Sri Lanka Journal of Humanities and Language Studies could be done any accepted structure depending on the type and content of the work submitted.
                                <br/><br/>
                                Abstract, Keywords, Introduction (aims and objectives, significance, research gap), Literature Review, Methodology, Findings and Discussion, Conclusions, Bibliography, acknowledgements, annexes.
                                <br/><br/>
                            </div>
                            <div style={{fontWeight:"bold"}}>
                                04		Cover Sheet
                                <br/><br/>
                            </div>
                            <div>
                                The title page should include information of authors including,
                                <br/><br/>
                            </div>
                            <div>
                                <ul>
                                    <li>Name(s) of the author(s)</li>
                                    <li>A short biography (not exceeding 200 words) of author(s)</li>
                                    <li>Affiliation(s) including Department, city, state and country</li>
                                    <li>Mailing address of the corresponding author including city, state, country and postal code</li>
                                    <li>E-mail address and telephone number(s) of the corresponding author</li>
                                </ul>
                            </div>
                            <div style={{fontWeight:"bold"}}>
                                05		Abstract
                                <br/><br/>
                            </div>
                            <div>
                                The abstract should be within 150-250 words with no undefined abbreviations or references.                                <br/><br/>
                            </div>
                            <div style={{fontWeight:"bold"}}>
                                06		Keywords
                                <br/><br/>
                            </div>
                            <div>
                                Provide 4-6 keywords that should be included at the end of the abstract.
                                <br/><br/>
                            </div>
                            <div style={{fontWeight:"bold"}}>
                                07		Text Formatting
                                <br/><br/>
                            </div>
                            <div>
                                All manuscripts should be saved in .docx, .doc or .rtf formats.
                                <br/><br/>
                            </div>
                            {/*==========*/}
                            <div style={{paddingLeft:10}}>
                                <div style={{fontWeight:"bold"}}>
                                    7.1		General guidelines
                                    <br/><br/>
                                </div>
                                <div>
                                    <ul>
                                        <li>Main Document should not include author(s) name(s) or affiliation(s)</li>
                                       <li>Text should be double-spaced </li>
                                        <li>Use italics for emphasis </li>
                                        <li>Automatic section numbering and page numbering should be used</li>
                                        <li>Use 3" margins on all sides of the paper</li>
                                        <li>Paper size should be 210mm x 297mm (A4)</li>
                                    </ul>
                                </div>
                                <div style={{fontWeight:"bold"}}>
                                    7.2		Fonts
                                    <br/><br/>
                                </div>
                                <div style={{paddingLeft:35}}>
                                    English - Times New Roman<br/>
                                    Sinhala - FmAbhaya<br/>
                                    Tamil - Bamini<br/>
                                    Hindi - Kruti<br/>
                                    Japanese – MS Gothic<br/>
                                    Chinese - SimSun<br/>
                                    German - Times New Roman<br/><br/>

                                </div>
                                <div style={{fontWeight:"bold"}}>
                                    7.3		Tables
                                    <br/><br/>
                                </div>
                                <div>
                                    <ul>
                                        <li>Each table should be in a separate page</li>
                                        <li>Table Captions should be in Arabic numerals</li>
                                        <li>Original sources of tables should be given in the form of reference at the end of captions </li>
                                    </ul>
                                </div>
                                <div style={{fontWeight:"bold"}}>
                                    7.4		Figures
                                    <br/><br/>
                                </div>
                                <div>
                                    <ul>
                                        <li>Each figure should be captioned using Arabic numerals</li>
                                        <li>Author should ensure the accuracy of captions</li>
                                        <li>Original sources of figures should be given in the form of reference at the end of captions </li>
                                    </ul>
                                </div>
                                <div style={{fontWeight:"bold"}}>
                                    7.5		Acronyms and Initialisms
                                    <br/><br/>
                                </div>
                                <div>
                                    Acronyms and initialisms should be elucidated in their first appearance except in cases where a particular acronym or initialism is widely known (ie. UNESCO, JPEG).                                     <br/><br/>
                                </div>
                                <div style={{fontWeight:"bold"}}>
                                    7.6		Transcription
                                    <br/><br/>
                                </div>
                                <div>
                                    For Romanization of East Asian characters authors should use pinyin for Chinese and Hepburn for Japanese.
                                    <br/><br/>
                                    For other languages including English, Sinhala, Tamil, German and Hindi, IPA transcription should be used.
                                </div>
                                <div style={{fontWeight:"bold"}}>
                                    7.7		Language Editing
                                    <br/><br/>
                                </div>
                                <div>
                                    All manuscripts submitted should be prepared in publishable language ensuring that the content of the work is comprehensible to the editors and reviewers. Sri Lanka Journal of Humanities and Language Studies is not responsible for translation, transcription or major language editing. Authors are advised to resort to language editing services of their respective languages where they feel less assured about their academic register.
                                    <br/><br/>
                                </div>
                                <div style={{fontWeight:"bold"}}>
                                    7.8		References
                                    <br/><br/>
                                </div>
                                <div>
                                    Authors should follow the APA reference style for English, Sinhala, Tamil, German, Hindi and Japanese. For Chinese, authors should follow Standard Chinese Reference Style.                                    <br/><br/>
                                </div>
                                <div style={{fontWeight:"bold"}}>
                                    7.9		Artworks and Illustrations
                                    <br/><br/>
                                </div>
                                <div>
                                    Images and Resolution: Images should be in commonly used formats such as .JPEG and image size and resolution should be suitable for publishing in the journal.
                                    <br/><br/>
                                    Color: Color of images including their background should not be distorted and relevant content clearly visible
                                    <br/><br/>
                                    Fonts: Font type and size used in artworks should not be too distinct from fonts in the manuscript.
                                    <br/><br/>
                                    * Authors should obtain permissions from copyright owners of images and illustrations where necessary and author shall be responsible for any issues arising from such infringement.
                                    <br/><br/>
                                </div>
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
