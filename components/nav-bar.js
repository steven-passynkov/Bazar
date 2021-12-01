import { useRef, useContext } from "react";
import { UserContext } from "./UserContext";
import { useRouter } from "next/router";
import Image from "next/image";
import Navbar from "react-bootstrap/Navbar";
import Card from "react-bootstrap/Card";
import Bazar_image from "../public/Bazar.jpg";
import ProfilePic from "../public/Bazar_all_white.png";
import { AiOutlineSearch, AiOutlineArrowDown } from "react-icons/ai";
import { VscAccount } from "react-icons/vsc";
import { IconContext } from "react-icons";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FloatingLable from "react-bootstrap/FloatingLabel";
import FormControl from "react-bootstrap/FormControl";
import Container from "react-bootstrap/Container";
import InputGroup from "react-bootstrap/InputGroup";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import styles from "../styles/navbar.module.css";
import Dropdown from "react-bootstrap/Dropdown";
import React from "react";
import { useMediaQuery } from "react-responsive";

export default function Nav_bar() {
  const titleRef = useRef(null);
  const router = useRouter();

  const user = useContext(UserContext);

  const handleSubmit = (event) => {
    const value = titleRef.current.value;
    event.preventDefault();
    event.stopPropagation();
    router.push(`/search/${value}`);
  };
  const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <a
      href=""
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
    >
      <Button variant="outline-primary" className={styles.Account}>
        My account
      </Button>
    </a>
  ));
  const Destop = ({ children }) => {
    const isTablet = useMediaQuery({ minWidth: 1000 });
    return isTablet ? children : null;
  };

  const Mobile = ({ children }) => {
    const isTablet = useMediaQuery({ maxWidth: 999 });
    return isTablet ? children : null;
  };

  if (false) {
    return (
      <>
        <Destop>
          <div className={styles.Navbar}>
            <Navbar expand="lg" className={styles.NavbarSticky}>
              <Container fluid>
                <Navbar.Brand href="../" style={{marginRight:"0px"}}>
                  <Image src={Bazar_image} alt="Bazar" width={60} height={60} />
                </Navbar.Brand>

                <InputGroup className="justify-content-center">
                  <FloatingLable
                    controlId="floatingInput"
                    label="Search Bazar"
                    style={{ left: "0.1%", width: "75%" }}
                  >
                    <FormControl
                      type="text"
                      onSubmit={handleSubmit}
                      className={styles.SearchBar}
                      ref={titleRef}
                    />
                  </FloatingLable>
                  <Button
                    variant="outline-primary"
                    className={styles.SearchButton}
                    onClick={handleSubmit}
                    id="button-addon1"
                  >
                    <IconContext.Provider value={{ color: "Black" }}>
                      <AiOutlineSearch />
                    </IconContext.Provider>
                  </Button>
                </InputGroup>

                <Nav className="justify-content-left">
                    <Button
                      variant="outline-primary"
                      className={styles.navbarLogin}
                      href="/signin"
                    >
                      Login
                    </Button>
                    <Button
                      variant="outline-primary"
                      className={styles.navbarSignup}
                      href="/signup"
                    >
                      Signup
                    </Button>
                    <Button
                      variant="outline-primary"
                      className={styles.navbarButton}
                      href="/post-ad/new-ad"
                    >
                      Sell
                    </Button>
                </Nav>
              </Container>
            </Navbar>
            <div className={styles.SubNavbar}>
              <Container fluid></Container>
            </div>
          </div>
        </Destop>
        <Mobile>
          <div className={styles.Navbar}>
            <Navbar expand="lg" className={styles.NavbarSticky}>
              <Container fluid>
                <Navbar.Brand href="../" style={{marginRight:"0px"}}>
                  <Image src={Bazar_image} alt="Bazar" width={60} height={60} />
                </Navbar.Brand>

                <Nav className="justify-content-center">
                  <Col>
                    <Button
                      variant="outline-primary"
                      className={styles.navbarLogin}
                      href="/signin"
                    >
                      Login
                    </Button>
                    <Button
                      variant="outline-primary"
                      className={styles.navbarSignup}
                      href="/signup"
                    >
                      Signup
                    </Button>
                    <Button
                      variant="outline-primary"
                      className={styles.navbarButton}
                      href="/post-ad/new-ad"
                    >
                      Sell
                    </Button>
                  </Col>
                </Nav>

                <InputGroup className="justify-content-right">
                  <FloatingLable
                    controlId="floatingInput"
                    label="Search Bazar"
                    style={{ left: "0.1%", width: "75%" }}
                  >
                    <FormControl
                      type="text"
                      onSubmit={handleSubmit}
                      className={styles.SearchBar}
                      ref={titleRef}
                    />
                  </FloatingLable>
                  <Button
                    variant="outline-primary"
                    className={styles.SearchButton}
                    onClick={handleSubmit}
                    id="button-addon1"
                  >
                    <IconContext.Provider value={{ color: "Black" }}>
                      <AiOutlineSearch />
                    </IconContext.Provider>
                  </Button>
                </InputGroup>
              </Container>
            </Navbar>
            <div className={styles.SubNavbar}>
              <Container fluid></Container>
            </div>
          </div>
        </Mobile>
      </>
    );
  } else {
    return (
      <>
        <Destop>
          <div className={styles.Navbar}>
            <Navbar expand="lg" className={styles.NavbarSticky}>
              <Container fluid>
                <Navbar.Brand href="../" style={{marginRight:"0px"}}>
                  <Image src={Bazar_image} alt="Bazar" width={60} height={60} />
                </Navbar.Brand>

                <InputGroup className="justify-content-center">
                  <FloatingLable
                    controlId="floatingInput"
                    label="Search Bazar"
                    style={{ left: "0.1%", width: "75%" }}
                  >
                    <FormControl
                      type="text"
                      onSubmit={handleSubmit}
                      className={styles.SearchBar}
                      ref={titleRef}
                    />
                  </FloatingLable>
                  <Button
                    variant="outline-primary"
                    className={styles.SearchButton}
                    onClick={handleSubmit}
                    id="button-addon1"
                  >
                    <IconContext.Provider value={{ color: "Black" }}>
                      <AiOutlineSearch />
                    </IconContext.Provider>
                  </Button>
                </InputGroup>

                <Nav className="justify-content-left">
                    <Button
                      variant="outline-primary"
                      className={styles.navbarLogin}
                      href="/signin"
                    >
                      Login
                    </Button>
                    <Button
                      variant="outline-primary"
                      className={styles.navbarSignup}
                      href="/signup"
                    >
                      Signup
                    </Button>
                    <Button
                      variant="outline-primary"
                      className={styles.navbarButton}
                      href="/post-ad/new-ad"
                    >
                      Sell
                    </Button>
                </Nav>
              </Container>
            </Navbar>
            <div className={styles.SubNavbar}>
              <Container fluid></Container>
            </div>
          </div>
        </Destop>
        <Mobile>
          <div className={styles.Navbar}>
            <Navbar expand="lg" className={styles.NavbarSticky}>
              <Container fluid>
                <Navbar.Brand href="../" style={{marginRight:"0px"}}>
                  <Image src={Bazar_image} alt="Bazar" width={60} height={60} />
                </Navbar.Brand>

                <Nav className="justify-content-center">
                  <Col>
                    <Button
                      variant="outline-primary"
                      className={styles.navbarLogin}
                      href="/signin"
                    >
                      Login
                    </Button>
                    <Button
                      variant="outline-primary"
                      className={styles.navbarSignup}
                      href="/signup"
                    >
                      Signup
                    </Button>
                    <Button
                      variant="outline-primary"
                      className={styles.navbarButton}
                      href="/post-ad/new-ad"
                    >
                      Sell
                    </Button>
                  </Col>
                </Nav>

                <InputGroup className="justify-content-right">
                  <FloatingLable
                    controlId="floatingInput"
                    label="Search Bazar"
                    style={{ left: "0.1%", width: "75%" }}
                  >
                    <FormControl
                      type="text"
                      onSubmit={handleSubmit}
                      className={styles.SearchBar}
                      ref={titleRef}
                    />
                  </FloatingLable>
                  <Button
                    variant="outline-primary"
                    className={styles.SearchButton}
                    onClick={handleSubmit}
                    id="button-addon1"
                  >
                    <IconContext.Provider value={{ color: "Black" }}>
                      <AiOutlineSearch />
                    </IconContext.Provider>
                  </Button>
                </InputGroup>
              </Container>
            </Navbar>
            <div className={styles.SubNavbar}>
              <Container fluid></Container>
            </div>
          </div>
        </Mobile>
      </>
    );
  }
}
