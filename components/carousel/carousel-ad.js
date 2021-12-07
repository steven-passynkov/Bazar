import Carousel from "react-multi-carousel";
import Card from "react-bootstrap/Card";
import "react-multi-carousel/lib/styles.css";
import Item from "./carousel-item";
import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";

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
          <div id={el.id}>
            <Item>
              <InnerImageZoom
                src="https://bazar-steven-passynkov.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fpublic%2FBazar.acffe65b64ebe4647e34e590a181e6b9.jpg&w=64&q=75"
                zoomSrc="https://bazar-steven-passynkov.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fpublic%2FBazar.acffe65b64ebe4647e34e590a181e6b9.jpg&w=64&q=75"
                width="250"
                height="200"
                hideHint="true"
                zoomType="hover"
                zoomScale="10"
              />
            </Item>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
