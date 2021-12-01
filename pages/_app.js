import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import useSupabase from "../utils/supabaseClient";
import { UserProvider } from '../components/UserContext';
import Layout from '../components/Layout'

function MyApp({ Component, pageProps }) {
  const { session, supabase } = useSupabase();
  return (
    <Layout>
    <UserProvider>
    <Component
      session={session}
      supabase={supabase}
      {...pageProps}
    />
    </UserProvider>
    </Layout>
  );
}
export default MyApp;
