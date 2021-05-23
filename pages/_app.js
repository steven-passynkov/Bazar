import '../styles/globals.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/navbar.css";
import "../styles/productpage.css";
import "../styles/spinner.css";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
