import React, {Component} from 'react';
import {Container, Row, Col} from "reactstrap";
import {Button} from "react-bootstrap";
import Carousel from '../components/homeCarousel.component'


export default class HeaderComponent extends Component {
    render() {

        return (

            <>
                <div style={{position:'relative',backgroundImage: `url("assets/img/header2.jpg")` }}>
                    {/*<div style={{position:"fixed"}}>*/}
                        {/*<div style={{width:'100%',height:'1000px',opacity:0.5}}>*/}
                        {/*    <img style={{zIndex:3}} src="assets/img/header1.jpg"></img>*/}
                        {/*</div>*/}
                    {/*</div>*/}
                    <div style={{width:'100%'}}>
                        <Row>
                            <Col md="5" xs="12" style={{alignItems:"center", padding:100}}>
                                <Carousel/>
                            </Col>
                            <Col md="7" xs="12" style={{alignItems:'center',alignContent:'center',justifyContent:"center",display:'flex'}}>
                                <div style={{fontSize:60,fontWeight:'bold',color:'#686868',alignItems:'center'}}>
                                    Sri Lanka Journal of Humanities and Language Studies
                                </div>
                            </Col>
                        </Row>

                    </div>
                </div>

            </>



        );
    }
}
