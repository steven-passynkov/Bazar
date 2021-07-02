import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import FormControl from "react-bootstrap/FormControl";
import Card from "react-bootstrap/Card";
import InputGroup from "react-bootstrap/InputGroup";
import { useRef, useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useMediaQuery } from "react-responsive";
import { useUser } from "@auth0/nextjs-auth0";
import { FaBeer} from "react-icons/fa";

export default function Nav_bar() {
  const titleRef = useRef(0);
  const router = useRouter();
  const { user } = useUser();

  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    router.push(`/search/${titleRef.current}`);
  };

  const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 992 });
    return isDesktop ? children : null;
  };
  const Tablet = ({ children }) => {
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });
    return isTablet ? children : null;
  };
  const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 767 });
    return isMobile ? children : null;
  };

  if (user) {
    return (
      <div>
        <Desktop>
          <Card style={{ background: "#00008b" }} />
          <div>
            <Navbar expand="lg" className="justify-content-between">
              <Nav className="mr-auto">
                <Navbar.Brand href="/.." variant="light">
                  Bozar
                </Navbar.Brand>
                <div>
                  
                    <FormControl
                      className="Search"
                      placeholder="What do you want"
                      aria-label="What do you want"
                      aria-describedby="basic-addon2"
                      onSubmit={handleSubmit}
                    />
                    
                      <Button
                        className="searchb"
                        onClick={handleSubmit}
                      >
                        <FaBeer size={30} />
                       </Button>
                      
                    
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
                    <Button
                      variant="light"
                      className="sellbtn"
                      href={"../post-ad/new-ad"}
                    >
                      Sell
                      <img src="" />
                    </Button>
                    <Button href="api/auth/logout">Logout</Button>
                </div>
              </Nav>
            </Navbar>
          </div>
        </Desktop>
        <Mobile>
          <Card style={{ background: "#00008b" }} />
          <div>
            <Navbar expand="lg" className="justify-content-between">
              <Nav className="mr-auto">
                <Navbar.Brand href="/.." variant="light">
                  Bozar
                </Navbar.Brand>
                <div>
                  <Button variant="light" className="sellbtn">
                    Sell
                    <img src="" />
                  </Button>
                  <Button href="api/auth/logout">Logout</Button>
                </div>
                <div>
                  <InputGroup className="searchbar">
                    <FormControl
                      placeholder="What do you want"
                      aria-label="What do you want"
                      aria-describedby="basic-addon2"
                    />
                    <InputGroup.Append>
                      <Button variant="light" className="searchb"                       
                        className="searchb"
                        onClick={handleSubmit}
                      >
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
                  </InputGroup>
                </div>
              </Nav>
            </Navbar>
          </div>
        </Mobile>
      </div>
    );
  } else {
    return (
      <div>
        <Desktop>
          <Card style={{ background: "#00008b" }} />
          <div>
            <Navbar expand="lg" className="justify-content-between">
              <Nav className="mr-auto">
                <Navbar.Brand href="/.." variant="light">
                  Bozar
                </Navbar.Brand>
                <div>
                  
                    <FormControl
                      className="searchbar"
                      placeholder="What do you want"
                      aria-label="What do you want"
                      aria-describedby="basic-addon2"
                      onSubmit={handleSubmit}
                    />
                      <Button
                        variant="light"
                        className="searchb"
                        onClick={handleSubmit}
                      >
                        <img src="./public/search-outline.svg"></img>
                      </Button>
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
                    <Button
                      variant="light"
                      className="sellbtn"
                      href={"../post-ad/new-ad"}
                    >
                      Sell
                      <img src="" />
                    </Button>
                    <Button href="api/auth/login">Login</Button>
                  
                </div>
              </Nav>
            </Navbar>
          </div>
        </Desktop>
        <Mobile>
          <Card style={{ background: "#00008b" }} />
          <div>
            <Navbar expand="lg" className="justify-content-between">
              <Nav className="mr-auto">
                <Navbar.Brand href="/.." variant="light">
                  Bozar
                </Navbar.Brand>
                <div>
                  <Button variant="light" className="sellbtn">
                    Sell
                    <img src="" />
                  </Button>
                  <Button href="api/auth/login">Login</Button>
                </div>
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
                  </InputGroup>
                </div>
              </Nav>
            </Navbar>
          </div>
        </Mobile>
      </div>
    );
  }
}
