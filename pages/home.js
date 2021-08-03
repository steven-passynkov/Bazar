import Nav_bar from "../components/nav-bar";
import Carousel_PayedPost from "../components/carousel/carousel-home";
import Carousel_Items from "../carousel-items";
import Footer from "../components/footer";
import Card from "react-bootstrap/Card";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import Home_css from "../styles/Home.module.css";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Home_Page() {
  const [data, setData] = useState(null);
  /*
  useEffect(() => {
    loadPing();
  }, []);

  const loadPing = async () => {
    const res = await fetch("http://127.0.0.1:5000/ping");
    const data = await res.json();
    setData(data);
  };
*/

  axios({
    method: "get",
    url: "http://127.0.0.1:5000/ping",
  }).then(function (response) {
    setData(response);
  });

  return (
    <div>
      <Nav_bar />
      <div className={Home_css.box}>
        <div className="hometag">
          <Jumbotron >
            <h1>Sell Now! {data ? JSON.stringify(data) : "Loading..."}</h1>
            <p>
              <Button variant="primary">Sell</Button>
            </p>
          </Jumbotron>
        </div>
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
        <Card className="Carousel" >
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
      <Footer />
    </div>
  );
}
