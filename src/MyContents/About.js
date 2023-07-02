import React from 'react'
import './About.css';
import image7 from '../images/i7.jpg'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'animate.css';

export const About = () => {
    return (
        <Container>
            <Row className='row1'>
                <Col className='wow animate__animated animate__slideInLeft'>
                    <div className='container offset-1'>
                        <img
                            className="d-block self"
                            src={image7}
                            alt="First slide"
                        />
                    </div>
                </Col>
                <Col className='wow animate__animated animate__slideInRight slide'>
                    <h1 className='aboutme'>About Me</h1>
                    <h3 id='text3'>Developer <span id='text4'>And Designer</span></h3>
                    <p>
                        I am a Computer Science Student at R. C. Patel Institute Of Technology, Shirpur. I enjoy problem-solving and coding. Always strive to bring 100% to the work I do. I have worked on technologies like C, C++, Java, MySQL, MongoDB, HTML5, CSS, Reactjs during my bachelor's. I am passionate about developing complex applications that solve real-world problems impacting millions of users.
                        <br></br><br></br>
                        <b style={{color:"purple"}}>Languages:</b> Java, JavaScript, C, C++, HTML/CSS <br></br><hr style={{color:"purple"}}></hr>
                        <b style={{color:"purple"}}>Databases:</b> MySQL, MongoDB   <br></br><hr style={{color:"purple"}}></hr>                
                        <b style={{color:"purple"}}>Frameworks:</b> Node.js, Bootstrap, Reactjs<br></br><hr style={{color:"purple"}}></hr>
                       {/* <br></br> */}
                        Looking for an opportunity to work in a challenging position combining my skills in Software Engineering, which provides professional development, interesting experiences and personal growth.
                    </p>

                    <Row>
                        <Col xs={4} md={3}>
                            <button className='text-white button10'>Download CV</button>
                        </Col>
                    </Row>

                </Col>
            </Row>
        </Container>

    )
}
