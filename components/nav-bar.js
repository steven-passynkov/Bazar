import Head from "next/head";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import FormControl from "react-bootstrap/FormControl";
import Card from "react-bootstrap/Card";

export default function Nav_bar() {
  return (
    <div>
    <Card style={{background: "#00008b"}}/>
    <Navbar expand="lg" className="justify-content-between">
      <Nav className="mr-auto">
        <Navbar.Brand href="/.." variant="light">
          Bozar
        </Navbar.Brand>

        <Form inline className="mr-sm-2">
          <FormControl
            htmlSize={100}
            type="text"
            placeholder="What are you looking for?"
            className="mr-sm-2"
          />
          <Button variant="light">Search</Button>
        </Form>

        <NavDropdown title="Categories" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Something</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Something</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        </NavDropdown>
      </Nav>

      <Button variant="light">
        Sell
        <img src="" />
      </Button>
    </Navbar>
    </div>
  );
}
