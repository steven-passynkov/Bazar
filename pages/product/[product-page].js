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
import { useState } from "react";
import { signIn, useSession } from "next-auth/client";

export default function Product_page() {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [session, loading] = useSession();

  if (loading) {
    return <p>Loading...</p>;
  }

  const images = [
    "//placekitten.com/1500/500",
    "//placekitten.com/4000/3000",
    "//placekitten.com/800/1200",
    "//placekitten.com/1500/1500",
  ];

  return (
    <>
      {session ? (
        <div>
          <Nav_bar />
          <Container fluid>
            <div className={Product_CSS.Breadcrumb}>
              <Breadcrumb>
                <Breadcrumb.Item href="../../">Home</Breadcrumb.Item>
                <Breadcrumb.Item href="#">Region: {}</Breadcrumb.Item>
                <Breadcrumb.Item href="#">Category: {}</Breadcrumb.Item>
                <Breadcrumb.Item active>Id: {}</Breadcrumb.Item>
              </Breadcrumb>
            </div>
          </Container>

          <div>
            <Carousel
              numberItemsDesktop={1}
              numberItemsTable={1}
              numberItemsMobile={1}
              items={Carousel_Items.auto_items}
            />
          </div>

          <div>
            <button type="button" onClick={() => setIsOpen(true)}>
              Open Lightbox
            </button>

            {isOpen && (
              <Lightbox
                mainSrc={images[photoIndex]}
                nextSrc={images[(photoIndex + 1) % images.length]}
                prevSrc={
                  images[(photoIndex + images.length - 1) % images.length]
                }
                onCloseRequest={() => () => setIsOpen(false)}
                onMovePrevRequest={() =>
                  this.setState({
                    photoIndex:
                      (photoIndex + images.length - 1) % images.length,
                  })
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
            <h3>Price: {}</h3>
            <h5>Sellers Name: {}</h5>
            <Button>Make offer</Button>
            <Button>Contact seller</Button>
          </div>

          <Footer />
        </div>
      ) : (
        <p>
          <p>You are not permitted to see this page.</p>
          <button onClick={signIn}>Sign in</button>
        </p>
      )}
    </>
  );
}
