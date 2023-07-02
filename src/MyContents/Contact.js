import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Contact.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import 'animate.css';
import { MdCall } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";


export const Contact = () => {
  return (
    <div className='wow animate__animated animate__flipInX'>
      <div className='container contact2'>
        <Form className='contact1 mx-auto'><h1 className='head'>Contact <span style={{ color: 'purple' }}>Me</span></h1><br />
          {/* <Row>
            <Col>
              <MdCall className='icon' style={{ color: 'purple', fontSize: '22px' }} ></MdCall>

               <input className='pass' placeholder=" First name" />
            </Col>
            <Col>

              <input className='pass' placeholder=" Last name" />
            </Col>
          </Row> */}

          <div class="container">
            <div class="row justify-content-md-center">
              <div class="col col-lg-2">
                <MdCall className='icon' style={{ color: 'purple', fontSize: '22px' }} ></MdCall>
              </div>
              <div class="col-md-3 link1">
                +91 7775042542
              </div>
              <div class="col col-lg-2">

              </div>
            </div>
          </div>

          <br></br>
          {/* <Row>
            <Col>
              <MdEmail className='icon' style={{ color: 'purple', fontSize: '22px' }} >+91 7775042542</MdEmail>

              <input className='pass' placeholder=" First name" />
            </Col>
            <Col>

               <input className='pass' placeholder=" Last name" />
            </Col>
          </Row> */}

          <div class="container">
            <div class="row justify-content-md-center">
              <div class="col col-lg-2">
                <MdEmail className='icon' style={{ color: 'purple', fontSize: '22px' }} ></MdEmail>
              </div>
              <div class="col-md-3 link1">
                &nbsp;parthrane7227@gmail.com
              </div>
              <div class="col col-lg-2">

              </div>
            </div>
          </div>
          <br></br>
          {/*<Row>
             <Col>
              <FaGithub className='icon' style={{ color: 'purple', fontSize: '22px' }} >+91 7775042542</FaGithub>

               <input className='pass' placeholder=" First name" /> 
            </Col>
            <Col>

               <input className='pass' placeholder=" Last name" /> 
            </Col>
          </Row> */}

          <div class="container">
            <div class="row justify-content-md-center">
              <div class="col col-lg-2">
                <FaGithub className='icon' style={{ color: 'purple', fontSize: '22px' }} ></FaGithub>
              </div>
              <div class="col-md-3">
               <a className='link' href='https://github.com/parth-rane-7227'>parth-rane-7227</a>
              </div>
              <div class="col col-lg-2">

              </div>
            </div>
          </div>

          <br></br>

          {/* <Row>
            <Col>
              <FaTwitter className='icon' style={{ color: 'purple', fontSize: '22px' }} >+91 7775042542</FaTwitter>

               <input className='pass' placeholder=" First name" /> 
            </Col>
            <Col>

               <input className='pass' placeholder=" Last name" /> 
            </Col>
          </Row> */}

          <div class="container">
            <div class="row justify-content-md-center">
              <div class="col col-lg-1">
                <FaTwitter className='icon' style={{ color: 'purple', fontSize: '22px' }} ></FaTwitter>
              </div>
              <div class="col-md-3">
              <a className='link' href='https://twitter.com/Parth4342'>&nbsp;&nbsp;&nbsp;@Parth4342</a>
              </div>
              <div class="col col-lg-2">

              </div>
            </div>
          </div>

          <br></br>
          {/* <Row>
            <Col>
              <BsLinkedin className='icon' style={{ color: 'purple', fontSize: '22px' }} >+91 7775042542</BsLinkedin>

              <input className='pass' placeholder=" First name" />
            </Col>
            <Col>

              <input className='pass' placeholder=" Last name" />
            </Col>
          </Row> */}

          <div class="container">
            <div class="row justify-content-md-center">
              <div class="col col-lg-2">
              <BsLinkedin className='icon' style={{ color: 'purple', fontSize: '22px' }} ></BsLinkedin>
              </div>
              <div class="col-md-3">
              <a className='link'href='https://www.linkedin.com/in/parth-rane-8004b2206'>parth-rane-7227</a>
              </div>
              <div class="col col-lg-2">

              </div>
            </div>
          </div>















          {/* <Form.Group className="mb-3 email1" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <MdEmail className='icon' style={{ color: 'purple', fontSize: '22px' }} >+91 7775042542</MdEmail>
            <input className='pass' type="email" placeholder=" Enter email" />
          </Form.Group>

          <Form.Group className="mb-3 email1" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <input className='pass' type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder=" Enter mobile number" required />
          </Form.Group>

          <Form.Group className="mb-3 email" controlId="formBasicPassword">
            /* <Form.Label>Password</Form.Label>
            <textarea className='pass' type="text" placeholder=" Own Message" />
          </Form.Group>
          <Button className='text-white form4'>Submit</Button> */}
        </Form>
      </div>
    </div>
  )
}
