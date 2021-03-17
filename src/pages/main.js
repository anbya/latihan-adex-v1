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
    constructor(props) {
      super(props);
      this.state = {
          nama:"",
          hasil:1,
          array:[]
      };
    }
    tampilkanPesan = () =>{
        alert("hohohoooo")
        this.setState({
            ...this.state,
            nama:"hohohooo"
        })
    }
    tambah = () =>{
        let angkaAwal = this.state.hasil
        let arrayAwal = this.state.array
        arrayAwal.push(angkaAwal)
        let hasil = angkaAwal + 1
        this.setState({
            ...this.state,
            hasil:hasil,
            array:arrayAwal
        })
    }
    ambil = () =>{
        let angkaAwal = this.state.hasil
        let arrayAwal = this.state.array
        let hasil = angkaAwal - 1
        if(angkaAwal>0){
            arrayAwal.pop()
            this.setState({
                hasil:hasil,
                array:arrayAwal
            })
        }
    }
    render() {
        return (
           <Container style={{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh",width:"100vw"}}>
               <div style={{width:"80%"}}>
                <Row>
                    <Col md={12} style={{display:"flex",justifyContent:"center",alignItems:"center",textAlign:"center"}}>
                        <div>
                            <span className="header_login">{this.state.hasil}</span>
                        </div>
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    <Col md={2} style={{display:"flex",justifyContent:"center",alignItems:"center",textAlign:"center"}}>
                        <Button variant='danger' onClick={() =>{this.ambil()}}>-</Button>
                    </Col>
                    <Col md={2} style={{display:"flex",justifyContent:"center",alignItems:"center",textAlign:"center"}}>
                        <Button variant='danger' onClick={() =>{this.tambah()}}>+</Button>
                    </Col>
                </Row>
                <Row>
                    <Col md={12} style={{display:"flex",justifyContent:"center",alignItems:"center",textAlign:"center"}}>
                        <div>
                            <span className="header_login">Daftar Dulu Bang</span>
                        </div>
                    </Col>
                </Row>
                {this.state.array.length > 0 && this.state.array.map((array,index) =>
                    <Row key={index}>
                        <Col>
                            <div>
                            <InputGroup size="md" className="mb-12" style={{width:"100%"}}>
                                <InputGroup.Prepend>
                                <InputGroup.Text id="inputGroup-sizing-sm">Nama Depan
                                </InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" placeholder="enter your firstname" value={this.state.nama} />
                            </InputGroup>
                            </div>
                        </Col>
                    </Row>
                )}
                {/* <Row>
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
                </Row> */}
                <Row>
                    <Col >
                        <Button variant='danger' onClick={() =>{this.tampilkanPesan()}}>Submit</Button>
                    </Col>
                </Row>
               </div>
           </Container>
            
        );
    }
}

export default main;