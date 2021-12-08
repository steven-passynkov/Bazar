import Carousel from "react-multi-carousel";
import Card from "react-bootstrap/Card";
import "react-multi-carousel/lib/styles.css";
import Item from "./carousel-item";
import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";
import styles from "../../styles/carousel.module.css";
import Button from "react-bootstrap/Button";

export default function Carousel_PayedPost({
  numberItemsDesktop,
  numberItemsTable,
  numberItemsMobile,
  items,
  item_id,
  onClick,
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

  const CustomLeftArrow = ({ onClick }) => (
    <i onClick={() => onClick()} className={styles.customLeftArrow} />
  );
  const CustomRightArrow = ({ onClick }) => {
    return <i className={styles.customRightArrow} onClick={() => onClick()} />;
  };

  const CustomDot = ({ index, onClick, active }) => {
    if (active == true) {
      return (
        <Card>
          <Button
            variant="secondary"
            onClick={(e) => {
              onClick();
              e.preventDefault();
            }}
          >
            {index+1}
          </Button>
        </Card>
      );
    } else {
      return (
        <Card>
          <Button
            onClick={(e) => {
              onClick();
              e.preventDefault();
            }}
          >
            {index+1}
          </Button>
        </Card>
      );
    }
  };
  return (
    <div>
      <Carousel
        swipeable={true}
        draggable={false}
        showDots={true}
        customDot={<CustomDot />}
        customLeftArrow={<CustomLeftArrow />}
        customRightArrow={<CustomRightArrow />}
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
          <div
            id={el.id}
            className={styles.image}
          >
            <InnerImageZoom
              src="https://cdn.discordapp.com/attachments/814969775264497726/917498128574337044/375px-NarutoBorutoMovie.png"
              zoomSrc="https://cdn.discordapp.com/attachments/814969775264497726/917498128574337044/375px-NarutoBorutoMovie.png"
              zoomPreload="true"
              width="500"
              height="500"
              hideHint="true"
              zoomType="hover"
              zoomScale="3.5"
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
}
