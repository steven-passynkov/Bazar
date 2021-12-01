import Carousel from "react-multi-carousel";
import Card from "react-bootstrap/Card";
import "react-multi-carousel/lib/styles.css";
import Item from "./carousel-item";

export default function Carousel_PayedPost({
  numberItemsDesktop,
  numberItemsTable,
  numberItemsMobile,
  items,
  item_id,
  onClick
}) {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: numberItemsDesktop,
      slidesToSlide: numberItemsDesktop,
      partialVisibilityGutter: 40,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: numberItemsTable,
      slidesToSlide: numberItemsTable,
      partialVisibilityGutter: 30,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: numberItemsMobile,
      slidesToSlide: numberItemsMobile,
      partialVisibilityGutter: 30,
    },
  };

  return (
    <div>
      <Carousel
        swipeable={true}
        draggable={false}
        showDots={true}
        responsive={responsive}
        ssr={true}
        infinite={true}
        keyBoardControl={true}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        customTransition="ease-in-out"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {items.map((el) => (
          <div>
          <Card variant="light" id={el.id}>
            <Card.Img variant="top" src="" />
            <Card.Body onClick={onClick} >
              <Card.Title>
                <Item>{el.name}</Item>
              </Card.Title>
              <Card.Text>Text</Card.Text>
            </Card.Body>
          </Card>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
