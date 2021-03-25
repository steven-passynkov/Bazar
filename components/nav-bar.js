import Head from "next/head";
import Form from "react-bootstrap/Form";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Button from "react-bootstrap/Button";
import navbar from "../styles/navbar.module.css";

export default function Nav_bar() {
  return (
    <div className = {navbar.header}>
      <h3 className ={navbar.h3}>Bozar</h3>
      
      <div className = {navbar.search}>
      <Form.Group >
        <Form.Control type="text" placeholder="What are you looking for?" className ={navbar.searchbar} />
      </Form.Group>
      </div>
     
     
      <Button variant="light" className ={ navbar.sbtn}>Search</Button>

      <DropdownButton id="dropdown-basic-button" title="Dropdown button">
        <Dropdown.Item href="#/action-1">Something</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Something</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something </Dropdown.Item>
      </DropdownButton>

      <Button variant="light">Sell</Button>
    </div>
  );
}
