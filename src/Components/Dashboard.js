import React from 'react'
import App from '../App'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';
import fire from '../services/firebase'
import ImageUpload from '../ImageUpload'
import { storage, db } from '../services/firebase'



function Dashboard(props) {

    const handleLogout = () => {
        fire.auth().signOut()
    }

    return (
        <div>
            <>
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">Oliver Hunting Club</Navbar.Brand>
    <Nav className="mr-auto">
        <Button onClick={handleLogout}>Sign Out</Button>
      {/* <Nav.Link href="/">Create Post</Nav.Link> */}
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form>
  </Navbar>
  <br />
</>
        <ImageUpload />
            <h1></h1>
            
        </div>
    )
}

export default Dashboard
