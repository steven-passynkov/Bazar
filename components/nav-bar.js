import Head from "next/head";
import Link from "next/link";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import FormControl from "react-bootstrap/FormControl";
import Card from "react-bootstrap/Card";
import { useRef } from "react";
import { useRouter } from "next/router";
import InputGroup from "react-bootstrap/InputGroup";

export default function Nav_bar() {
  const titleRef = useRef(0);
  const router = useRouter();

  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    router.push(`/searchpage/${titleRef.current}`);
  };

  return (
    <div>
      <Card style={{ background: "#00008b" }} />
      <Navbar expand="lg" className="justify-content-between">
        <Nav className="mr-auto">
          <Navbar.Brand href="/.." variant="light">
            Bozar
          </Navbar.Brand>

          <Form inline className="mr-sm-2" onSubmit={handleSubmit}>
            <InputGroup className="mb-3" size="lg">
              <FormControl
                htmlSize={100}
                placeholder="What are you looking for?"
                onChange={(event) => (titleRef.current = event.target.value)}
              />
              <InputGroup.Append>
                <Button variant="light" type="submit">
                  Search
                </Button>
              </InputGroup.Append>
            </InputGroup>
          </Form>

          <NavDropdown title="Categories" id="nav-dropdown">
            <NavDropdown.Item eventKey="4.1">Action</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.2">Another action</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.3">
              Something else here
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item>
          </NavDropdown>
        </Nav>

        <Button variant="light" className="sellbtn">
          Sell
          <img src="" />
        </Button>
      </Navbar>
    </div>
  );
}
