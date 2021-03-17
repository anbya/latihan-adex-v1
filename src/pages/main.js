import React, { Component } from 'react';
import {
    Button,
    Container,
    Row,
    Col,
    InputGroup,
    FormControl,
    label,
} from 'react-bootstrap'

class main extends Component {
    render() {
        return (
           <Container style={{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh",width:"100vw"}}>
               <div style={{width:"80%"}}>
                <Row>
                    <Col md={12} style={{display:"flex",justifyContent:"center",alignItems:"center",textAlign:"center"}}>
                        <div>
                            <span className="header_login">Daftar Dulu Bang</span>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div>
                          <InputGroup size="md" className="mb-12" style={{width:"100%"}}>
                              <InputGroup.Prepend>
                              <InputGroup.Text id="inputGroup-sizing-sm">Nama Depan
                              </InputGroup.Text>
                              </InputGroup.Prepend>
                              <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" placeholder="enter your firstname" />
                          </InputGroup>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col >
                        <div>
                        <InputGroup size="md" className="mb-12"  style={{width:"100%"}}>
                              <InputGroup.Prepend>
                              <InputGroup.Text id="belakang">Nama Belakang
                              </InputGroup.Text>
                              </InputGroup.Prepend>
                              <FormControl aria-label="Small" aria-describedby="belakang" placeholder="enter your lastname" />
                          </InputGroup>
                        </div>
                    </Col>
                </Row>
               </div>
           </Container>
            
        );
    }
}

export default main;