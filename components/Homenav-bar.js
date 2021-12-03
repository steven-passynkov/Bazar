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
import styles from "../styles/Home_navbar.module.css";
import Dropdown from "react-bootstrap/Dropdown";
import React from "react";

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

  if (true) {
    return (
      <div className={styles.Navbar}>
        <Navbar expand="lg" sticky="top" className={styles.NavbarSticky}>
          <Container fluid>
            <Navbar.Brand href="../">
              <Image src={Bazar_image} alt="Bazar" width={60} height={60} />
            </Navbar.Brand>

            <Nav className="justify-content-left" style={{flexDirection:"row"}}>
              <Dropdown align="start">
                <Dropdown.Toggle
                  as={CustomToggle}
                  id="dropdown-custom-components"
                ></Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#">Profile </Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item href="#">My Ads</Dropdown.Item>
                  <Dropdown.Item href="#">Messages</Dropdown.Item>
                  <Dropdown.Item href="#">Notifications</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item
                    className={styles.logout}
                    href="../page/logout"
                  >
                    Logout
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

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
          <Container fluid>
            <Row>
              <Navbar.Text className={styles.Header}>
                A community build on sports
              </Navbar.Text>

              <Navbar.Text className={styles.SubHeader}>
                Join a community where you can buy and sell sports equipment
              </Navbar.Text>
            </Row>
            <div className={styles.InputBar}>
              <Row>
                <InputGroup>
                  <FloatingLable
                    controlId="floatingInput"
                    label="Search Bazar"
                    className="mb-3"
                    style={{ left: "0.1%", width: "45%" }}
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
              </Row>
            </div>
          </Container>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#ffffff"
            fill-opacity="10"
            d="M0,160L48,160C96,160,192,160,288,181.3C384,203,480,245,576,234.7C672,224,768,160,864,133.3C960,107,1056,117,1152,138.7C1248,160,1344,192,1392,208L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    );
  } else {
    return (
      <div className={styles.Navbar}>
        <Navbar expand="lg" sticky="top" className={styles.NavbarSticky}>
          <Container fluid>
            <Navbar.Brand href="../">
              <Image src={Bazar_image} alt="Bazar" width={60} height={60} />
            </Navbar.Brand>
            <Nav className="justify-content-left">
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
          </Container>
        </Navbar>
        <div className={styles.SubNavbar}>
          <Container fluid>
            <Row>
              <Navbar.Text className={styles.Header}>
                A community build on sports
              </Navbar.Text>

              <Navbar.Text className={styles.SubHeader}>
                Join a community where you can buy and sell sports equipment
              </Navbar.Text>
            </Row>
            <div className={styles.InputBar}>
              <Row>
                <InputGroup>
                  <FloatingLable
                    controlId="floatingInput"
                    label="Search Bazar"
                    className="mb-3"
                    style={{ left: "0.1%", width: "45%" }}
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
              </Row>
            </div>
          </Container>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#ffffff"
            fill-opacity="10"
            d="M0,160L48,160C96,160,192,160,288,181.3C384,203,480,245,576,234.7C672,224,768,160,864,133.3C960,107,1056,117,1152,138.7C1248,160,1344,192,1392,208L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    );
  }
}
