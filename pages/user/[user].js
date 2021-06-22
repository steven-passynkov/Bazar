import Nav_bar from "../../components/nav-bar";
import Footer from "../../components/footer";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import ReactStars from "react-rating-stars-component";
import { useRouter } from "next/router";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Profile_page() {
  const router = useRouter();
  const { user } = router.query;
  const [data, setData] = useState(null);

  const starts = {
    size: 30,
    value: 2.5,
    edit: false,
    isHalf: true,
  };

  useEffect(() => {
    if (user) {
      getUserData();
    }
  }, [user]);

  const getUserData = () => {
    axios({
      method: "get",
      url: `http://localhost:3000/api/users?name=${user}`,
    }).then(function (response) {
      setData(response.data[0]);
    });
  };

  return (
    <>
      {data == null ? (
        <p>loading</p>
      ) : (
        <div>
          <Nav_bar />
          <Card>
            <Card>
              <Image
                src={data.picture}
                roundedCircle
                fluid
              />
            </Card>
            <Card.Header>{data.nickname}</Card.Header>
            <Card.Text>Date joined: {data.created_at}</Card.Text>
            <Card.Text>Number of items sold</Card.Text>
            <Card.Text>Avrage rating</Card.Text>
            <ReactStars {...stars} />
            <Card.Text>Name adds</Card.Text>
          </Card>
          <Footer />
        </div>
      )}
    </>
  );
}
