import Navbar from "./nav-bar";
import Footer from "./footer";
import Head from "next/head";
export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Bazar</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
