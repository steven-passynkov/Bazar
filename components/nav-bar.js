import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import FormControl from "react-bootstrap/FormControl";
import Card from "react-bootstrap/Card";
import InputGroup from "react-bootstrap/InputGroup";
import { useRef, useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import { useMediaQuery } from "react-responsive";
import { AiOutlineSearch, AiOutlineArrowDown } from "react-icons/ai";
import { VscAccount } from "react-icons/vsc";
import Dropdown from "react-bootstrap/Dropdown";
import { UserContext } from "./UserContext";
import styles from "../styles/navbar.module.css";
import React from "react";
import Image from "next/image";
import Bazar_image from "../public/Bazar_all_white.png";

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

  const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <a
      href=""
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
      onHover={(e) => {
        e.preventDefault();
        onHover(e);
      }}
    >
      <AiOutlineArrowDown className={styles.Downarrow} />
    </a>
  ));

  const CustomToggle2 = React.forwardRef(({ children, onClick }, ref) => (
    <a
      href=""
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
    >
      <VscAccount className={styles.Account} />
    </a>
  ));

  if (false) {
    return (
      <div>
        <Desktop>
          <Card
            className={styles.abovenavbar}
            style={{ background: "#00008b" }}
          />
          <div
            style={{ background: "#00008b" }}
            classname={styles.navbar_brand}
          >
            <Navbar expand="lg">
              <Nav fluid>
                <Navbar.Brand href="/.." variant="light">
                  <Image src={Bazar_image} alt="Bazar" width={50} height={50} />
                </Navbar.Brand>
                <div>
                  <FormControl
                    className={styles.Search}
                    placeholder="What do you want"
                    aria-label="What do you want"
                    aria-describedby="basic-addon2"
                    onSubmit={handleSubmit}
                    ref={titleRef}
                  />
                  <Button
                    variant="light"
                    className={styles.searchb}
                    onClick={handleSubmit}
                  >
                    <AiOutlineSearch />
                  </Button>

                  <Button
                    variant="light"
                    className="sellbtn"
                    href={"../post-ad/new-ad"}
                  >
                    Sell
                    <img src="" />
                  </Button>
                  <Dropdown className={styles.customdropdown}>
                    <Dropdown.Toggle
                      as={CustomToggle}
                      id="dropdown-custom-components"
                    ></Dropdown.Toggle>
                    <Dropdown.Menu className={styles.DropdownMenu1}>
                      <Dropdown.Item>Profile</Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item>Blue</Dropdown.Item>
                      <Dropdown.Item>Orange</Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item className="logout" href="../page/logout">
                        Logout
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>

                  <Dropdown className={styles.customdropdown2}>
                    <Dropdown.Toggle
                      as={CustomToggle2}
                      id="dropdown-custom-components"
                    ></Dropdown.Toggle>
                    <Dropdown.Menu className={styles.DropdownMenu}>
                      <Dropdown.Item>Profile </Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item>Blue</Dropdown.Item>
                      <Dropdown.Item>Orange</Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item
                        className={styles.logout}
                        href="../page/logout"
                      >
                        Logout{" "}
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </Nav>
            </Navbar>
          </div>
        </Desktop>

        <Tablet>
          <Card className="abovenavbar" style={{ background: "#00008b" }} />
          <div
            style={{ background: "#00008b" }}
            classname={styles.navbar_brand}
          >
            <Navbar expand="lg">
              <Nav fluid>
                <Navbar.Brand href="/.." variant="light">
                  <div>
                    <Image
                      src={Bazar_image}
                      alt="Bazar"
                      width={50}
                      height={50}
                    />
                  </div>
                </Navbar.Brand>
                <div>
                  <FormControl
                    className={styles.Search}
                    placeholder="What do you want"
                    aria-label="What do you want"
                    aria-describedby="basic-addon2"
                    onSubmit={handleSubmit}
                    ref={titleRef}
                  />

                  <Button
                    variant="light"
                    className={styles.searchb}
                    onClick={handleSubmit}
                  >
                    <AiOutlineSearch />
                  </Button>

                  <Button
                    variant="light"
                    className={styles.sellbtn}
                    href={"../post-ad/new-ad"}
                  >
                    Sell
                    <img src="" />
                  </Button>
                  <Button variant="link" href="../page/logout">
                    Logout
                  </Button>
                </div>
              </Nav>
            </Navbar>
          </div>
        </Tablet>

        <Mobile>
          <Card
            className={styles.abovenavbar}
            style={{ background: "#00008b" }}
          />
          <div
            style={{ background: "#00008b" }}
            classname={styles.navbar_brand}
          >
            <Navbar expand="lg">
              <Nav fluid>
                <Navbar.Brand href="/.." variant="light">
                  <div className={styles.logo}>
                    <Image
                      src={Bazar_image}
                      alt="Bazar"
                      width={50}
                      height={50}
                    />
                  </div>
                </Navbar.Brand>
                <div>
                  <Button variant="light" className={styles.sellbtn}>
                    Sell
                    <img src="" />
                  </Button>
                  <Button
                    variant="link"
                    href="../page/logout"
                    className={styles.login}
                  >
                    Logout
                  </Button>
                </div>
                <div>
                  <FormControl
                    className={styles.Search}
                    placeholder="What do you want"
                    aria-label="What do you want"
                    aria-describedby="basic-addon2"
                    onSubmit={handleSubmit}
                    ref={titleRef}
                  />
                  <Button
                    variant="light"
                    className={styles.searchb}
                    onClick={handleSubmit}
                  >
                    <AiOutlineSearch />
                  </Button>
                </div>
              </Nav>
            </Navbar>
          </div>
        </Mobile>
      </div>
    );
  } else {
    return (
      <div style={{ background: "#00008b" }} classname={styles.navbar_brand}>
        <Desktop>
          <Card
            className={styles.abovenavbar}
            style={{ background: "#00008b" }}
          />
          <div
            style={{ background: "#00008b" }}
            classname={styles.navbar_brand}
          >
            <Navbar expand="lg">
              <Nav fluid>
                <Navbar.Brand href="/.." variant="light">
                  <div className={styles.logo}>
                    <Image
                      src={Bazar_image}
                      alt="Bazar"
                      width={50}
                      height={50}
                    />
                  </div>
                </Navbar.Brand>
                <div>
                  <FormControl
                    className={styles.Search}
                    placeholder="What do you want"
                    aria-label="What do you want"
                    aria-describedby="basic-addon2"
                    onSubmit={handleSubmit}
                    ref={titleRef}
                  />
                  <Button
                    variant="light"
                    className={styles.searchb}
                    onClick={handleSubmit}
                  >
                    <AiOutlineSearch />
                  </Button>

                  <Button
                    variant="light"
                    className={styles.sellbtn}
                    href={"../post-ad/new-ad"}
                  >
                    Sell
                    <img src="" />
                  </Button>
                  <Button
                    variant="link"
                    href="../pages/signin"
                    className={styles.login}
                  >
                    Login
                  </Button>
                  <Button
                    variant="link"
                    href="../pages/signup"
                    className={styles.SignUp}
                  >
                    Sign Up
                  </Button>
                </div>
              </Nav>
            </Navbar>
          </div>
        </Desktop>

        <Tablet>
          <Card
            className={styles.abovenavbar}
            style={{ background: "#00008b" }}
          />
          <div
            style={{ background: "#00008b" }}
            classname={styles.navbar_brand}
          >
            <Navbar expand="lg">
              <Nav fluid>
                <Navbar.Brand href="/.." variant="light">
                <div className={styles.logo}>
                    <Image
                      src={Bazar_image}
                      alt="Bazar"
                      width={50}
                      height={50}
                    />
                  </div>
                </Navbar.Brand>
                <div>
                  <FormControl
                    className={styles.Search}
                    placeholder="What do you want"
                    aria-label="What do you want"
                    aria-describedby="basic-addon2"
                    onSubmit={handleSubmit}
                  />

                  <Button
                    variant="light"
                    className={styles.searchb}
                    onClick={handleSubmit}
                  >
                    <AiOutlineSearch />
                  </Button>

                  <Button
                    variant="light"
                    className={styles.sellbtn}
                    href={"../post-ad/new-ad"}
                  >
                    Sell
                    <img src="" />
                  </Button>
                  <Button
                    variant="link"
                    href="../pages/signin"
                    className={styles.login}
                  >
                    Login
                  </Button>

                  <Button
                    variant="link"
                    href="../pages/signup"
                    className={styles.SignUp}
                  >
                    Sign Up
                  </Button>
                </div>
              </Nav>
            </Navbar>
          </div>
        </Tablet>

        <Mobile>
          <Card
            className={styles.abovenavbar}
            style={{ background: "#00008b" }}
          />
          <div
            style={{ background: "#00008b" }}
            classname={styles.navbar_brand}
          >
            <Navbar expand="lg">
              <Nav fluid>
                <Navbar.Brand href="/.." variant="light">
                <div className={styles.logo}>
                    <Image
                      src={Bazar_image}
                      alt="Bazar"
                      width={50}
                      height={50}
                    />
                  </div>
                </Navbar.Brand>
                <div>
                  <Button variant="light" className={styles.sellbtn}>
                    Sell
                    <img src="" />
                  </Button>
                </div>
                <div>
                  <FormControl
                    className={styles.Search}
                    placeholder="What do you want"
                    aria-label="What do you want"
                    aria-describedby="basic-addon2"
                    onSubmit={handleSubmit}
                    ref={titleRef}
                  />

                  <Button
                    variant="light"
                    className={styles.searchb}
                    onClick={handleSubmit}
                  >
                    <AiOutlineSearch />
                  </Button>

                  <Button
                    variant="link"
                    href="../pages/signin"
                    className={styles.login}
                  >
                    Login
                  </Button>

                  <Button
                    variant="link"
                    href="../pages/signup"
                    className={styles.SignUp}
                  >
                    Sign Up
                  </Button>
                </div>
              </Nav>
            </Navbar>
          </div>
        </Mobile>
      </div>
    );
  }
}
