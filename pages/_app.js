import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/navbar.css";
import "../styles/productpage.css";
import "../styles/spinner.css";
import "../styles/login.css";
import useSupabase from "../utils/supabaseClient";
import { UserProvider } from '../components/UserContext';

function MyApp({ Component, pageProps }) {
  const { session, supabase } = useSupabase();
  return (
    <UserProvider>
    <Component
      session={session}
      supabase={supabase}
      {...pageProps}
    />
    </UserProvider>
  );
}
export default MyApp;
