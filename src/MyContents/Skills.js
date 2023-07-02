import React from 'react'
// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './Skills.css';
import 'animate.css';                                                                                                                                                                         
import image1 from '../images/i1.png'
import image2 from '../images/i2.png'
import image3 from '../images/i3.png'
import image4 from '../images/i4.png'
import image5 from '../images/i5.png'
import image6 from '../images/i6.png'
import ProgressBar from 'react-bootstrap/ProgressBar';
export const Skills = () => {
  const now1 = 80;
  const now2 = 90;
  const now3 = 75;
  const now4 = 80;
  const now5 = 60;
  const now6 = 60;

  const arr1=['C Language']
  return (
    <div className='container fade-in-down' style={{ marginTop: '60px' }}>
      <h1 id='text1'>Ski<span id='text2'>lls</span></h1>
      <Row xs={1} md={3} className="g-4">
        {Array.from({ length: 1 }).map((_, idx) => (
          <Col className='wow animate__animated animate__slideInLeft'>
            <Card className='card1'>
              <Card.Img variant="top" src={image1} className="image11 mx-auto" />
              {
                arr1.map((v,i)=>{
                  return <div>
              <Card.Body>
                <Card.Title key={i}>{v}</Card.Title>
                <Card.Text>
                  <br /><br />
                  <ProgressBar animated now={80} className="w-80" now1={now1} label={`${now1}%`} /><br />
                  <Row>
                    <Col xs={6} md={4}></Col>
                    <Col xs={6} md={4}><button className='text-white button2'>Read More</button></Col>
                    <Col xs={6} md={4}></Col>
                  </Row>
                </Card.Text>
              </Card.Body>
              </div>
              })}
            </Card>
          </Col>
        ))}

        {Array.from({ length: 1 }).map((_, idx) => (
          <Col className='wow animate__animated animate__slideInDown'>
            <Card className='card2'>
              <Card.Img variant="top" src={image2} className="image2 mx-auto" />
              <Card.Body>
                <Card.Title>HTML</Card.Title>
                <Card.Text>
                  <br /><br />
                  <ProgressBar animated now={90} className="w-20" variant="danger" now2={now2} label={`${now2}%`} /><br />
                  <Row>
                    <Col xs={6} md={4}></Col>
                    <Col xs={6} md={4}><button className='text-white button2'>Read More</button></Col>
                    <Col xs={6} md={4}></Col>
                  </Row>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}

        {Array.from({ length: 1 }).map((_, idx) => (
          <Col className='wow animate__animated animate__slideInRight'>
            <Card className='card3'>
              <Card.Img variant="top" src={image3} className="image3 mx-auto" />
              <Card.Body>
                <Card.Title>CSS</Card.Title>
                <Card.Text>
                  <br /><br />
                  <ProgressBar animated now={75} now3={now3} label={`${now3}%`} /><br />
                  <Row>
                    <Col xs={6} md={4}></Col>
                    <Col xs={6} md={4}><button className='text-white button2'>Read More</button></Col>
                    <Col xs={6} md={4}></Col>
                  </Row>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}


        {Array.from({ length: 1 }).map((_, idx) => (
          <Col className='wow animate__animated animate__slideInLeft'>
            <Card className='card4' >
              <Card.Img variant="top" src={image4} className="image4 mx-auto" />
              <Card.Body>
                <Card.Title>Java</Card.Title>
                <Card.Text>
                  <br /><br />
                  <ProgressBar animated now={80} variant="warning" now4={now4} label={`${now4}%`} /><br />
                  <Row>
                    <Col xs={6} md={4}></Col>
                    <Col xs={6} md={4}><button className='text-white button2'>Read More</button></Col>
                    <Col xs={6} md={4}></Col>
                  </Row>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}


        {Array.from({ length: 1 }).map((_, idx) => (
          <Col className='wow animate__animated animate__slideInUp'>
            <Card className='card5'>
              <Card.Img variant="top" src={image5} className="image5 mx-auto" />
              <Card.Body>
                <Card.Title>React</Card.Title>
                <Card.Text>
                  <br /><br />
                  <ProgressBar animated now={60} variant="info" now5={now5} label={`${now5}%`} /><br />
                  <Row>
                    <Col xs={6} md={4}></Col>
                    <Col xs={6} md={4}><button className='text-white button2'>Read More</button></Col>
                    <Col xs={6} md={4}></Col>
                  </Row>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}


        {Array.from({ length: 1 }).map((_, idx) => (
          <Col className='wow animate__animated animate__slideInRight'>
            <Card className='card6'>
              <Card.Img variant="top" src={image6} className="image6 mx-auto" />
              <Card.Body>
                <Card.Title>JS</Card.Title>
                <Card.Text>
                  <br /><br />
                  <ProgressBar animated now={60} variant="warning" now6={now6} label={`${now6}%`} /><br />
                  <Row>
                    <Col xs={6} md={4}></Col>
                    <Col xs={6} md={4}><button className='text-white button2'>Read More</button></Col>
                    <Col xs={6} md={4}></Col>
                  </Row>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <br /><br /><br /><br /><br /><br />
    </div>


  );

}
