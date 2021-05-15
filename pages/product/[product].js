import Nav_bar from "../../components/nav-bar";
import Footer from "../../components/footer";
import Product_CSS from "../../styles/product-page.module.css";
import Carousel from "../../components/carousel-paidAds";
import Carousel_Items from "../../carousel-items.json";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import { useState} from "react";
import { useRouter } from "next/router";
import axiosInstance from "../../http/httpInstance";
import Card from "react-bootstrap/Card";
import Link from "next/link";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Head from "next/head";
import Toast from "react-bootstrap/Toast";

export default function Product_page() {
  const router = useRouter();
  const { product } = router.query;

  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

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

  const onConfirm = () => {
   setShowModel(false);
   setShowToast(true);
  }

  const images = [
    "//placekitten.com/1500/500",
    "//placekitten.com/4000/3000",
    "//placekitten.com/800/1200",
    "//placekitten.com/1500/1500",
  ];

  let finalApiRoute = `${`/api/product`}?id=${product}`;

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
    <>
      {loading == false ? (
        <div>
          <Head>
            <title>Bazar</title>
            <meta
              name="viewport"
              content="initial-scale=1.0, width=device-width"
            />
          </Head>
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

          <Card className="text-center" style={{ width: "61rem" }}>
            <Card.Body>
              <Carousel
                className="Product_car"
                numberItemsDesktop={1}
                numberItemsTable={1}
                numberItemsMobile={1}
                items={Carousel_Items.auto_items}
              />
              <button type="button">Open Lightbox</button>
            </Card.Body>
          </Card>

          <div>
            {isOpen && (
              <Lightbox
                mainSrc={images[photoIndex]}
                nextSrc={images[(photoIndex + 1) % images.length]}
                prevSrc={
                  images[(photoIndex + images.length - 1) % images.length]
                }
                onCloseRequest={() => () => setIsOpen(false)}
                onMovePrevRequest={() =>
                  setPhotoIndex(
                    (photoIndex) => (photoIndex - 1) % images.length
                  )
                }
                onMoveNextRequest={() =>
                  setPhotoIndex(
                    (photoIndex) => (photoIndex + 1) % images.length
                  )
                }
              />
            )}
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
                    <Form.Control />
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
            <Toast
              onClose={() => setShowToast(false)}
              show={showToast}
              delay={3000}
              autohide
            >
              <Toast.Header>
                <img
                  src="holder.js/20x20?text=%20"
                  className="rounded mr-2"
                  alt=""
                />
                <strong className="mr-auto">Bootstrap</strong>
                <small>11 mins ago</small>
              </Toast.Header>
              <Toast.Body>
                Woohoo, you're reading this text in a Toast!
              </Toast.Body>
            </Toast>
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
          <Button className="messagebtn">Contact seller</Button>
          <Card className="description" style={{ width: "61rem" }}>
            <Card.Body>{description}</Card.Body>
          </Card>

          <Card className="item_info" style={{ width: "18rem" }}>
            <Card.Body>{info}</Card.Body>
          </Card>
          <Footer />
        </div>
      ) : (
        <div className="text-center">
          <span>Loading...</span>

          <Head>
            <title>Bazar</title>
            <meta
              name="viewport"
              content="initial-scale=1.0, width=device-width"
            />
          </Head>
        </div>
      )}
    </>
  );
}
