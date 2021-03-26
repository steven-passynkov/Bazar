import Nav_bar from "../components/nav-bar.js";
import Carousel_PayedPost from "../components/carousel-paidAds";
import Carousel_Items from "../carousel-items.json";

export default function Home_Page() {
  return (
    <div>
      <Nav_bar />
      <Carousel_PayedPost
        numberItemsDesktop={3}
        numberItemsTable={2}
        numberItemsMobile={1}
        items={Carousel_Items.trending_items}
      />
      <Carousel_PayedPost
        numberItemsDesktop={4}
        numberItemsTable={2}
        numberItemsMobile={1}
        items={Carousel_Items.auto_items}
      />
    </div>
  );
}
