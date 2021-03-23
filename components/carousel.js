import Carousel_Elastic from "react-elastic-carousel";
import Item from "./carousel-item";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

export default function Carousel_PayedPost() {
  return (
    <div>
      <Carousel_Elastic breakPoints={breakPoints}>
        <Item>One</Item>
        <Item>Two</Item>
        <Item>Three</Item>
        <Item>Four</Item>
        <Item>Five</Item>
        <Item>Six</Item>
        <Item>Seven</Item>
        <Item>Eight</Item>
      </Carousel_Elastic>
    </div>
  );
}
