import Carousel_PayedPost from "../components/carousel/carousel-home";
import Carousel_Items from "../carousel-items";
import Card from "react-bootstrap/Card";
import Home_css from "../styles/Home.module.css";

export default function Home_Page() {
  return (
    <div>
      <div className={Home_css.box}>
        <Card className="Carousel">
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
        <Card className="Carousel">
          <Card.Header style={{ color: "#00008b" }}>
            <strong>Auto</strong>
          </Card.Header>
          <Card.Body>
            <Carousel_PayedPost
              numberItemsDesktop={3}
              numberItemsTable={2}
              numberItemsMobile={1}
              items={Carousel_Items.auto_items}
            />
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
