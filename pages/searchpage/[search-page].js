import React, { useState } from "react";
import Nav_bar from "../../components/nav-bar";
import Footer from "../../components/footer";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Card from "react-bootstrap/Card";
import Search_results from "../../search-results.json";
import Search_results_css from "../../styles/Search_results.module.css";
import { useRouter } from "next/router";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Dropdown from "react-bootstrap/Dropdown";
import {Pagination} from "../../components/pagination/pagination"

export default function search_page() {
  const router = useRouter();
  const { search } = router.query;
  const [recordsPerPage, setRecordsPerPage] = useState(5);
  const [students, setStudents] = useState([]);
  const [isLoadingStudents, setLoadingStudents] = useState(false);
  const [reload, setReload] = useState(false);
  const [isSearchingStudents, setSearchingStudents] = useState(false);

  return (
    <div>
      <div>
        <Nav_bar />
        <Breadcrumb>
          <Breadcrumb.Item href="../../">Home</Breadcrumb.Item>
          <Breadcrumb.Item href="#">Catagory: {}</Breadcrumb.Item>
          <Breadcrumb.Item href="#">Region: {}</Breadcrumb.Item>
          <Breadcrumb.Item active>{search}</Breadcrumb.Item>
        </Breadcrumb>
      </div>

      <div>
        <Card>
          <div className={Search_results_css.dropdown}>
            <Dropdown>
              <Dropdown.Toggle id="basic-nav-dropdown">
                Popularity
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div className={Search_results_css.notify}>
            <Form>
              <Form.Check type="switch" id="custom-switch" label="Notify me" />
            </Form>
          </div>
        </Card>
      </div>
      <Container fluid>
        <Col>
        {!students.length && !isLoadingStudents && (
                    <div className="text-center">
                      No students
                    </div>
                  )}

           {isLoadingStudents && (
                    <div className="text-center">
                        <span>Loading...</span>
                    </div>
                  )}

          {!isLoadingStudents && students.map((el) => (
            <div>
              <Card
                className={Search_results_css.results}
                variant="light"
                key={el.id}
              >
                <Card.Link href={`../product/${el.name}`}>
                <Card.Img variant="top" src="" />
                <Card.Body>
                  <Card.Title>
                    <div>{el.name}</div>
                  </Card.Title>
                  <Card.Text>Text</Card.Text>
                </Card.Body>
                </Card.Link>
              </Card>
            </div>
          ))}
        </Col>
        <div className={Search_results_css.fliter}>
          <Card>
            <Card.Title>Fliter:</Card.Title>
          </Card>
        </div>
        <Pagination
                apiRoute={`/api/search`}
                recordsPerPage={recordsPerPage}
                responseData={setStudents}
                isLoadingData={setLoadingStudents}
                reloadApi={reload}
                search={search}
                isSearchingData={setSearchingStudents}
              />
      </Container>
      <Footer/>
    </div>
  );
}
