import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

const Hello = (props) => {
    return (
       <>

  <Navbar bg="primary" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Liro</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    </Container>
  </Navbar>

  <br />       
           <h1>Hello {props.value}</h1>
           <Button variant="success">Success</Button>{' '}

       </> 
    );
}
export default Hello;