import styles from "../../styles/productpage.module.css";
import Carousel from "../../components/carousel/carousel-ad";
import Carousel_Items from "../../carousel-items.json";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axiosInstance from "../../http/httpInstance";
import Card from "react-bootstrap/Card";
import Link from "next/link";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Head from "next/head";
import FsLightbox from "fslightbox-react";
import Row from "react-bootstrap/Row"

export default function Product_page({ supabase }) {
  const router = useRouter();
  const { product } = router.query;

  const [toggler, setToggler] = useState(false);

  const [alert, setAlert] = useState(true);
  const [value, setValue] = useState(null);

  const [loading, setLoadingData] = useState(true);
  const [name, setName] = useState([]);
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
          setName(response.data.data.myuser);
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

  return (
    <div>
      {loading == false ? (
        <div>
          <Container fluid>
            <div className={styles.Breadcrumb}>
              <Breadcrumb>
                <Breadcrumb.Item href="../../">Home</Breadcrumb.Item>
                <Breadcrumb.Item href="#">Region: {}</Breadcrumb.Item>
                <Breadcrumb.Item href="#">Category: {}</Breadcrumb.Item>
                <Breadcrumb.Item active>Id: {id}</Breadcrumb.Item>
              </Breadcrumb>
            </div>
          </Container>
          <Container styles={{width:"30%"}}>
            <Row>
            <Carousel
              className={styles.Product_car}
              numberItemsDesktop={1}
              numberItemsTable={1}
              numberItemsMobile={1}
              items={Carousel_Items.auto_items}
              onClick={() => setToggler(!toggler)}
            />
            </Row>
          </Container>
          <div>
            <FsLightbox
              toggler={toggler}
              sources={[
                "//placekitten.com/1500/500",
                "//placekitten.com/4000/3000",
                "//placekitten.com/800/1200",
                "//placekitten.com/1500/1500",
              ]}
            />
          </div>
          <div>
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
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary" onClick={onConfirm}>
                  Confirm
                </Button>
              </Modal.Footer>
            </Modal>
          </div>

          <div>
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
                I will not close if you click outside me. Don't even try to
                press escape key.
              </Modal.Body>
              <Modal.Footer>
                <Button variant="primary" onClick={handleMessageClose}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>
          </div>

          <div className={styles.div_price}>
            <h3 className={styles.Price}>Price: ${price}</h3>
          </div>

          <h5 className={styles.product_title}> {title}</h5>

          <Card className={styles.sellerinfo} style={{ width: "18rem" }}>
            Seller Name:{" "}
            <Link href="#">
              <a>{name}</a>
            </Link>
          </Card>

          <Button className={styles.offerbtn} onClick={handleShow}>
            Make offer
          </Button>
          <Button className={styles.messagebtn} onClick={handleMessageShow}>
            Contact seller
          </Button>
          <Card className={styles.description}>
            <Card.Body>{description}</Card.Body>
          </Card>

          <Card className={styles.item_info}>
            <Card.Body>{info}</Card.Body>
          </Card>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
