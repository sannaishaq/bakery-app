import { Navbar, Nav, Container, NavDropdown  } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'

function Navigation() {

  return (
      <>
     <div className="nav">
         <Navbar collapseOnSelect fixed= 'top' expand= 'sm' bg='light' variant='light'>
                    <Navbar.Brand href='/'>
                    <img src={'https://res.cloudinary.com/djbbs3mk3/image/upload/v1652196868/Cakes/ZAKS_JPEG_FILE_RGB_a1uce2.jpg'} alt='bakery logo' width="300px" height="55px" />{' '}
                    </Navbar.Brand>
            <Container>
                <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                <Navbar.Collapse id='responsive-navbar-nav'>
                    <Nav>
                        <Nav.Link href='/'>Home</Nav.Link> 
                        <Nav.Link href='/about'>About</Nav.Link> 
                        <Nav.Link href='/contactus'>Contact Us</Nav.Link>
                        <Nav.Link href='/placeorder'>Place An Order</Nav.Link>  
                        <NavDropdown title="Products">
                            <NavDropdown.Item href="/customcakes">Custom Cakes</NavDropdown.Item>
                            <NavDropdown.Item href="/cupcakes">Cupcakes</NavDropdown.Item>
                            <NavDropdown.Item href="/treatboxes">Treat Boxes</NavDropdown.Item>
                            <NavDropdown.Item href="/dessertshooters">Dessert Shooters</NavDropdown.Item>
                            <NavDropdown.Item href="/products">View All Products</NavDropdown.Item>
                        </NavDropdown>                
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar> 
     </div>
    </>
  )


}

export default Navigation