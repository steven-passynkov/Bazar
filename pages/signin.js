import Card from "react-bootstrap/Card"
import { useState, useEffect } from "react";

export default function login({  }) {
  const user = ({session, supabase}) => {
    const [loggedIn, setLoggedIn] = useState(false);
  
    useEffect(() => {
      setLoggedIn(!!session);
    }, [session]);
  };
  console.log(user)
  return (
    <div className="backround">
      <div> 
      <Card></Card>
      </div>
    </div>
  );
}
