import React from 'react'
import './Project.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import p1 from '../images/candidate.png';
import p2 from '../images/inventory.png';
import p3 from '../images/i3.png';
import CardGroup from 'react-bootstrap/CardGroup';
import 'animate.css';
import a1 from 'animate.css/source/sliding_entrances/slideInLeft.css'


export const Project = () => {
  const arr2 = [
    { title: 'Candidate Assessment Tool for HR', text: 'In this web project, admin can add,view and delete HR and after successful login of HR, HR can add,view and delete job and candidate apply for the job and give the test using OCEAN model and there is a specific criteria for shortlisted candidate and respective HR can view their shortlisted candidate', iname: p1, anm: a1 },
    { title: 'Inventory Management', text: 'In this web project,admin can add,view and delete raw material and update quantity(old+new) same for processed item and then user can issued raw material and issued processed items and also show unavailable items and show updation of items.', iname: p2 },
    //{ title: 'sarthak', text: 'Hii', iname: p3 }

  ]
  return (
    <div className='container fade-in-down' style={{ marginBottom: '60px' }}>
      <h1 id='text1'>Proj<span id='text2'>ects</span></h1>

      {/* <Row xs={1} md={3} className="g-4">
        {Array.from({ length: 1 }).map((_, idx) => (
          <Col>
            {
              arr2.map((v, i) => {
                const { title, text, iname } = v
                return <div>

                  <Card className='card1'>
                    <Card.Img className='image1 mx-auto' style={{alignItems:'center'}} src={iname} />
                    <Card.Body>
                      <Card.Title key={i}>{title}</Card.Title>
                      <Card.Text style={{ color: 'black' }}>{text}</Card.Text>
                    </Card.Body>
                  </Card><br /><br /><br /><br /><br /><br />
                </div>
              })
            }
          </Col>
        ))}
      </Row> */



        <CardGroup style={{ marginTop: '30px' }} className='offset-2'>
          {
            arr2.map((v, i) => {
              const { title, text, iname, anm } = v
              return <div style={{ marginRight: '32px', marginBottom: '30px' }}>
                <Card className='card1'>
                  <Card.Img variant="top" className='image1 mx-auto' src={iname} />
                  <Card.Body>
                    <Card.Title >{title}</Card.Title>
                    <Card.Text style={{wordSpacing:'0px'}}>{text}</Card.Text>
                  </Card.Body>
                </Card>
              </div>
            })
          }

          {/* <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card> */}
        </CardGroup>



      }
    </div>

  )
}
