import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import FormControl from "react-bootstrap/FormControl";
import Card from "react-bootstrap/Card";
import InputGroup from "react-bootstrap/InputGroup";
import { useRef} from "react";
import { useRouter } from "next/router";
import { useMediaQuery } from "react-responsive";

export default function Nav_bar({user}) {
  const titleRef = useRef(null);
  const router = useRouter();

  const handleSubmit = (event) => {
    const value = titleRef.current.value;
    event.preventDefault();
    event.stopPropagation();
    router.push(`/search/${value}`);
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
                  <InputGroup className="searchbar">
                    <FormControl
                      placeholder="What do you want"
                      aria-label="What do you want"
                      aria-describedby="basic-addon2"
                      onSubmit={handleSubmit}
                      ref={titleRef}
                    />
                    <InputGroup.Append>
                      <Button
                        variant="light"
                        className="searchb"
                        onClick={handleSubmit}
                      >
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
                    <Button
                      variant="light"
                      className="sellbtn"
                      href={"../post-ad/new-ad"}
                    >
                      Sell
                      <img src="" />
                    </Button>
                    <Button href="/api/logout">Logout</Button>
                  </InputGroup>
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
                  <Button href="/api/logout">Logout</Button>
                </div>
                <div>
                  <InputGroup className="searchbar">
                    <FormControl
                      placeholder="What do you want"
                      aria-label="What do you want"
                      aria-describedby="basic-addon2"
                      onSubmit={handleSubmit}
                      ref={titleRef}
                    />
                    <InputGroup.Append>
                      <Button
                        variant="light"
                        className="searchb"
                        onClick={handleSubmit}
                      >
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
                  <InputGroup className="searchbar">
                    <FormControl
                      placeholder="What do you want"
                      aria-label="What do you want"
                      aria-describedby="basic-addon2"
                      onSubmit={handleSubmit}
                      ref={titleRef}
                    />
                    <InputGroup.Append>
                      <Button
                        variant="light"
                        className="searchb"
                        onClick={handleSubmit}
                      >
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
                    <Button
                      variant="light"
                      className="sellbtn"
                      href={"../post-ad/new-ad"}
                    >
                      Sell
                      <img src="" />
                    </Button>
                    <Button href="/signin">Login</Button>
                  </InputGroup>
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
                  <Button href="/signin">Login</Button>
                </div>
                <div>
                <InputGroup className="searchbar">
                    <FormControl
                      placeholder="What do you want"
                      aria-label="What do you want"
                      aria-describedby="basic-addon2"
                      onSubmit={handleSubmit}
                      ref={titleRef}
                    />
                    <InputGroup.Append>
                      <Button
                        variant="light"
                        className="searchb"
                        onClick={handleSubmit}
                      >
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
