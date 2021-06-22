import Nav_bar from "../components/nav-bar";
import Carousel_PayedPost from "../components/carousel/carousel-home";
import Carousel_Items from "../carousel-items";
import Footer from "../components/footer";
import Card from "react-bootstrap/Card";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import Home_css from "../styles/Home.module.css";
export default function Home_Page() {
  return (
    <div>
      <Nav_bar />
      <div className={Home_css.box}>
        <div style={{ margin: "3rem" }}>
          <Jumbotron>
            <h1>Sell Now!</h1>
            <p>
              <Button variant="primary">Sell</Button>
            </p>
          </Jumbotron>
        </div>
        <Card className="text-center" style={{ margin: "4rem" }}>
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
        <Card className="text-center" style={{ margin: "4rem" }}>
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
