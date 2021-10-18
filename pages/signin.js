import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useState, useEffect, useContext } from "react";
import { UserContext } from "../components/UserContext";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import { Table } from "react-bootstrap";

export default function login({ supabase }) {
  const user = useContext(UserContext);
  console.log({ user });
  const [userIdentification, setUserIdentification] = useState();
  const [password, setPassword] = useState();

  const auth = async () => {
    return await supabase.auth.signIn({
      email: userIdentification,
      password: password,
    });
  };

  async function signInWithGoogle() {
    const { user, session, error } = await supabase.auth.signIn({
      provider: "google",
    });
  }

  const authTable = async () => {
    await auth();
    //let { data: users, error } = await supabase
    //.from('users')
    //.select('id')
    const username = await supabase.from("user").select("username").eq('username', 'passynkovsteven');
    console.log("username", username);
    const password = await supabase.from("user").select("password").eq('password', 's47389bj');
    console.log("password", password)
  };

  if (username === userIdentification() || password === setPassword()){
    console.log("works")
  } else{
    console.log("error")
  }

  return (
    <div className="backround">
      <InputGroup>
        <FormControl
          onChange={() => setUserIdentification(event.target.value)}
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
        <FormControl
          onChange={() => setPassword(event.target.value)}
          placeholder="Password"
          aria-label="Password"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
      <Button onClick={authTable}>Log in</Button>
      <Button onClick={signInWithGoogle}>Login with google</Button>
    </div>
  );
}
