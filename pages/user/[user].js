import Nav_bar from "../../components/nav-bar";
import Footer from "../../components/footer";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import ReactStars from "react-rating-stars-component";

export default function Profile_page() {
  const firstExample = {
    size: 30,
    value: 2.5,
    edit: false,
    isHalf: true,
  };
  return (
    <div>
      <Nav_bar />
      <Card>
        <Card>
          <Image
            src="https://s.gravatar.com/avatar/7700bc1c68d6350fbf9cce29c5cb0090?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fpa.png"
            roundedCircle
            fluid
          />
        </Card>
        <Card.Header>Name</Card.Header>
        <Card.Text>Date joined: </Card.Text>
        <Card.Text>Number of items sold</Card.Text>
        <Card.Text>Avrage rating</Card.Text>
        <ReactStars {...firstExample} />
        <Card.Text>Name adds</Card.Text>
      </Card>
      <Footer />
    </div>
  );
}
