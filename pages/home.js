import Nav_bar from "../components/nav-bar";
import Carousel_PayedPost from "../components/carousel-paidAds";
import Carousel_Items from "../carousel-items";
import Footer from "../components/footer"

export default function Home_Page() {
  return (
    <div>
      <Nav_bar />
      <h3><strong>Trending</strong></h3>
      <Carousel_PayedPost
        numberItemsDesktop={3}
        numberItemsTable={2}
        numberItemsMobile={1}
        items={Carousel_Items.trending_items}
      />
      <h3><strong>Auto</strong></h3>
      <Carousel_PayedPost
        numberItemsDesktop={4}
        numberItemsTable={2}
        numberItemsMobile={1}
        items={Carousel_Items.auto_items}
      />
      <Footer/>
    </div>
  );
}
