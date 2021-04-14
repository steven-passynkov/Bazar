import Card from "react-bootstrap/Card";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";

export default function Footer() {
  return (
    <Card>
      <Box>
        <h1 style={{ color: "white", textAlign: "center", marginTop: "-50px" }}>
          Bazar
        </h1>
        <Container>
          <Row>
            <Column>
              <Heading>About Us</Heading>
              <FooterLink href="#">Somthing</FooterLink>
              <FooterLink href="#">Somthing</FooterLink>
              <FooterLink href="#">Somthing</FooterLink>
            </Column>
            <Column>
              <Heading>Services</Heading>
              <FooterLink href="#">Somthing</FooterLink>
              <FooterLink href="#">Somthing</FooterLink>
              <FooterLink href="#">Somthing</FooterLink>
              <FooterLink href="#">Somthing</FooterLink>
            </Column>
            <Column>
              <Heading>Contact Us</Heading>
              <FooterLink href="#">Somthing</FooterLink>
              <FooterLink href="#">Somthing</FooterLink>
              <FooterLink href="#">Somthing</FooterLink>
              <FooterLink href="#">Somthing</FooterLink>
            </Column>
            <Column>
              <Heading>Social Media</Heading>
              <FooterLink href="#">
                <i className="fab fa-facebook-f">
                  <span style={{ marginLeft: "10px" }}>Facebook</span>
                </i>
              </FooterLink>
              <FooterLink href="#">
                <i className="fab fa-instagram">
                  <span style={{ marginLeft: "10px" }}>Instagram</span>
                </i>
              </FooterLink>
              <FooterLink href="#">
                <i className="fab fa-twitter">
                  <span style={{ marginLeft: "10px" }}>Twitter</span>
                </i>
              </FooterLink>
              <FooterLink href="#">
                <i className="fab fa-youtube">
                  <span style={{ marginLeft: "10px" }}>Youtube</span>
                </i>
              </FooterLink>
            </Column>
          </Row>
        </Container>
      </Box>
    </Card>
  );
}
