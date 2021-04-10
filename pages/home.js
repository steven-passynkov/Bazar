import Nav_bar from "../components/nav-bar";
import Carousel_PayedPost from "../components/carousel-paidAds";
import Carousel_Items from "../carousel-items";
import Footer from "../components/footer";
import { signIn, useSession } from "next-auth/client";

export default function Home_Page() {
  const [session, loading] = useSession();

  if (loading) {
    return <p>Loading...</p>;
  }
  return (
    
    <>
    {session ? (
      <div>
      <Nav_bar />
      <div>
        <h3>
          <strong>Trending</strong>
        </h3>
        <Carousel_PayedPost
          numberItemsDesktop={3}
          numberItemsTable={2}
          numberItemsMobile={1}
          items={Carousel_Items.trending_items}
        />
      </div>
      <div>
        <h3>
          <strong>Auto</strong>
        </h3>
        <Carousel_PayedPost
          numberItemsDesktop={4}
          numberItemsTable={2}
          numberItemsMobile={1}
          items={Carousel_Items.auto_items}
        />
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
