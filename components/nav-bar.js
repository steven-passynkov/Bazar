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
import { AiOutlineSearch } from "react-icons/ai";


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
          <Card className="abovenavbar" style={{ background: "#00008b" }} />
          <div>
            <Navbar expand="lg">
              <Nav fluid>
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
                        variant="light"
                        className="searchb"
                        onClick={handleSubmit}
                        
                      >
                       < AiOutlineSearch />
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
                    <Button variant="link" href="api/auth/logout">Logout</Button>
                </div>
              </Nav>
            </Navbar>
          </div>
        </Desktop>
        
        <Tablet>
          <Card className="abovenavbar" style={{ background: "#00008b" }} />
          <div>
            <Navbar expand="lg" >
              <Nav fluid >
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
                        variant="light"
                        className="searchb"
                        onClick={handleSubmit}
                        
                      >
                       < AiOutlineSearch />
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
                    <Button variant="link" href="api/auth/logout">Logout</Button>
                </div>
              </Nav>
            </Navbar>
          </div>
          </Tablet>

        <Mobile>
          <Card className="abovenavbar" style={{ background: "#00008b" }} />
          <div>
            <Navbar expand="lg" >
              <Nav fluid >
                <Navbar.Brand href="/.." variant="light">
                  Bozar
                </Navbar.Brand>
                <div>
                  <Button variant="light" className="sellbtn">
                    Sell
                    <img src="" />
                  </Button>
                  <Button variant="link" href="api/auth/logout" className="login" >Logout</Button>
                </div>
                <div>
                  
                    <FormControl
                      className="Search"
                      placeholder="What do you want"
                      aria-label="What do you want"
                      aria-describedby="basic-addon2"
                    />
                      <Button
                        variant="light"
                        className="searchb"
                        onClick={handleSubmit}
                        
                      >
                       < AiOutlineSearch />
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
          <Card className="abovenavbar" style={{ background: "#00008b" }} />
          <div>
            <Navbar expand="lg">
              <Nav  fluid>
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
                        variant="light"
                        className="searchb"
                        onClick={handleSubmit}
                        
                      >
                       < AiOutlineSearch />
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
                    <Button variant="link" href="api/auth/login" className="login">Login</Button>
                    <p className="Or">or</p>
                    <Button variant="link" href="api/auth/login" className="SignUp">Sign Up</Button>

                  
                </div>
              </Nav>
            </Navbar>
          </div>
        </Desktop>

        <Tablet>
          <Card  className="abovenavbar" style={{ background: "#00008b" }} />
          <div>
            <Navbar expand="lg">
              <Nav fluid >
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
                        variant="light"
                        className="searchb"
                        onClick={handleSubmit}
                        
                      >
                       < AiOutlineSearch />
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
                    <Button variant="link" href="api/auth/login" className="login">Login</Button>
                    <p className="Or">or</p>
                    <Button variant="link" href="api/auth/login" className="SignUp">Sign Up</Button>
                </div>
              </Nav>
            </Navbar>
          </div>
          </Tablet>

        <Mobile>
          <Card className="abovenavbar"style={{ background: "#00008b" }} />
          <div>
            <Navbar expand="lg" >
              <Nav fluid >
                <Navbar.Brand href="/.." variant="light">
                  Bozar
                </Navbar.Brand>
                <div>
                  <Button variant="light" className="sellbtn">
                    Sell
                    <img src="" />
                  </Button>
                 
                </div>
                <div>
                  
                    <FormControl
                      className="Search"
                      placeholder="What do you want"
                      aria-label="What do you want"
                      aria-describedby="basic-addon2"
                    />
                  
                  <Button
                        variant="light"
                        className="searchb"
                        onClick={handleSubmit}
                        
                      >
                       < AiOutlineSearch />
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

                    <Button variant="link" href="api/auth/login" className="login">Login</Button>
                    <p className="Or">or</p>
                    <Button variant="link" href="api/auth/login" className="SignUp">Sign Up</Button>

                </div>
              </Nav>
            </Navbar>
          </div>
        </Mobile>
      </div>
    );
  }
}
