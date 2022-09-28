import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function Navbar1(props){

return(

<Navbar bg={`${props.mode}`}  expand={`lg text-${props.oppmode}`}>
      <Container>
        <Navbar.Brand href="#home" className={`text-${props.oppmode}`}>{props.title}</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#" className={`text-${props.oppmode}`}>Home</Nav.Link>
            <Nav.Link href="#" className={`text-${props.oppmode}`}>Link</Nav.Link>

          </Nav>
          <div className="form-check form-switch">
          <input className="form-check-input" type="checkbox" role="switch" aria-checked="true" id="flexSwitchCheckDefault" onClick={props.togglemode}/>
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
);

}

export default Navbar1;