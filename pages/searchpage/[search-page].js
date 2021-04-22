import Nav_bar from "../../components/nav-bar";
import Footer from "../../components/footer";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Card from "react-bootstrap/Card";
import Search_results from "../../search-results.json";

export default function search_page() {
  return (
    <div>
      <Nav_bar />
      <Breadcrumb>
        <Breadcrumb.Item href="../../">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="#">random</Breadcrumb.Item>
        <Breadcrumb.Item href="#">random</Breadcrumb.Item>
        <Breadcrumb.Item active>random</Breadcrumb.Item>
      </Breadcrumb>
      {Search_results.map((el) => (
          <div>
          <Card variant="light" key={el.id}>
            <Card.Img variant="top" src="" />
            <Card.Body>
              <Card.Title>
                <div>{el.name}</div>
              </Card.Title>
              <Card.Text>Text</Card.Text>
            </Card.Body>
          </Card>
          </div>
        ))}
    </div>
  );
}
