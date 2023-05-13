import React, {Component} from 'react';
import {Col, Container, Row} from "reactstrap";


export default class FooterComponent extends Component {
    render() {

        return (

            <div style={{position: 'relative', bottom: 0, width: '100%'}}>
                <div style={{
                    backgroundColor: '#6d6d6d', padding: 10, marginTop: 1,
                }}>
                    <Row style={{margin: 0}}>
                        <Container style={{paddingLeft: '5%', paddingRight: '15%'}}>
                            <div style={{
                                fontSize: 10,
                                fontWeight: 'bold',
                                color: 'white'
                            }}>
                                @ 2023 Copyright - Sabaragamuwa University of Sri Lanka - All
                                rights recerved
                            </div>
                        </Container>
                    </Row>
                </div>
            </div>

        );
    }
}
