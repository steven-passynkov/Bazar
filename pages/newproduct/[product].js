import styles from "../../styles/productpage.module.css";
import Carousel from "../../components/carousel/carousel-ad";
import Carousel_Items from "../../carousel-items.json";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import axiosInstance from "../../http/httpInstance";
import FsLightbox from "fslightbox-react";
import { useMediaQuery } from "react-responsive";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";

export default function Product_page({ supabase }) {
  const router = useRouter();
  const { product } = router.query;

  const [toggler, setToggler] = useState(false);

  const [alert, setAlert] = useState(true);
  const [value, setValue] = useState(null);

  const [loading, setLoadingData] = useState(true);
  const [name, setName] = useState();
  const [id, setId] = useState();
  const [price, setPrice] = useState();
  const [title, setTitle] = useState();
  const [info, setInfo] = useState();
  const [description, setDescription] = useState();

  const [showModel, setShowModel] = useState(false);
  const handleClose = () => setShowModel(false);
  const handleShow = () => setShowModel(true);

  const [handleMessage, setHandleMessage] = useState(false);
  const handleMessageClose = () => setHandleMessage(false);
  const handleMessageShow = () => setHandleMessage(true);

  const onConfirm = () => {
    setShowModel(false);
  };

  const data = async () => {
    const idpruduct = await supabase.from("pruduct").select("*");
    console.log(idpruduct);
  };

  let finalApiRoute = `${`/api/product`}?id=${product}`;

  useEffect(() => {
    if (value === null) {
      return;
    }
    if (value === "") {
      setAlert(true);
    } else {
      setAlert(false);
    }
  }, [value]);

  useEffect(() => {
    if (product) {
      axiosInstance
        .get(finalApiRoute)
        .then((response) => {
          data();
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
            <Col xs={{ order: "first" }} xs={8}>
              <Carousel
                className={styles.Product_car}
                numberItemsDesktop={1}
                numberItemsTable={1}
                numberItemsMobile={1}
                items={Carousel_Items.auto_items}
                onClick={() => setToggler(!toggler)}
              />
            </Col>
            <Col>
              <h1>Price ${price}</h1>
              <Card>
                <Card.Header>{title}</Card.Header>
                <Card.Body>
                  Seller Name:{" "}
                  <Card.Link onClick={handleMessageShow}>{name}</Card.Link>
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
                  marginTop: "1%",
                  marginBottom: "5%",
                }}
              >
                <Card.Header>Description</Card.Header>
                <Card.Body>{description}</Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
        <>
          <FsLightbox
            toggler={toggler}
            sources={[
              "//placekitten.com/1500/500",
              "//placekitten.com/4000/3000",
              "//placekitten.com/800/1200",
              "//placekitten.com/1500/1500",
            ]}
          />
        </>
        <>
          <Modal
            show={showModel}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title>Make offer</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <InputGroup>
                  <InputGroup.Text>$</InputGroup.Text>
                  <>
                    {alert == false ? (
                      <Form.Control
                        type="number"
                        onChange={() => setValue(event.target.value)}
                        required
                        isValid
                      />
                    ) : (
                      <>
                        <Form.Control
                          type="number"
                          onChange={() => setValue(event.target.value)}
                          required
                          isInvalid
                        />
                        <Form.Control.Feedback type="invalid">
                          Please select an amount
                        </Form.Control.Feedback>
                      </>
                    )}
                  </>
                </InputGroup>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="primary" onClick={onConfirm}>
                Confirm
              </Button>
            </Modal.Footer>
          </Modal>
        </>
        <>
          <Modal
            show={handleMessage}
            onHide={handleMessageClose}
            backdrop="static"
            keyboard={false}
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title>Contact {name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              I will not close if you click outside me. Don't even try to press
              escape key.
            </Modal.Body>
          </Modal>
        </>
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
              items={Carousel_Items.auto_items}
              onClick={() => setToggler(!toggler)}
            />
          </Col>

          <Row>
            <Col>
              <Card
                style={{
                  marginTop: "2.5%",
                  marginBottom: "2.5%",
                }}
              >
                <Card.Header>Description</Card.Header>
                <Card.Body>{description}</Card.Body>
              </Card>
            </Col>
          </Row>
          <Col>
            <Col>
              <Card>
                <Card.Header>{title}</Card.Header>
                <Card.Body>
                  Seller Name:{" "}
                  <Card.Link onClick={handleMessageShow}>{name}</Card.Link>
                </Card.Body>
              </Card>
            </Col>
          </Col>
        </Container>
        <>
          <FsLightbox
            toggler={toggler}
            sources={[
              "//placekitten.com/1500/500",
              "//placekitten.com/4000/3000",
              "//placekitten.com/800/1200",
              "//placekitten.com/1500/1500",
            ]}
          />
        </>
        <>
          <Modal
            show={showModel}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title>Make offer</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <InputGroup>
                  <InputGroup.Text>$</InputGroup.Text>
                  <>
                    {alert == false ? (
                      <Form.Control
                        type="number"
                        onChange={() => setValue(event.target.value)}
                        required
                        isValid
                      />
                    ) : (
                      <>
                        <Form.Control
                          type="number"
                          onChange={() => setValue(event.target.value)}
                          required
                          isInvalid
                        />
                        <Form.Control.Feedback type="invalid">
                          Please select an amount
                        </Form.Control.Feedback>
                      </>
                    )}
                  </>
                </InputGroup>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="primary" onClick={onConfirm}>
                Confirm
              </Button>
            </Modal.Footer>
          </Modal>
        </>
        <>
          <Modal
            show={handleMessage}
            onHide={handleMessageClose}
            backdrop="static"
            keyboard={false}
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title>Contact {name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              I will not close if you click outside me. Don't even try to press
              escape key.
            </Modal.Body>
          </Modal>
        </>
      </Mobile>
    </>
  );
}
