import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Menu.css';
import { HashRouter,Route,Routes,Navigate } from 'react-router-dom';
import {Home} from '../MyContents/Home';
import { About } from '../MyContents/About';
import { Skills } from '../MyContents/Skills';
import { Contact } from '../MyContents/Contact';
import { Project } from '../MyContents/Project';

export const Menu = () => {
  return (
    <div>
    <Navbar expand="lg" style={{backgroundColor:'black'}}>
      <Container fluid>
        <Navbar.Brand href="#" className='text-white brandnav'>Port<span style={{color:'purple'}}>folio</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 offset-1"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#/Home" className='text-white menu1 offset-3'>Home</Nav.Link>
            <Nav.Link href="#/About" className='text-white menu1 offset-2'>About</Nav.Link>
            <Nav.Link href="#/Skills" className='text-white menu1 offset-2'>Skills</Nav.Link>
            <Nav.Link href="#/Project" className='text-white menu1 offset-2'>Projects</Nav.Link>
            <Nav.Link href="#/Contact" className='text-white menu1 offset-2'>contact</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2 form1"
              aria-label="Search"
            />
            <Button  className='text-white form2'>Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    <HashRouter>
      <Routes>
        <Route path='/Home' element={<Home/>} />
        <Route path='/About' element={<About/>} />
        <Route path='/Skills' element={<Skills/>} />
        <Route path='/Project' element={<Project/>} />
        <Route path='/Contact' element={<Contact/>} />
        <Route path='/' element={<Home/>} />
        <Route path='/*' element={<Navigate to='/Home'/>} />
      </Routes>
    </HashRouter>
    
    </div>
  );   
}
