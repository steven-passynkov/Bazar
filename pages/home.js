import Nav_bar from "../components/nav-bar";
import Carousel_PayedPost from "../components/carousel-paidAds";
import Carousel_Items from "../carousel-items";
import Footer from "../components/footer";
import Card from "react-bootstrap/Card";

export default function Home_Page() {
  return (
    <div>
      <Nav_bar />
      <Card className="text-center" style={{margin:'4rem'}}>
        <Card.Header style={{color:'#00008b'}}>
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
      <Card className="text-center" style={{margin:'4rem'}}>
        <Card.Header style={{color:'#00008b'}}>
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
      <Footer />
    </div>
  );
}
