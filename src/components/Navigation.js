import { Component } from "react";
import './Navigation.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button } from "react-bootstrap";

export class Navigation extends Component{
  render(){
      return( 
                   
          <Navbar className="nav" bg="primary" variant="dark">
              <Container>
                  <Nav className="me-auto">
                  <Nav.Link className="n" href="/" >RIDE</Nav.Link>
                  <Nav.Link href="/aperson"><Button>Registration</Button></Nav.Link>
                  <Nav.Link href="/login"> <Button>Login</Button></Nav.Link>
                  <Nav.Link href="/bookingride"> <Button>Booking Ride</Button></Nav.Link>
                  <Nav.Link href="/feedbacks"> <Button>Give Your FeedBack</Button></Nav.Link>
                  <Nav.Link href="/viewfeedback" className="m"><Button>View</Button></Nav.Link>
                  </Nav>
              </Container>                
          </Navbar>            
      )
  }
}
