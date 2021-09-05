import { useState, useEffect } from "react";
const user = ({session, supabase}) => {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    setLoggedIn(!!session);
  }, [session]);
};


export default user