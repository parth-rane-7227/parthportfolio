import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.css'
import './Footer.css';
import { BsLinkedin } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsWhatsapp} from "react-icons/bs";
import { BsTwitter} from "react-icons/bs";
import { Col } from 'react-bootstrap';



export const Footer = () => {
    return (
      <div>
        <Container>
          <Navbar className="footer" expand="lg" variant="dark" style={{backgroundColor:'black'}}>
            <Container>
             
              <Navbar.Brand href="#" className='offset-4 footer1 mx-auto'>&copy; All Rights Reserved 2022-23 |  Designed by Parth Rane. 
              <Row>
                <Col style={{marginTop:'5px'}}>
              <BsLinkedin href="https://www.linkedin.com/in/parth-rane-8004b2206" className='icon' style={{color:'purple',fontSize:'22px'}}/>
                &ensp;&ensp;
              <BsInstagram  className='icon' style={{color:'purple',fontSize:'22px'}}/>
                &ensp;&ensp;
              <BsWhatsapp  className='icon' style={{color:'purple',fontSize:'22px'}}/>
                &ensp;&ensp;
              <BsTwitter   className='icon' style={{color:'purple',fontSize:'22px'}}/>
              </Col>
              </Row>
              </Navbar.Brand>
            </Container>
          </Navbar>
        </Container>

      </div>
      );
}