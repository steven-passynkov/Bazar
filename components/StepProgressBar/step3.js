import { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";

export default function step1({ onUpdateValidator }) {
  const [alert, setAlert] = useState(true);
  const [value, setValue] = useState(null);
  const [validator, setValidator] = useState(false);

  const [filealert, setFileAlert] = useState(true);
  const [filevalue, setFileValue] = useState(null);

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
    if (filevalue === null) {
      return;
    }
    if (filevalue === "") {
      setFileAlert(true);
    } else {
      setFileAlert(false);
    }
  }, [filevalue]);

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

  useEffect(() => {
    onUpdateValidator(validator);
  }, [validator]);

  return (
    <div>
      <h1>Step 3</h1>
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
              Please enter a discription
            </Form.Control.Feedback>
          </>
        )}
      </>

      <Form>
        {filealert == false ? (
          <div className="mb-3">
            <Form.File id="formcheck-api-custom" custom>
              <Form.File.Input isValid />
              <Form.File.Label data-browse="Button text">
                Custom file input
              </Form.File.Label>
            </Form.File>
          </div>
        ) : (
          <div className="mb-3">
            <Form.File id="formcheck-api-custom" custom>
              <Form.File.Input isInvalid />
              <Form.File.Label>Custom file input</Form.File.Label>
              <Form.Control.Feedback type="isInvalid">
                Please select a file
              </Form.Control.Feedback>
            </Form.File>
          </div>
        )}
      </Form>
    </div>
  );
}
