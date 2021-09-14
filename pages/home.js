import Nav_bar from "../components/nav-bar";
import Carousel_PayedPost from "../components/carousel/carousel-home";
import Carousel_Items from "../carousel-items";
import Footer from "../components/footer";
import Card from "react-bootstrap/Card";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import Home_css from "../styles/Home.module.css";
import Image from "next/image";
import tradingimg from "../public/trading.jpeg";
import Nav from "react-bootstrap/Nav";
import { useState } from "react";

export default function Home_Page() {
  const [tabcontent, setTabContent] = useState(1);

  const handleSelect = (eventKey) => setTabContent(eventKey);

  return (
    <div>
      <Nav_bar />
      <div className={Home_css.box}>
        <div>
          <Image src={tradingimg} width={1200} height={600} />
          <div
            style={{
              marginTop: "-30rem",
              marginLeft: "10rem",
              position: "absolute",
              background: "white",
              width: "20rem",
              height: "20rem",
            }}
          >
            <Card>
              <Card>
                <Nav
                  fill
                  variant="tabs"
                  onSelect={handleSelect}
                  defaultActiveKey="1"
                  style={{ margin: "0.5rem" }}
                >
                  <Nav.Item>
                    <Nav.Link eventKey="1">Buy</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="2">Sell</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Card>
              {tabcontent == 1 ? <div>To buy</div> : <div>To sell</div>}
            </Card>
          </div>
        </div>
        <Card className="text-center" style={{ margin: "3rem" }}>
          <Card.Header style={{ color: "#00008b" }}>
            <strong>Trending</strong>
          </Card.Header>
          <Card.Body>
            <Carousel_PayedPost
              numberItemsDesktop={3}
              numberItemsTable={2}
              numberItemsMobile={1}
              items={Carousel_Items.trending_items}
            />
          </Card.Body>
        </Card>
        <Card className="text-center" style={{ margin: "3rem" }}>
          <Card.Header style={{ color: "#00008b" }}>
            <strong>Auto</strong>
          </Card.Header>
          <Card.Body>
            <Carousel_PayedPost
              numberItemsDesktop={4}
              numberItemsTable={2}
              numberItemsMobile={1}
              items={Carousel_Items.auto_items}
            />
          </Card.Body>
        </Card>
      </div>
      <Footer />
    </div>
  );
}
