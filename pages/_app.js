import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/navbar.css";
import "../styles/productpage.css";
import "../styles/spinner.css";
import { UserProvider } from "@auth0/nextjs-auth0";
import "../styles/step1.css";
import "../styles/home.css"
import "../styles/step2.css"
function MyApp({ Component, pageProps }) {
  return (
    <UserProvider>
      <Component {...pageProps} />
    </UserProvider>
  );
}

export default MyApp;
