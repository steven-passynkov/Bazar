import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import { useState } from "react";

export default function signup({ supabase }) {
  let signupSuperbase = async () => {
    return await supabase.auth.signUp({
      email: "someone@email.com",
      password: "xvcDzdbERBlGFhdTZTQs",
    });
  };
  const [username, setUsername] = useState();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const addinfo = async ({ data, error }) =>
    await supabase
      .from("user")
      .insert([{ username: username, email: email, password: password }]);

  return (
    <div>
      <InputGroup>
        <FormControl
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
        <FormControl
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          aria-label="Email"
          aria-describedby="basic-addon1"
        />
        <FormControl
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          aria-label="Password"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
      <Button onClick={addinfo}>Signup</Button>
    </div>
  );
}
