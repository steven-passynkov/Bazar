import HomeNavbar from "./Homenav-bar";
import Navbar from "./nav-bar";
import Footer from "./footer";
import Head from "next/head";
import { useRouter } from "next/router";
export default function Layout({ children }) {
  const router = useRouter();
  console.log(router.route);
  if (router.route == "/") {
    return (
      <>
        <Head>
          <title>Bazar</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <HomeNavbar />
        <main>{children}</main>
        <Footer />
      </>
    );
  } else {
    return (
      <>
        <Head>
          <title>Bazar</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </>
    );
  }
}
