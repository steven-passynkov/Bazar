import Head from "next/head";
import Form from "react-bootstrap/Form";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Button from "react-bootstrap/Button";

export default function Nav_bar() {
  return (
    <div>
      <h3>Bozar</h3>
      <Form>
        <Form.Control type="text" placeholder="search" />
      </Form>

      <Button variant="light">Search</Button>

      <DropdownButton id="dropdown-basic-button" title="Dropdown button">
        <Dropdown.Item href="#/action-1">Something</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Something</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something </Dropdown.Item>
      </DropdownButton>

      <Button variant="light">Sell</Button>
    </div>
  );
}
