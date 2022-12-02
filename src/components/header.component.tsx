import React, {Component} from 'react';
import {Container, Row, Col} from "reactstrap";
import {Button} from "react-bootstrap";
import Carousel from '../components/homeCarousel.component'


export default class HeaderComponent extends Component {
    render() {

        return (

            <>
                <div style={{position:'relative'}}>
                    <div style={{position:"fixed"}}>
                        <div style={{width:'100%',height:'1000px',opacity:0.5}}>
                            <img style={{zIndex:3}} src="assets/img/header1.jpg"></img>
                        </div>
                    </div>
                    <div style={{width:'100%'}}>
                        <Row>
                            <Col md="6" xs="12" style={{alignItems:"center", padding:100}}>
                                <Carousel/>
                            </Col>
                            <Col md="6" xs="12">
                                <div style={{fontSize:90,fontWeight:'bold',padding:100,color:'black',fontFamily:'Itim'}}>
                                    Advances In Technology
                                </div>
                            </Col>
                        </Row>

                    </div>
                </div>

            </>



        );
    }
}
