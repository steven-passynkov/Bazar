import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/navbar.css";
import "../styles/productpage.css";
import "../styles/spinner.css";
import useSupabase from "../utils/supabaseClient";
import users from "../components/users";

function MyApp({ Component, pageProps }) {
  const { session, supabase } = useSupabase();
  const { user } = users;
  return (
    <Component
      session={session}
      supabase={supabase}
      user={user}
      {...pageProps}
    />
  );
}
export default MyApp;
