import Head from "next/head";
import Link from "next/link";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import FormControl from "react-bootstrap/FormControl";
import Card from "react-bootstrap/Card";
import InputGroup from "react-bootstrap/InputGroup";
import { useRef } from "react";
import { useRouter } from "next/router";

export default function Nav_bar() {
  const titleRef = useRef(0);
  const router = useRouter();

  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    router.push(`/search/${titleRef.current}`);
  };

  return (
    <div>
      <Card style={{ background: "#00008b" }} />
      <div>
      <Navbar expand="lg" className="justify-content-between">
          <Navbar.Brand href="/.." varia  nt="light">
            Bozar
          </Navbar.Brand>
          <div>
            <InputGroup className="searchbar">
              <FormControl
                placeholder="What do you want"
                aria-label="What do you want"
                aria-describedby="basic-addon2"
              />
              <InputGroup.Append>
                <Button variant="light" className="searchb">
                  Search
                </Button>
              </InputGroup.Append>

              <NavDropdown
                title="Categories"
                id="basic-nav-dropdown"
                className="dropdown"
              >
                <NavDropdown.Item href="#action/3.1">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
              </NavDropdown>

              <Button variant="light" className="sellbtn">
                Sell
                <img src="" />
              </Button>
            </InputGroup>
          </div>
      </Navbar>
      </div>
    </div>
  );
}
