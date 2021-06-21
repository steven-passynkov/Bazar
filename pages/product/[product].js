import Nav_bar from "../../components/nav-bar";
import Footer from "../../components/footer";
import Product_CSS from "../../styles/product-page.module.css";
import Carousel from "../../components/carousel/carousel-paidAds";
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
import Toast from "react-bootstrap/Toast";
import FsLightbox from "fslightbox-react";
import Spinner from "../../components/spinner";

export default function Product_page() {
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
  const [showToast, setShowToast] = useState(false);
  const handleClose = () => setShowModel(false);
  const handleShow = () => setShowModel(true);

  const [handleMessage, setHandleMessage] = useState(false);
  const handleMessageClose = () => setHandleMessage(false);
  const handleMessageShow = () => setHandleMessage(true);

  const onConfirm = () => {
    setShowModel(false);
    setShowToast(true);
  };

  let finalApiRoute = `${`/api/product`}?id=${product}`;

  useEffect(()=> {
    if(value === null) {
      return;
    }
    if (value === '') {
      setAlert(true);
    } else {
      setAlert(false);
    }
  }, [value]);

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

  return (
    <div>
      <Head>
        <title>Bazar</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {loading == false ? (
        <div>
          <Nav_bar />
          <Container fluid>
            <div className={Product_CSS.Breadcrumb}>
              <Breadcrumb>
                <Breadcrumb.Item href="../../">Home</Breadcrumb.Item>
                <Breadcrumb.Item href="#">Region: {}</Breadcrumb.Item>
                <Breadcrumb.Item href="#">Category: {}</Breadcrumb.Item>
                <Breadcrumb.Item active>Id: {id}</Breadcrumb.Item>
              </Breadcrumb>
            </div>
          </Container>

          <Card className="text-center" >
            <Card.Body>
              <Carousel
                className="Product_car"
                numberItemsDesktop={1}
                numberItemsTable={1}
                numberItemsMobile={1}
                items={Carousel_Items.auto_items}
                onClick={() => setToggler(!toggler)}
              />
            </Card.Body>
          </Card>

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

          <div className="div_price">
            <h3 className="Price">Price: ${price}</h3>
          </div>

          <h5 className="product_title"> {title}</h5>

          <Card className="sellerinfo" style={{ width: "18rem" }}>
            Seller Name:{" "}
            <Link href="#">
              <a>{name}</a>
            </Link>
          </Card>

          <Button className="offerbtn" onClick={handleShow}>
            Make offer
          </Button>
          <Button className="messagebtn" onClick={handleMessageShow}>
            Contact seller
          </Button>
       
          <Card className="description" >
            <Card.Body>{description}</Card.Body>
          </Card>

          <Card className="item_info" >
            <Card.Body>{info}</Card.Body>
          </Card>

          <div>
            <Toast
              onClose={() => setShowToast(false)}
              show={showToast}
              delay={10000}
              autohide
            >
              <Toast.Header>
                <img
                  src="holder.js/20x20?text=%20"
                  className="rounded mr-2"
                  alt=""
                />
                <strong className="mr-auto">Bootstrap</strong>
              </Toast.Header>
              <Toast.Body>
                Woohoo, you're reading this text in a Toast!
              </Toast.Body>
            </Toast>
          </div>

          <Footer />
        </div>
      ) : (
        <div className="text-center">
          <Spinner />
        </div>
      )}
    </div>
  );
}
