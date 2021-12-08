import styles from "../../styles/productpage.module.css";
import Carousel from "../../components/carousel/carousel-ad";
import Carousel_Items from "../../carousel-items.json";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import axiosInstance from "../../http/httpInstance";
import { useMediaQuery } from "react-responsive";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";

export default function Product_page({ supabase }) {
  const router = useRouter();
  const { product } = router.query;

  const [toggler, setToggler] = useState(true);

  const [loading, setLoadingData] = useState(false);
  const [name, setName] = useState();
  const [id, setId] = useState();
  const [price, setPrice] = useState();
  const [title, setTitle] = useState();
  const [info, setInfo] = useState();
  const [description, setDescription] = useState();

  const data = async () => {
    const idpruduct = await supabase.from("pruduct").select("*");
    console.log(idpruduct);
  };

  let finalApiRoute = `${`/api/product`}?id=${product}`;

  useEffect(() => {
    if (product) {
      data();
      axiosInstance
        .get(finalApiRoute)
        .then((response) => {
          setLoadingData(false);
          setName(response.data.data.name);
          setId(response.data.data.id);
          setPrice(response.data.data.price);
          setTitle(response.data.data.title);
          setInfo(response.data.data.info);
          setDescription(response.data.data.description);
        })
        .catch((error) => {
          console.error(error);
          setLoadingData(false);
        });
    }
  }, [product]);

  const Destop = ({ children }) => {
    const isTablet = useMediaQuery({ minWidth: 1000 });
    return isTablet ? children : null;
  };

  const Mobile = ({ children }) => {
    const isTablet = useMediaQuery({ maxWidth: 999 });
    return isTablet ? children : null;
  };

  return (
    <>
      <Destop>
        <Container fluid>
          <Col>
            <Breadcrumb>
              <Breadcrumb.Item href="../../">Home</Breadcrumb.Item>
              <Breadcrumb.Item href="#">Region: {}</Breadcrumb.Item>
              <Breadcrumb.Item href="#">Category: {}</Breadcrumb.Item>
              <Breadcrumb.Item active>Id: {id}</Breadcrumb.Item>
            </Breadcrumb>
          </Col>

          <Row style={{ marginLeft: "2.5%", marginRight: "5%" }}>
            <Col xs={8}>
              <Carousel
                className={styles.Product_car}
                numberItemsDesktop={1}
                numberItemsTable={1}
                numberItemsMobile={1}
                items={Carousel_Items.trending_items}
              />
            </Col>
            <Col>
              <h1 styles={{ textColor: "#00008b" }}>{title}</h1>
              <Card>
                <Card.Header>
                  <h3>Price ${price}</h3>
                </Card.Header>
                <Card.Body>
                  Seller Name:{" "}
                  <Card.Link href={`/user/${name}`}>{name}</Card.Link>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col>
              <Card
                style={{
                  marginLeft: "3.2%",
                  marginRight: "36.5%",
                  marginTop: "2%",
                  marginBottom: "5%",
                }}
              >
                <Card.Header>Description</Card.Header>
                <Card.Body>{description}</Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </Destop>

      <Mobile>
        <Container fluid>
          <Col>
            <Breadcrumb>
              <Breadcrumb.Item href="../../">Home</Breadcrumb.Item>
              <Breadcrumb.Item href="#">Region: {}</Breadcrumb.Item>
              <Breadcrumb.Item href="#">Category: {}</Breadcrumb.Item>
              <Breadcrumb.Item active>Id: {id}</Breadcrumb.Item>
            </Breadcrumb>
          </Col>
          <Col>
            <h1>Price ${price}</h1>
          </Col>

          <Col>
            <Carousel
              className={styles.Product_car}
              numberItemsDesktop={1}
              numberItemsTable={1}
              numberItemsMobile={1}
              items={Carousel_Items.trending_items}
            />
          </Col>

          <Row>
            <Col>
              <Card
                style={{
                  marginTop: "5%",
                  marginBottom: "3%",
                }}
              >
                <Card.Header>{title}</Card.Header>
                <Card.Body>
                  Seller Name:{" "}
                  <Card.Link>
                    <Link href={`/user/${name}`}>{name}</Link>
                  </Card.Link>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col>
              <Card
                style={{
                  marginTop: "3%",
                  marginBottom: "3%",
                }}
              >
                <Card.Header>Description</Card.Header>
                <Card.Body>{description}</Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </Mobile>
    </>
  );
}
