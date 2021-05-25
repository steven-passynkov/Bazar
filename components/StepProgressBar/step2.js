import { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";

export default function step1() {
  const [alert, setAlert] = useState(true);
  const [value, setValue] = useState(null);

  useEffect(() => {
    if (value === null) {
      return;
    }
    if (value === "") {
      setAlert(true);
    } else {
      setAlert(false);
    }
  }, [value]);

  return (
    <div>
      <h1>Step 2</h1>
      <>
        {alert == false ? (
          <Form.Control
            onChange={() => setValue(event.target.value)}
            required
            isValid
          />
        ) : (
          <>
            <Form.Control
              onChange={() => setValue(event.target.value)}
              required
              isInvalid
            />
            <Form.Control.Feedback type="invalid">
              Please enter a name
            </Form.Control.Feedback>
          </>
        )}
      </>
    </div>
  );
}
