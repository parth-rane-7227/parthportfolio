import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
// import image7 from '../images/i7.jpg'
// import Card from 'react-bootstrap/Card';
import bg from '../images/bg.png'
import './Home.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'animate.css';

export const Home = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col className='wow animate__animated animate__pulse'>
            <div className='image8'>
              {/* {<Card.Img variant="top" src={image7} className="image7 offset-5"/> } */}
            </div>
            <div style={{ marginTop: '150px' }}>
              <h3 className='container' style={{ color: 'white', textAlign: 'left', marginTop: '100px', fontFamily: 'sans-serif', fontSize: '18px' }}><i>Hello, my name is</i></h3>
              <h1 className='container' style={{ color: 'white', textAlign: 'left', marginTop: '20px', fontFamily: 'sans-serif', fontSize: '100px', fontWeight: '600' }}>Parth<span style={{ color: 'purple' }}>Rane</span></h1>
              <h3 className='container' style={{ color: 'white', textAlign: 'left', marginTop: '20px', fontFamily: 'sans-serif', fontSize: '29px', fontWeight: '600' }}>I am a Web Developer.</h3><br />
              <div className='d-grid gap-2 col-4 ml-auto'>
                <button className='text-white button3'>Get Started</button>
            </div>
            </div>
          </Col>
          <Col>
            <img
              className="d-block self1"
              src={bg} />
          </Col>
        </Row>
      </Container>
    </div>
        )
}
