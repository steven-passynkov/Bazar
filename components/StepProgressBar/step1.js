import { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";

export default function step1({onUpdateValidator}) {
  const [alert, setAlert] = useState(true);
  const [value, setValue] = useState(null);
  const [validator, setValidator] = useState(false)

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

  useEffect(() => {
    if (value === null) {
    setValidator(false);
    }
    if (value === null) {
      setValidator(false);
    } else {
      setValidator(true);
    }
  }, [value]);

  useEffect(()=> {
    onUpdateValidator(validator);
  }, [validator]);

  return (
    <div>
      <h1>Step 1</h1>
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
